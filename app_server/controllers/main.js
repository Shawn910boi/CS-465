const home = (req, res) => {
  res.render('index', { title: 'Travlr Getaways' });
};

module.exports = { home };
