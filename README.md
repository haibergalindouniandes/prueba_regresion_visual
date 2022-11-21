# Integrantes

| Nombre | email |
| --------- | --------- |
| Haiber Humberto Galindo Sanchez | h.galindos@uniandes.edu.co |
| Jhon Fredy Guzmán Caicedo | Jf.guzmanc1@uniandes.edu.co |
| Jorge Mario Carrillo Riveros | jm.carrillo@uniandes.edu.co |
| Edgar Ariel Salamanca Camargo | ea.salamanca@uniandes.edu.co |

# Pruebas de regresión visual
Este proyecto permite realizar pruebas de regresión visual entre dos versiones diferentes de la aplicación bajo pruebas Ghost (https://ghost.org/), haciendo uso de las APIs de Automatización Cypress (https://www.cypress.io/) y Kraken (https://thesoftwaredesignlab.github.io/KrakenMobile/) para la ejecución de las pruebas automatizadas donde se recolectarán los screenshots, y posteriormente se ralizará la comparación de las imágenes con ResembleJS (https://rsmbl.github.io/Resemble.js/) para detectar los cambios visuales entre versiones. A continuación, se explica el detalle: 

## Versiones de Ghost utilizadas para las pruebas de regresión visual
| Versiones de Ghost | 
| ----- |
|3.42|
|5.22|


## Escenarios de prueba 
El proyecto cuenta con una suite de pruebas principal que tiene 10 escenarios de prueba automatizadas, los cuales se detallan a continuación:

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
  -	Instalación de Ghost 3.42:  docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42
  -	Instalación de Ghost 5.22:  docker run -d -e url=http://localhost:3001 -p 3001:2369 --name ghost_5.22 ghost:5.22


## Estructura general de carpetas del proyecto
La estructura interna de la aplicación a nivel de carpetas y su finalidad es la siguiente:

![image](https://drive.google.com/uc?export=view&id=1ASKvfHyaxXRTh_HhiHkZuo7zpAwk7R10)

-	**Cypress:** Carpeta que contiene 5 escenarios de pruebas de extremo a extremo automatizadas con la herramienta Cypress, correspondientes a la versión 3.42 de Ghost.
-	**Kraken:** Carpeta que contiene 5 escenarios de pruebas de extremo a extremo automatizadas con la herramienta Kraken, correspondientes a la versión 3.42 de Ghost.
-	**ResembleJSCompare:** Carpeta que contiene el proyecto que permite realizar las pruebas de regresión visual, que tienen como objetivo comparar los cambios presentados de la aplicación bajo prueba Ghost de las versiones 5.22 y 3.42


## Ejecución de las pruebas de regresión visual
Ya que el objetivo es poder realizar la comparación de screenshots tomandos en la ejecución de las diferentes pruebas automatizadas de extremo a extremo asociadas a los 10 escenarios de prueba mencionados anteriormente, se debe seguir los siguientes pasos:
-	En primera instancia se debe crear una carpeta en donde se centralizarán los diferentes proyectos (test_e2e_cypress_ghost, test_e2e_kraken_ghost y prueba_regresion_visual). <br>* **Url test_e2e_cypress_ghost:** https://github.com/haibergalindouniandes/test_e2e_cypress_ghost.git <br>*  **Url de test_e2e_kraken_ghost:** https://github.com/haibergalindouniandes/test_e2e_kraken_ghost.git <br>* **Url de prueba_regresion_visual:** https://github.com/haibergalindouniandes/prueba_regresion_visual.git


![image](https://drive.google.com/uc?export=view&id=1pwDhGK1ZHnc_HW-X_LIN0fozzMoBiAAa)

## Ejecución de las pruebas de regresión visual
Ya que el objetivo es poder realizar la comparación de screenshots tomandos en la ejecución de las diferentes pruebas automatizadas de extremo a extremo asociadas a los 10 escenarios de prueba mencionados anteriormente, se debe seguir los siguientes pasos:
-	En primera instancia se debe crear una carpeta en donde se centralizarán los diferentes proyectos (test_e2e_cypress_ghost, test_e2e_kraken_ghost y prueba_regresion_visual). Por ejemplo pruebas `PruebasAutomatizadas`. <br>* **Url test_e2e_cypress_ghost:** https://github.com/haibergalindouniandes/test_e2e_cypress_ghost.git <br>* **Url de test_e2e_kraken_ghost:** https://github.com/haibergalindouniandes/test_e2e_kraken_ghost.git <br>* **Url de prueba_regresion_visual:** https://github.com/haibergalindouniandes/prueba_regresion_visual.git
-	 Ejecutar la suite de pruebas automatizadas de extremo a extremo implementadas con la herramienta Cypress. Para esto seguir el paso a paso descrito en el archivo REDME.md del proyecto `./test_e2e_cypress_ghost/README.md`.
	 
-	Ejecutar la suite de pruebas automatizadas de extremo a extremo implementadas con la herramienta Kraken. Para esto seguir el paso a paso descrito en el archivo REDME.md del proyecto `./test_e2e_kraken_ghost/README.md`.
	
-	Ejecutar la suite de pruebas automatizadas de extremo a extremo de los 5 escenarios nuevos implementados con Kraken de la versión 3.42 de Ghost. Para esto seguir el paso a paso descrito en el archivo REDME.md del proyecto `./prueba_regresion_visual/Kraken/README.md`.

-	Ejecutar la suite de pruebas automatizadas de extremo a extremo de los 5 escenarios nuevos implementados con Cypress de la versión 3.42 de Ghost. Para esto seguir el paso a paso descrito en el archivo REDME.md del proyecto `./prueba_regresion_visual/Cypress/README.md`.

-	Ejecutar las pruebas de regresión visual implementando el proyecto ResembleJSCompare, se deben relacionar las carpetas con los screenshots tomados según la estructura requerida por el proyecto. Para esto seguir el paso a paso descrito en el archivo REDME.md del proyecto `./prueba_regresion_visual/ResembleJSCompare/README.md`.
