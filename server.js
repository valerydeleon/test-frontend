const express = require('express');
const app = express();

app.use('/', express.static("public"));
// app.use('/static', express.static(__dirname + '/src'));

app.listen(3000, function(){
  console.log("listen in 3000");
})
