const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 3000;

// View engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Partials
hbs.registerPartials(
  path.join(__dirname, 'app_server', 'views', 'partials')
);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');

app.use('/', indexRouter);
app.use('/travel', travelRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
