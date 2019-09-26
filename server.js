const path = require('path');

const express = require('express');

const app = express();

const htmlRoutes = require('./routing/htmlRoutes')

app.use(express.static(path.join(__dirname, 'public')));

app.use(htmlRoutes);

// This is something extra I added to show you how to add a route for no page found
// Go to localhost:3000/whateveryouwant
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})

app.listen(3000)