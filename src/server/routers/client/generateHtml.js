import env from '../../env';

const generateHtml = (rootContent, state) => `
  <!doctype html>
  <html>
  <head>
    <title>${env.appName}</title>

    <link
      href="/dist/index.css"
      rel="stylesheet"
    >

  </head>
  <body>
    <div id="app-anchor">${rootContent}</div>

    <script>
      window._state = ${JSON.stringify(state).replace(/</g, '\\u003c')}
    </script>

    <script src="/dist/client-bundle.js"></script>
  </body>
  </html>
`;

export default generateHtml;
