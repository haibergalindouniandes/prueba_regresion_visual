const resemble = require("resemblejs/resemble")
const config = require("./config.json");
const fs = require('fs');
const path = require('path');
const reporter = require('./reporter');

const { firstPath, secondPath, valMinToPassedComparison, options } = config;
const filesDir = firstPath || undefined;
const filesDirReference = secondPath || undefined;
const datetime = new Date().toISOString().replace(/:/g, ".");
const resultsDir = `./results/${datetime}`;
const filesDirProject = `${resultsDir}/resources`;
const dirImagesInit = `${filesDirProject}/init/`;
const dirImagesReference = `${filesDirProject}/reference/`;
const dirImagesCompare = `${filesDirProject}/compare/`;

async function executeTest() {
    console.log('------------------------------------------------------------------------------------')
    console.log('Ejecución iniciada ...')
    var resultOfComparation = [];
    checkFolderStructure(filesDir, filesDirReference);
    createMultipleDirs([resultsDir, filesDirProject, dirImagesInit, dirImagesReference, dirImagesCompare]);
    copyRecursiveSync(filesDir, dirImagesInit);
    copyRecursiveSync(filesDirReference, dirImagesReference);
    const constFileDir = getAllFiles(dirImagesInit);
    const constFileDirReference = getAllFiles(dirImagesReference);

    resultOfComparation = compareMultiplesImages(constFileDir, constFileDirReference, dirImagesCompare);

    let dataReport = getDataReport(resultOfComparation);

    reporter.setResultsDir(resultsDir);
    reporter.setOraculoToPass(valMinToPassedComparison);
    fs.writeFileSync(`./results/${datetime}/report.html`, reporter.createReport(dataReport));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
    fs.copyFileSync('./config.js', `./results/${datetime}/config.js`);

    console.log('------------------------------------------------------------------------------------')
    console.log(`Ejecución finalizada. Por favor verfique el reporte generado "${resultsDir}/report.html"`)
}

function getDataReport(resultOfComparation) {
    let dataReport = [];
    let noTotalComparations = 0;
    let noTotalComparisonPassed = 0;
    let noTotalComparisonfailed = 0;
    let dataResult = filterDataObjectResult(resultOfComparation);

    for (let index = 0; index < dataResult.length; index++) {
        const element = dataResult[index];
        noTotalComparations += element.noTotalComparations;
        noTotalComparisonPassed += element.countComparisonPassed;
        noTotalComparisonfailed += element.countComparisonfailed;
    }
    dataReport.push({ 'noTotalComparisons': noTotalComparations });
    dataReport.push({ 'noTotalComparisonsPassed': noTotalComparisonPassed });
    dataReport.push({ 'noTotalComparisonsFailed': noTotalComparisonfailed });
    dataReport.push({ 'dataResult': dataResult });
    return dataReport;
}

function filterDataObjectResult(dataResult) {
    let arrayLeakedData = [];
    let stepArray = getArrayOfSteps(dataResult);

    for (let stepIndex = 0; stepIndex < stepArray.length; stepIndex++) {
        let elementStep = stepArray[stepIndex];
        let dataFiltered = filterData(dataResult, elementStep);
        let noTotalComparations = dataFiltered[0];
        let countComparisonPassed = dataFiltered[1];
        let countComparisonfailed = dataFiltered[2];
        let leakedData = dataFiltered[3];
        arrayLeakedData.push({ elementStep, noTotalComparations, countComparisonPassed, countComparisonfailed, leakedData })
    }
    return arrayLeakedData;
}

function getArrayOfSteps(dataResult) {
    let stepArray = [];
    for (let index = 0; index < dataResult.length; index++) {
        let elementResult = dataResult[index];
        let stepName = elementResult.elementImageDir.dirName;
        if (!stepArray.includes(stepName)) {
            stepArray.push(stepName);
        }
    }
    return stepArray;
}

function filterData(dataResult, valueToFilter) {
    let data = dataResult.filter(function (el) {
        return el.elementImageDir.dirName == valueToFilter;
    });
    let noTotalComparations = data.length;
    let countComparison = countComparisonByStatus(data);
    let countComparisonPassed = countComparison[0];
    let countComparisonfailed = countComparison[1];

    return [noTotalComparations, countComparisonPassed, countComparisonfailed, data];
}

