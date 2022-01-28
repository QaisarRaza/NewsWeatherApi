const express = require('express');
const app = express();
const port = 7000;
const path= require('path');
app.use(express.static('./Newfolder'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, ('./Newfolder/news.html')))
})

app.get('/othernews', (req, res) => {
  res.sendFile(path.resolve(__dirname, ('./Newfolder/othernews.html')))
})

app.get('/weather', (req, res) => {
  res.sendFile(path.resolve(__dirname, ('./Newfolder/weather.html')))
})


app.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, ('./Newfolder/errorpage.html')))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})