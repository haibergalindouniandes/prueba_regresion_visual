# Integrantes

| Nombre | email |
| --------- | --------- |
| Haiber Humberto Galindo Sanchez | h.galindos@uniandes.edu.co |
| Jhon Fredy Guzmán Caicedo | Jf.guzmanc1@uniandes.edu.co |
| Jorge Mario Carrillo Riveros | jm.carrillo@uniandes.edu.co |
| Edgar Ariel Salamanca Camargo | ea.salamanca@uniandes.edu.co |

# Pruebas de regresión visual con ResembleJS
Este proyecto permite realizar pruebas de regresión visual, la cual consiste en hacer la comparativa de diferentes imágenes y evidenciar las diferencias entre ambas. Esto se podría realizar de forma manual, es decir una persona que realice la inspección de cada imagen y detecte los posibles cambios, pero como se pueden imaginar resultaría bastante complejo a menos que la persona que realice este proceso sea un super humano con un excelente ojo. 
Hay APIs como es el caso de ResembleJS (https://rsmbl.github.io/Resemble.js/) que nos permiten realizar esta comparación entre imágenes de forma mucho más rápida, precisa y eficiente, retornando el estado de la comparación y los cambios identificados en esta.


## Estructura de carpetas del proyecto
A continuación, se presenta la estructura interna de la aplicación a nivel de carpetas:

![image](https://drive.google.com/uc?export=view&id=1Go_xKF2UcjW0jjAjtUAZa5WWgn4YzF6q)

Como se puede evidenciar el proyecto cuenta con dos carpetas nomas:
-	**node_modules:** es la carpeta contenedora de las diferentes dependencias que se instalan a través de Node Package Manager (https://www.npmjs.com/)
-	**results:** es la carpeta donde se crearan los diferentes archivos generados de la comparación de las imágenes, se aclara que el proyecto a través del envio de las rutas que se envíen en el archivo de configuración (se explica en el apartado de Instalación y configuración) copias las carpetas con las imágenes en `results` para poder realizar su proceso de comparación.


## Instalación y configuración
Para utilizar hacer uso este proyecto, se deben seguir los siguientes pasos:
- Obtenga el código fuente del repositorio: haga clic en Descargar como Zip y descomprima la carpeta en su máquina o clone el repositorio en su ambiente local.
- Instalar los módulos requeridos: Desde una terminal se ejecuta el comando `npm install` en la carpeta raíz del proyecto (`./ResembleJSCompare/`); esto instalara los módulos de Resemble y otras dependencias necesarias para el correcto funcionamiento del proyecto, como lo es el módulo de Bootstrap (https://www.npmjs.com/package/bootstrap), necesaria para la generación del reporte consolidado de resultados.


- Configure las propiedades de la aplicación: La carpeta raíz del repositorio contiene el archivo `properties.json`, el cual brinda los siguientes parámetros que se pueden modificar: 
![image](https://drive.google.com/uc?export=view&id=1alTh-q_rF2rky_859SCieX6eBsIo4Tpk)

<br>* `firstPath:` Ruta de las imágenes iniciales. Ej: `C:\\Users\\haiber.galindo\\Downloads\\screenshots-kraken\\screenshots`.
<br>* `secondPath:` Ruta de las imágenes a comparar. Ej: `C:\\Users\\haiber.galindo\\Downloads\\screenshots-cypress\\screenshots`.
<br>* `valMinToPassedComparison`: Oráculo máximo establecido para que la comparación de las imágenes sea exitosa. Ej: `20`, que representaría que toda comparación que supere este oráculo tendrá un resultado fallido.

Algo que se debe tener muy en cuenta es la estructura de las carpetas y que el número de imágenes contenida en cada una, debe ser y llamarse iguales, de lo contrario se devolverá un error por la consola de la terminal donde se lanza la ejecución del proyecto.

![image](https://drive.google.com/uc?export=view&id=15WslfxoG-vHIcUZnXyImO2m209NVB66m)


## Ejecución
Una vez realizada la configuración del archivo `config.json` para lanzar la ejecucón de las pruebas, a través de la terminal ejecute el siguiente comando: `node index.js` 

## Resultados
Cuando finalice la ejecución de la prueba, se generará en la carpeta de `./reports/` una carpeta con la fecha y hora de ejecución `./reports/2022-11-20T15.45.37.160Z` y dentro de esta se encontrará el archivo `report.html` que tendrá el reporte de la comparación visual realizada con base a las imágenes de las rutas indicadas en el archivo `config.json`.
El archivo `report.html` se debe abrir con el navegador de su preferencia y se visualizara de la siguiente forma:
![image](https://drive.google.com/uc?export=view&id=1NOOz8GfXEQWJC7FzHTOrAicgDcTCqEWs)


## Ventajas de utilizar esta herramienta
- Su ejecución es rápida.
- Es muy flexible y permite realizar la manipulación de la librería ResembleJS con base a las necesidades específicas.
- Esta basado en Javascript que es un lenguaje ampliamente conocido y por ende facilita su aprendizaje para personas nuevas en el campo de pruebas de software.

## Desventajas de utilizar esta herramienta
- No genera un reporte de forma dinámica. La creación del reporte se debe hacer de forma inpendiente y para esto se debe tener conocimientos en JavaScript, HTML y CSS.

