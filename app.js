const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors'); // ✅ add

const apiRouter = require('./app_api/routes/index');
const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');

const app = express();
const PORT = 3000;

// ✅ add (allow Angular dev server)
app.use(cors({
  origin: ['http://localhost:4201', 'http://localhost:4200']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/travel', travelRouter);

app.get('/api/test', (req, res) => res.json({ ok: true }));

app.use('/api', apiRouter);

console.log('API routes mounted at /api');
mongoose.connect('mongodb://127.0.0.1:27017/travlr')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));
app.listen(PORT, () => {
  console.log(`✅ TRAVLR EXPRESS STARTED: http://localhost:${PORT}`);
});
