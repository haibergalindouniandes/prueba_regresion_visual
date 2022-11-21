# Pruebas de regresión visual
Este proyecto permite realizar pruebas de regresión visual entre dos versiones diferentes de la aplicación bajo pruebas Ghost (https://ghost.org/), haciendo uso de las APIs de Automatización Cypress (https://www.cypress.io/) y Kraken (https://thesoftwaredesignlab.github.io/KrakenMobile/). A continuación, se explica el detalle: 

## Versiones de Ghost utilizadas para las pruebas de regresión visual
| Versiones de Ghost | 
| ----- |
|3.42|
|5.22|



## Escenarios de prueba 
El proyecto cuenta con una suite de pruebas principal que tiene 5 escenarios de prueba automatizadas, los cuales se detallan a continuación:

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


## Prerrequisitos para ejecutar las pruebas 
Dado que el objetivo del proyecto es realizar las pruebas de regresión visuales de las versiones anteriormente mencionadas, se hace necesario contar en primera instancia con la instalación de aplicación, para esto se recomiendo realizar las instalaciones a través de Docker (https://www.docker.com/). Se comparten los siguientes enlaces para este fin:
-	Instalación de Docker en Windows:  https://docs.docker.com/desktop/install/windows-install/
-	Instalación de Docker en Linux:  	https://docs.docker.com/engine/install/ubuntu/
-	Instalación de Docker en Mac:  	https://docs.docker.com/desktop/install/mac-install/

## Instalación de las diferentes versiones de Ghost con Docker
Para realizar la instalación de las versiones de Ghost con Docker, se comparte el siguiente enlace https://ghost.org/docs/install/docker/ que contiene información de cómo se realiza este proceso.
Ejecutar los siguientes comandos en la terminal de Docker: 
  -	Instalación de Ghost 3.42:  `docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42`
  -	Instalación de Ghost 5.22:  `docker run -d -e url=http://localhost:3001 -p 3001:2369 --name ghost_5.22 ghost:5.22`

## Estructura general de carpetas del proyecto
La estructura interna de la aplicación a nivel de carpetas y su finalidad es la siguiente:

![image](https://drive.google.com/uc?export=view&id=1ASKvfHyaxXRTh_HhiHkZuo7zpAwk7R10)

![image](https://drive.google.com/uc?export=view&id=169dirgjKP5sTfUcJAa0_ahw-JuTZznJF)

![image](https://drive.google.com/uc?export=view&id=1ASKvfHyaxXRTh_HhiHkZuo7zpAwk7R10)


https://drive.google.com/file/d/1ASKvfHyaxXRTh_HhiHkZuo7zpAwk7R10/view?usp=sharing

**cypress:** Carpeta contenedora de las funcionalidades de Cypress.
-	**fixtures:** Donde se guarda los archivos que se usaran en los mocks, pueden ser imágenes, videos, txt etc.
-	**integration:** Donde se guarda los archivos que se usaran en los mocks, pueden ser imágenes, videos, txt etc.
<br>* **PageObjects**:  Carpeta que contiene las clases necesarias para hacer la abstracción de los elementos a utilizar de una página. Ej: `login.js`
<br>* **step-definitions**:  Carpeta que contiene los test de pruebas automatizados. Ej: `createPage.spec.js`
-	**screenshots**: Carpeta que contiene el registro de screenshots generados por la ejecución de las pruebas.

**support:** Carpeta que contiene todos los archivos JS con las funcionalidades utilitarias que necesita el proyecto. Ej: `utils.js`
 

## Instalación y configuración
Para utilizar hacer uso del test de pruebas de la aplicación Ghost, se deben seguir los siguientes pasos:
- Obtenga el código fuente del repositorio: haga clic en Descargar como Zip y descomprima la carpeta en su máquina o clone el repositorio en su ambiente local.
- Instalar los módulos requeridos: Usando Node Package Manager (https://www.npmjs.com/), run `npm install` en la carpeta raíz; esto instalara los módulos de Cypress CLI y otras dependencias necesarias para el correcto funcionamiento del proyecto, como lo es el módulo de faker (https://www.npmjs.com/package/faker). En caso de que ya tenga instalado Cypress, es mejor evitar instalarlo nuevamente en esta carpeta; puede realizar la instalación de dependencias de forma independiente, para esto ejecuta los comandos: `npm install faker`.
- Configure las propiedades de la aplicación: La carpeta raíz del repositorio contiene el archivo `properties.config.js`, el cual brinda los siguientes parámetros que se pueden modificar: 
<br>* `appName:` Nombre de la aplicación a probar. Ej: Monkey LosEstudiantes.com.
<br>* `baseUrl:` Url de la aplicación a pruebas. Ej: `http://localhost:2368/ghost/`.
<br>* `delay:` Tiempo de retraso entre ejecuciones. Este valor debe ser en milisegundos. Ej: `1000`.
<br>* `emailLogin:` Correo electrónico de la cuenta administrador de la aplicación. Ej: `jose_2345@pruebas.com.co`.
<br>* `passwordLogin:` Contraseña de la cuenta administrador de la aplicación. Ej: `jose@2345`.
<br>* `dashboardPage:` Url de la página del dashboard de la aplicación. Ej: `http://su_dominio/ghost/#/dashboard`.
<br>* `staffPage:` Url de la página de staff de la aplicación. Ej: `http://su_dominio/ghost/#/settings/staff`.
<br>* `settingsGeneralPage:` Url de la página de configuraciones generales de la aplicación. Ej: `http://su_dominio/ghost/#/settings/general`.

## Ejecución
- Una vez realizada la configuración del archivo `properties.config.js` para lanzar la ejecucón de las pruebas, a través de la terminal ejecute el siguiente comando: `./node_modules/.bin/cypress run --config-file ./properties.config.js`: 

## Resultados
Cuando finalice la ejecución de la prueba, se generará en la carpeta de `./results` con un video de la ejecución en un navegador y adicional a esto se genera una carpeta en la ruta `./cypress/screenshots` con los screenshots tomados durante la ejecución de la prueba.

## Ventajas de utilizar esta herramienta

Con base a la experiencia en el uso de la herramienta para la automatización de los diferentes escenarios de prueba mencionados en la parte superior de este documento, se concluye que la herramienta tiene las siguientes ventajas:

- Cuenta con una amplia documentación y tutoriales disponibles en línea que facilita la búsqueda de información.
- Su ejecución es rápida.
- La interfaz gráfica es simple e intuitiva.
- Permite diseñar y probar de manera sencilla diferentes tipos de test.
- Se pueden ver de forma interactiva los pasos y acciones ejecutadas durante la prueba
- Esta basado en Javascript que es un lenguaje ampliamente conocido y por ende facilita su aprendizaje para personas nuevas en el campo de pruebas de software.
- Compatible con las versiones más actualizadas de nodejs.
- Se puede extender sus funcionalidades con plugins.
- Permite realizar la captura de pantalla y vídeos de forma automática.


## Desventajas de utilizar esta herramienta

Con base a la experiencia en el uso de la herramienta para la automatización de los diferentes escenarios de prueba mencionados en la parte superior de este documento, se concluye que la herramienta tiene las siguientes desventajas:

- Los test a veces fallan aleatoriamente sin una razón aparente.
- No soporta pruebas en la que se requieren dos browsers al mismo tiempo, como por ejemplo pruebas en una aplicación de chat.
- Solo soporta Javascript para crear escenarios y/o casos de prueba.
- No soportará test con múltiples navegadores al mismo tiempo.
- Solo permite interactuar con una pestaña del navegador.