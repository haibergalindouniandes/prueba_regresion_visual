# Integrantes

| Nombre | email |
| --------- | --------- |
| Haiber Humberto Galindo Sanchez | h.galindos@uniandes.edu.co |
| Jhon Fredy Guzmán Caicedo | Jf.guzmanc1@uniandes.edu.co |
| Jorge Mario Carrillo Riveros | jm.carrillo@uniandes.edu.co |
| Edgar Ariel Salamanca Camargo | ea.salamanca@uniandes.edu.co |

# Pruebas Automatizadas De Extremo A Extremo Con Kraken - Aplicación Ghost
Este proyecto permite realizar pruebas automatizadas de extremo a extremo de la aplicación Kraken, haciendo uso del API de Automatización Kraken (https://thesoftwaredesignlab.github.io/KrakenMobile/). A continuación se explica el detalle: 

## Escenarios de prueba 
El proyecto cuenta con una suite de pruebas principal que tiene 5 escenarios de prueba automatizadas, los cuales se detallan a continuación:

### Funcionalidades 

| Funcionalidades a probar | 
| ----- |
| Members |
| Pages |
| Posts |
| Staff |
| Login |

| Identificador | Escenario | Descripción |
| ----- | ----------- | ----------- |
| PA_01 |  Crear post   |   Escenario que realiza la creación de un nuevo post con información aleatoria y lo deja en estado borrador.   |
| PA_02 |  Crear nueva cuenta  |  Escenario que realiza la creación de una cuenta nueva con información aleatoria.  |
| PA_03 |  Crear página |   Escenario que realiza la creación de una página con información aleatoria.   |
| PA_04 |  Editar información de mi perfil|  Escenario que realiza la modificación de información del perfil con que se ingrese. Esta información se genera de forma aleatoria.   |
| PA_05 |  Eliminar página|   Escenario que realiza el borrado de la primera página que se encuentre en el listado de páginas.      |


## Estructura de carpetas
A continuación, se presenta la estructura interna de la aplicación a nivel de carpetas:

![image](https://drive.google.com/uc?export=view&id=1BsKF8h35XRTPFHto0Q4WDD--5vvut5X0)


## Instalación y configuración
Para utilizar hacer uso del test de pruebas de la aplicación Ghost, se deben seguir los siguientes pasos:
- Obtenga el código fuente del repositorio: haga clic en Descargar como Zip y descomprima la carpeta en su máquina o clone el repositorio en su ambiente local.
- Kraken requiere Ruby 2.20 o superior, pero se recomienda usar la versión 2.3. 
- Se hace uso calabash-android como para su ejecucion.
, puede verificar sus requisitos previos en este enlace. La instalación y administración de una gema se realiza a través del comando gem. Para instalar la gema de Kraken, ejecute el siguiente comando.
- Instalar los módulos requeridos: Desde una terminal se ejecuta el comando `gem install kraken-mobile` en la carpeta raíz del proyecto; esto instalara los módulos de Kraken y otras dependencias necesarias para el correcto funcionamiento del proyecto, como lo es el módulo de faker (https://www.npmjs.com/package/faker), Cucumber (https://cucumber.io/), Chai (https://www.chaijs.com/), Gherkin ( https://npm.io/search/keyword:gherkin), entre otras.<br>Para más información acerca del paso a paso para la instalación de Kraken dirijase a la página oficial de Kraken https://thesoftwaredesignlab.github.io/KrakenMobile/.


- Configure las propiedades de la aplicación: La carpeta raíz del repositorio contiene el archivo `properties.json`, el cual brinda los siguientes parámetros que se pueden modificar: 
<br>* `URL:` Url de la aplicación a pruebas. Ej: `http://localhost:2368/ghost/`.
<br>* `EMAIL`: Correo electrónico de la cuenta administrador de la aplicación. Ej: `jose_2345@pruebas.com.co`.
<br>* `PASSWORD`: Contraseña de la cuenta administrador de la aplicación. Ej: `jose@2345`.
<br>* `URL_STAFF`: Url de la página de staff de la aplicación. Ej: `http://su_dominio/ghost/#/settings/staff`.
<br>* `URL_GENERAL_SETTINGS`: Url de la página de configuraciones generales de la aplicación. Ej: `http://su_dominio/ghost/#/settings/general`.

## Ejecución
- Una vez realizada la configuración del archivo `properties.json` para lanzar la ejecucón de las pruebas, a través de la terminal ejecute el siguiente comando: `./node_modules/kraken-node/bin/kraken-node run` 

## Resultados
Cuando finalice la ejecución de la prueba, se generará en la carpeta de `./reports/` se generan los reportes y screenshots tomados durante la ejecución de la prueba.

## Ventajas de utilizar esta herramienta

- Maneja un lenguaje más amigable y entendible para todos los usuarios.
- Permite mezclar escenarios de pruebas tanto para aplicaciones móviles como aplicaciones web
- Genera reportes detallados, agradables visualmente y deja un registro de los diferentes pasos ejecutados a través de screenshots.
- En el proceso de crear los escenarios, gracias al lenguaje natural que maneja, permite un entendimiento mayor de lo que se quiere probar y es mejor la interaccion entre el equipo(desarrollo, pruebas y negocio)

## Desventajas de utilizar esta herramienta

- Cuenta con poca documentación y los ejemplos de uso que se encuentran en la página oficial son muy reducidos.
- No soporta la definición de varios features a la vez, hay que utilizar uno y dentro de este montar todos los escenarios de pruebas.
- Realizar la instalación por primera vez de la herramienta resulta ser complejo, aunque existe documentación está no está actualizada.
- La falta de comunicacion en el equipo podria redundar en que los escenarios fallen por cambios no reportados en la interaz grafica, o escenarios incompletos o replicabilidad.
