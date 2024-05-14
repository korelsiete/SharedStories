El objetivo de esta prueba técnica es desarrollar una plataforma web colaborativa para compartir noticias entre varios usuarios. La plataforma debe tener tanto un frontend como un backend, y cada integrante del equipo puede trabajar en una parte específica del proyecto.

**Requisitos Funcionales**

0. [Registro de Usuarios ☑️](#registro-de-usuarios)

    - Los usuarios deben poder registrarse en la plataforma proporcionando un nombre de usuario, correo electrónico y contraseña.

1. [Inicio de Sesión ☑️](#inicio-de-sesion)

    - Los usuarios registrados deben poder iniciar sesión en la plataforma utilizando su correo electrónico y contraseña.

2. [Publicación de Noticias ☑️](#publicacion-de-noticias)

    - Los usuarios autenticados deben poder publicar noticias en la plataforma.
    - Cada noticia debe contener un título, contenido, categoría y opcionalmente una imagen.
    - Las noticias deben mostrarse en una página principal en orden cronológico inverso (las más recientes primero).

3. [Edición y Eliminación de Noticias ☑️](#edicion-y-eliminacion-de-noticias)

    - Los usuarios que hayan publicado una noticia deben poder editarla y eliminarla.

4. [Comentarios ☑️](#comentarios)

    - Los usuarios autenticados deben poder comentar en las noticias.
    - Los comentarios deben mostrarse debajo de cada noticia.

5. [Interfaz de Usuario Responsiva: ☑️](#interfaz-de-usuario-responsiva)

    - La plataforma debe ser completamente responsiva y estar optimizada para su visualización en dispositivos móviles y de escritorio.

**Requisitos Técnicos**

## Frontend

    - Utilizar HTML, CSS y JavaScript para la interfaz de usuario.
    - Se permite el uso de frameworks como React, Angular o Vue.js.

## Backend:

    - Utilizar un lenguaje de programación como Node.js.
    - Se permite el uso de bases de datos relacionales o NoSQL, también se puede usar Express u otras librerías para almacenar los datos de usuarios, noticias y comentarios.

## Colaboración:

    - Utilizar un sistema de control de versiones como Git para la colaboración entre los integrantes del equipo.
    - Cada integrante del equipo debe trabajar en una rama independiente y luego fusionar sus cambios en la rama principal (master/main).

## Entrega:

    - La prueba técnica debe entregarse como un repositorio de Git público en una plataforma como GitHub, GitLab o Bitbucket.
    - El repositorio debe contener tanto el código fuente como un archivo README.md con instrucciones claras para configurar y ejecutar el proyecto localmente.

## Evaluación:

    - Se evaluará la funcionalidad, usabilidad y calidad del código del proyecto.
    - También se tomará en cuenta la claridad y la organización del código, así como el uso de buenas prácticas de desarrollo web.