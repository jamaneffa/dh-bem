# Be Elegant Men

## Descripción / Description

Este es un proyecto realizado en el contexto del curso de **Programación Web Full Stack** de **Digital House**, en el cual se levantó una aplicación utilizando Node.js con Express. 
En primera instancia, se consumieron datos desde archivos JSON y posteriormente se migró a una Base de Datos relacional MySQL representada a través de Sequelize. Esta Base de Datos inicialmente corría de manera local y luego se hizo un deploy en la nube utilizando el servicio de Always Data. De igual forma, las imágenes se encontraban en el mismo repositorio y fueron migradas a un servicio en la nube (Cloudinary). 
El lenguaje utilizado para el Back-End fue JavaScript y en el Front-End se utilizó HTML, CSS y también JavaScript, trabajando con el Template Engine EJS. 
Como parte de este proyecto, se nos solicitó diseñar un [Dashboard](https://github.com/jamaneffa/dh-dashboard-bem.git) realizado en React que consuma información de APIs creadas por nosotros. 
La metodología de trabajo fue llevada adelante utilizando el método SCRUM y metodologías ágiles de desarrollo, usando un tablero de trabajo en la plataforma Trello. 
Una vez finalizado el curso, continué implementando, de manera individual, distintas mejoras al proyecto en mi propio repositorio forkeado, como por ejemplo la implementación en los servicios de nube antes mencionados y la implementación de la capa de servicios que no estaba realizada para mantener el propósito del modelo MVC y la separación de responsabilidades que esto implica.

This is a project carried out in the context of the **Full Stack Web Programming** course at **Digital House**, in which an application was developed using Node.js with Express. 
Initially, data was consumed from JSON files and later migrated to a relational MySQL database represented through Sequelize. This database initially ran locally and was later deployed to the cloud using the Always Data service. Similarly, the images were originally located in the same repository and were migrated to a cloud service (Cloudinary). 
JavaScript was the language used for the Back-End, while HTML, CSS, and JavaScript were used for the Front-End, working with the EJS Template Engine. 
As part of this project, we were asked to design a [Dashboard](https://github.com/jamaneffa/dh-dashboard-bem.git) built in React that consumes information from APIs created by us. 
The work methodology was carried out using the SCRUM method and agile development methodologies, using a work board on the Trello platform. 
Once the course was completed, I continued to implement various improvements to the project individually, in my own forked repository, such as the implementation in the aforementioned cloud services and the implementation of the service layer that was not done to maintain the purpose of the MVC model and the separation of responsibilities that this implies.

Website Desplegado / Deployed Website: [https://beelegantmen.onrender.com](https://beelegantmen.onrender.com)  

## Instrucciones para levantar el proyecto localmente / Instructions to locally run the project

Para levantar el proyecto en tu entorno local, sigue estos pasos / To run the project in your local environment, follow these steps

1. **Clonar el repositorio / Clone the repository**

   Abre una terminal y ejecuta el siguiente comando / Open a terminal and run the following command

   ```bash
   git clone https://github.com/jamaneffa/dh-bem.git
   ```

2. **Instalar dependencias / Install dependencies**

    Navega a la carpeta del proyecto / Navigate to the project folder

    ```bash
    cd dh-bem
    ```

    Luego, instala las dependencias del proyecto / Then, install the project dependencies
    
    ```bash
    npm install
    ```

3. **Credenciales / Credentials**

    Incluya las variables de entorno para conectarse a la **Base de Datos** y al repositorio de imagenes en **Cloudinary** desde el archivo **.env** / Include the environment variables to connect to the **Database** and image repository in **Cloudinary** from the **.env** file

4. **Levantar el proyecto / Run the project**

    Para iniciar el servidor de desarrollo, ejecuta el siguiente comando / To start the development server, run the following command

    ```bash
    npm start
    ```

    Esto iniciará el servidor en el puerto 3030 / This will start the server at 3030 port