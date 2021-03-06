const nodeHtmlToImage = require('node-html-to-image')

export default async (req, res) => {

 
const image = await nodeHtmlToImage({
  output: './image.png',
  html: `<html>
    <head>
      <style>
        body {
          width: 2480px;
          height: 3508px;
        }
      </style>
    </head>
    <body>Hello world!</body>
  </html>
  `
})
  .then(() => console.log('The image was created successfully!'))

  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(image, 'binary');
};