function countComparisonByStatus(dataToCount) {
    let countComparisonPassed = 0;
    let countComparisonfailed = 0;

    for (let index = 0; index < dataToCount.length; index++) {
        const element = dataToCount[index];
        if (element.passedComparison === 'passed') {
            countComparisonPassed += 1;
        } else {
            countComparisonfailed += 1;
        }
    }
    return [countComparisonPassed, countComparisonfailed];
}

function compareMultiplesImages(imagesDir, imagesDirReference, dirImagesCompare) {
    let arrayImagesCompared = [];
    for (let index = 0; index < imagesDir.length; index++) {
        let elementImageDir = imagesDir[index];
        let dirCompare = `${dirImagesCompare}${elementImageDir.dirName}`;
        createDir(dirCompare);

        let imagesDataFile = elementImageDir.dataFile;
        let elementImageDirReference = imagesDirReference[index];
        let imagesDataFileReference = elementImageDirReference.dataFile;
        for (let indexImage = 0; indexImage < imagesDataFile.length; indexImage++) {
            let difference = {};
            let imageName = imagesDataFile[indexImage].name;
            let image = imagesDataFile[indexImage].filePath;
            let imageReference = imagesDataFileReference[indexImage].filePath;
            let imageCompared = `${dirCompare}/compare-${imagesDataFile[indexImage].name}.png`;
            resemble(image)
                .compareTo(imageReference)
                .ignoreColors().onComplete(function (dataDiff) {
                    writeFile(imageCompared, dataDiff.getBuffer());
                    difference = dataDiff;
                });
            let passedComparison = validateResultOfComparation(difference.misMatchPercentage);
            arrayImagesCompared.push({ elementImageDir, imageName, image, imageReference, imageCompared, passedComparison, difference })
        }
    }
    return arrayImagesCompared;
}

function validateResultOfComparation(diffResult) {
    let passedComparison = 'failed';
    if (diffResult <= valMinToPassedComparison) {
        passedComparison = 'passed';
    }
    return passedComparison;
}

function writeFile(file, dataBuffer) {
    fs.writeFileSync(file, dataBuffer);
}

function getAllFiles(fileDir) {
    var exists = fs.existsSync(fileDir);
    var stats = exists && fs.statSync(fileDir);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        let filesArray = [];
        fs.readdirSync(fileDir).forEach(function (childItemName) {
            let dirPath = `${fileDir}${childItemName}/`;
            filesArray.push(getFilesFromDir(dirPath));
        });
        return filesArray;
    }
    return [];
}

function getFilesFromDir(dirPath) {
    let dataFile = [];
    let pathDir = dirPath.split('/');
    let dirName = pathDir[pathDir.length - 2];
    fs.readdirSync(dirPath).forEach(file => {
        let filePath = `${dirPath}${file}`;
        const name = path.parse(filePath).name;
        const ext = path.parse(filePath).ext;
        const fullFilePath = path.resolve(dirPath, file);
        const stat = fs.statSync(fullFilePath);
        const isFile = stat.isFile();
        dataFile.push({ name, fullFilePath, filePath, ext, isFile });
    });
    return { dirName, dataFile };
}

function copyRecursiveSync(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        createDir(dest);
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

function createMultipleDirs(arrayDirs) {
    for (let index = 0; index < arrayDirs.length; index++) {
        const element = arrayDirs[index];
        createDir(element);
    }
}

function createDir(dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
}

function checkFolderStructure(dirInit, dirReference) {
    var exists = fs.existsSync(dirInit);
    var stats = exists && fs.statSync(dirInit);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.readdirSync(dirInit).forEach(function (childItemName) {
            let separator = '/';
            if (dirInit.includes('\\')) {
                separator = '\\';
            }
            let dirPathReference = `${dirReference}${separator}${childItemName}`;
            let dirPathReferenceExists = fs.existsSync(dirPathReference);
            if (!dirPathReferenceExists) {
                throw new Error('La estructura de carpetas no es la misma');
            }
        });
    }
}

(async () => await executeTest())();