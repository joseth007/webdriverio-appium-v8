<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>
  <h1>Proyecto de Automatización de Pruebas con WebDriverIO, Appium, GitHub Actions y BrowserStack</h1>

  <p>Este repositorio contiene un proyecto de automatización de pruebas utilizando WebDriverIO integrado con Appium para pruebas móviles, JavaScript como lenguaje de programación, GitHub Actions para CI/CD, y BrowserStack para pruebas en la nube.</p>

  <h2>Configuración del Entorno</h2>

  <h3>Prerrequisitos</h3>
  <p>Asegúrate de tener instalado lo siguiente:</p>
  <ul>
    <li>Node.js y npm</li>
    <li>Java Development Kit (JDK) para Appium</li>
    <li>Cuenta de BrowserStack con credenciales válidas</li>
  </ul>

  <h3>Instalación de Dependencias</h3>
  <pre><code>npm install</code></pre>

  <h2>Configuración de BrowserStack</h2>

  <p>Antes de ejecutar las pruebas en BrowserStack, asegúrate de configurar las credenciales en el archivo <code>wdio.browserstack.conf.js</code>.</p>
  <pre><code>exports.config = {
    // ...
    user: 'TU_USUARIO',
    key: 'TU_CLAVE',
    // ...
};</code></pre>

  <h2>Ejecución de Pruebas</h2>

  <h3>Pruebas Locales</h3>
  <p>Para ejecutar las pruebas localmente, utiliza el siguiente comando:</p>
  <pre><code>npm test</code></pre>

  <h3>Pruebas en BrowserStack</h3>
  <p>Para ejecutar las pruebas en BrowserStack, utiliza el siguiente comando:</p>
  <pre><code>npm run test:browserstack</code></pre>

  <h2>Integración Continua con GitHub Actions</h2>

  <p>Este repositorio está configurado para ejecutar automáticamente las pruebas en cada push o pull request utilizando GitHub Actions. Los resultados de las pruebas se publican como comentarios en el pull request correspondiente.</p>

  <h2>Estructura del Proyecto</h2>

  <ul>
    <li><code>test/</code>: Contiene los scripts de prueba.</li>
    <li><code>config/</code>: Contiene los archivos de configuración de WebDriverIO.</li>
    <li><code>reports/</code>: Contiene los informes de ejecución de pruebas.</li>
  </ul>

  <h2>Contribución</h2>

  <p>¡Siéntete libre de contribuir al proyecto! Abre un issue para sugerencias o problemas encontrados, o envía un pull request con mejoras.</p>

  <h2>Licencia</h2>

  <p>Este proyecto está licenciado bajo la <a href="LICENSE">Licencia MIT</a>.</p>
</body>
</html>
