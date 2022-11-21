var resultsDir;
var oraculoToPass;

function createReport(dataResult) {
  let structureBody = getStructureBody(dataResult);
  let noTotalComparisonPassed = dataResult[1].noTotalComparisonsPassed;
  let noTotalComparisonfailed = dataResult[2].noTotalComparisonsFailed;
  let structurePage =
    `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Reporte pruebas de regresión</title>
      <link rel="stylesheet" href="./bootstrap.min.css">
      <link rel="stylesheet" href="./index.css">
      <script src="./jquery.min.js"></script>
      <script src="./bootstrap.bundle.min.js"></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.bundle.min.js'></script>
      <script>
        $(document).ready(function () {
          var ctx = $("#chart-line");
          var myLineChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ["Fallidas", "Exitosas"],
              datasets: [{
                data: [${noTotalComparisonfailed}, ${noTotalComparisonPassed}],
                backgroundColor: ["rgba(218, 122, 109, 0.8)", "rgba(142, 223, 160, 0.8)"]
              }]
            },
            options: {
              title: {
                display: false,
                text: 'Consolidado pruebas de regresión'
              }
            }
          });
        });
      </script>
    </head>
    ${structureBody}
    </html>`;

  return structurePage;
}

function getStructureBody(dataResult) {
  let mainBodyContent = getStructureBodyContent(dataResult);
  let structureBody =
    `<body>
    <div id="root" class="container-fluids">
      <div class="container-fluids header-margin" id="header-page">
        <h1 class="text-center">Reporte pruebas de regresión visual</h1>
      </div>
      <div class="container-fluids">
      ${mainBodyContent}
      </div>
    </div>
    <div class="modal fade" role="dialog" tabindex="-1" id="simple-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content"><button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          <div class="modal-body"><img class="img-fluid" id="image" src=""></div>
        </div>
      </div>
      <script src="./config.js"></script>
    </div>
  </body>`;

  return structureBody;
}

function getStructureBodyContent(dataResult) {
  let generalConsolidated = getGeneralConsolidated(dataResult);
  let acctionsButtons = getActionsButtons();
  let accordiosSteps = getAccordionsSteps(dataResult);
  let structureBody =
    `${generalConsolidated}
        ${acctionsButtons}
        <div class="container-fluids body-margin" id="body-page">
            <div class="border border-primary rounded">
            ${accordiosSteps}
            </div>
        </div>
        `;

  return structureBody;
}

function getGeneralConsolidated(dataResult) {
  let noTotalComparisons = dataResult[0].noTotalComparisons;
  let noTotalComparisonPassed = dataResult[1].noTotalComparisonsPassed;
  let noTotalComparisonfailed = dataResult[2].noTotalComparisonsFailed;
  let generalConsolidated =
    `<div class="row body-margin padding-margin border border-primary rounded">
        <div class="text-center">
          <h4>Consolidado general de pruebas realizadas</h4>
          <hr>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="row size-row-main-resume vertical-align">
              <div class="text-left">
                <h4>Total comparaciones realizadas: <span>${noTotalComparisons}</span></h4>
              </div>
            </div>
            <div class="row size-row-main-resume vertical-align">
              <div class="text-left">
                <h4>Total comparaciones exitosas: <span class="passed">${noTotalComparisonPassed}</span></h4>
              </div>
            </div>
            <div class="row size-row-main-resume vertical-align">
              <div class="text-left">
                <h4>Total comparaciones fallidas: <span class="failed">${noTotalComparisonfailed}</span></h4>
              </div>
            </div>
            <div class="row size-row-main-resume vertical-align">
              <div class="text-left">
                <h4>Oraculo máximo de desajuste configurado: <span class="failed">${oraculoToPass}%</span></h4>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row ">
              <canvas id="chart-line" class="chartjs-render-monitor size-pie-chart text-center"></canvas>
            </div>
          </div>
        </div>
      </div>`;
  return generalConsolidated;
}

