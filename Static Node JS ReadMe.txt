3A 

-TERMINAL

npm init or npm init --y
npm i express or npm install express --save

- CREATE A public FOLDER WHERE WE WOULD STORE OUR index.html file


-CODE IN index.js 
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Application is Started')
})

If working then do bookstore code