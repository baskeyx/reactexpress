const express = require('express')
const app = express()
const path = __dirname + '/build/';
const port = 3000
app.use(express.static(path));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

app.get('/api/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})