function getActionsButtons() {
  let acctionsButtons = `
      <div class="cointainer-fluids">
        <div class="row body-margin padding-margin border border-primary rounded">
          <div class="col-3 d-grid gap-2">
            <button class="btn btn-success ml-auto margin-btn" id="btn-comp-passed" type="button">Ver exitosos</button>
          </div>
          <div class="col-3 d-grid gap-2">
            <button class="btn btn-danger ml-auto margin-btn" id="btn-comp-failed" type="button">Ver fallidos</button>
          </div>
          <div class="col-3 d-grid gap-2">
            <button class="btn btn-primary ml-auto margin-btn" id="btn-comp-all" type="button">Ver todos</button>
          </div>
          <div class="col-3 d-grid gap-2">
             <button class="btn btn-secondary ml-auto margin-btn" type="button" data-bs-toggle="collapse"
             data-bs-target=".multi-collapse">Contraer/Expandir</button>
          </div>
        </div>
      </div>
      `;

  return acctionsButtons;
}

function getAccordionsSteps(dataResult) {
  let stepsAccordionsHtml = '';
  let steps = dataResult[3].dataResult;
  for (let indexSteps = 0; indexSteps < steps.length; indexSteps++) {
    let elementStep = steps[indexSteps];
    let nameElementStep = elementStep.elementStep;
    let noTotalComparations = elementStep.noTotalComparations;
    let countComparisonPassed = elementStep.countComparisonPassed;
    let countComparisonfailed = elementStep.countComparisonfailed;
    let classAccordionButton = getClassAccordionButton(countComparisonfailed, countComparisonPassed);
    let leakedData = elementStep.leakedData;

    let stepsAccordionsContentHtml = getAccordionsStepsContent(indexSteps, leakedData);
    stepsAccordionsHtml += `
        <div class="border border-top ${classAccordionButton}">
            <div class="accordion" id="stp${indexSteps}Acc">
                <h2 class="accordion-header" id="stp${indexSteps}heaAcc">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#stp${indexSteps}AccTar"
                    aria-expanded="false" aria-controls="stp${indexSteps}AccCon">
                    <strong>Feature ${nameElementStep}</strong>
                </button>
                </h2>
            </div>
            <div id="stp${indexSteps}AccTar" class="accordion-collapse multi-collapse show"
                aria-labelledby="stp${indexSteps}heaAcc" data-bs-parent="#stp${indexSteps}Acc">
                <div class="accordion-body">
                    <div class="row header-margin border border-primary rounded">
                        <div class="text-center">
                            <h4>Consolidado Step ${nameElementStep}</h4>
                            <hr>
                            </div>
                            <div class="col-4 text-center">
                                <h4>Total comparaciones realizadas</h4>
                                <h5><span>${noTotalComparations}</span></h5>
                            </div>
                            <div class="col-4 text-center">
                                <h4>Total comparaciones exitosas</h4>
                                <h5><span class="passed margin-bottom">${countComparisonPassed}</span></h5>
                            </div>
                            <div class="col-4 text-center">
                                <h4>Total comparaciones fallidas</h4>
                                <h5><span class="failed">${countComparisonfailed}</span></h5>
                        </div>
                    </div>
                    ${stepsAccordionsContentHtml}
                </div>
            </div>
        </div>     
        `;
  }

  let accordiosStepsContent =
    `
        <div class="container-fluids body-margin" id="body-page">
            <div class="border border-primary rounded">
            ${stepsAccordionsHtml}
            </div>
        </div>
        `;

  return accordiosStepsContent;
}

function getAccordionsStepsContent(countIndex, dataResult) {
  let stepsAccordionsContentHtml = '';
  for (let indexStepContent = 0; indexStepContent < dataResult.length; indexStepContent++) {
    const elementStepContent = dataResult[indexStepContent];
    let nameComparison = elementStepContent.imageName;
    let image = elementStepContent.image;
    let imageReference = elementStepContent.imageReference;
    let imageCompared = elementStepContent.imageCompared;
    let difference = elementStepContent.difference;
    stepsAccordionsContentHtml += `
        <div class="accordion border-bottom collapse-comp-${elementStepContent.passedComparison}" id="stp${countIndex}AccComp${indexStepContent}">
            <h2 class="accordion-header" id="stp${countIndex}heaAccComp${indexStepContent}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#stp${countIndex}AccTarComp${indexStepContent}" aria-expanded="false" aria-controls="stp${countIndex}AccConComp${indexStepContent}">
                <strong class="color-blue">» Comparación ${nameComparison}</strong>
            </button>
            </h2>
            <div id="stp${countIndex}AccTarComp${indexStepContent}" class="accordion-collapse multi-collapse show"
            aria-labelledby="stp${countIndex}heaAccComp${indexStepContent}" data-bs-parent="#stp${countIndex}AccComp${indexStepContent}">
            <div class="accordion-body">
                <div class="row border border-ligh rounded padding-margin margin-bottom">
                <div class="padding-margin">
                    <h4 class="text-center">Nombre del screenshot: ${nameComparison}</h4>
                </div>
                <hr>
                <div class="col-4">
                    <div class="container-fluids">
                    <h5 class="text-center">Screenshot inicial</h5>
                    <img src="${cleanPathImage(image)}" class="img-size" data-bs-toggle="modal"
                        data-bs-target="#simple-modal" data-bigimage="${cleanPathImage(image)}"
                        alt="Image initial ${nameComparison}">
                    </div>
                </div>
                <div class="col-4">
                    <div class="container-fluids">
                    <h5 class="text-center">Screenshot de referencia</h5>
                    <img src="${cleanPathImage(imageReference)}" class="img-size" data-bs-toggle="modal"
                        data-bs-target="#simple-modal" data-bigimage="${cleanPathImage(imageReference)}"
                        alt="Image reference  ${nameComparison}">
                    </div>
                </div>
                <div class="col-4">
                    <div class="container-fluids">
                    <h5 class="text-center">Resultado de comparación</h5>
                    <img src="${cleanPathImage(imageCompared)}" class="img-size" data-bs-toggle="modal"
                        data-bs-target="#simple-modal" data-bigimage="${cleanPathImage(imageCompared)}"
                        alt="Image comparison ${nameComparison}">
                    </div>
                </div>
                <div class="container-fluids margin-top">
                    <hr>
                    <h5>Resultado del análisis</h5>
                    <div><strong>Las imagenes tienen las mismas dimesiones: </strong>${difference.isSameDimensions}
                    </div>
                    <div><strong>Diferencia en dimensiones:
                    </strong>${JSON.stringify(difference.dimensionDifference)}</div>
                    <div><strong>Porcentaje de desajuste: </strong>${difference.misMatchPercentage}</div>
                    <div><strong>Estatus de la comparacion:
                    </strong><span class="${elementStepContent.passedComparison}">${elementStepContent.passedComparison}</span></div>
                </div>
                </div>
            </div>
            </div>
        </div>`
      ;

  }

  return stepsAccordionsContentHtml;

}

function getClassAccordionButton(countComparisonFailed, countComparisonPassed) {
  let classAccordionButton = '';
  if (countComparisonFailed > 0 && countComparisonPassed > 0) {
    classAccordionButton = 'collapse-comp';
  } else if (countComparisonFailed > 0 && countComparisonPassed == 0) {
    classAccordionButton = 'collapse-comp-failed ';
  } else {
    classAccordionButton += 'collapse-comp-passed ';
  }

  return classAccordionButton;
}

function cleanPathImage(image) {
  return image.replace(`${resultsDir}/`, '');
}

function setResultsDir(dir) {
  resultsDir = dir;
}

function setOraculoToPass(oraculo) {
  oraculoToPass = oraculo;
}

module.exports = { createReport, setResultsDir, setOraculoToPass };