const travel = (req, res) => {
  res.render('travel', {
    title: 'Travel',
    trips: [
      { name: 'Paris', description: 'Experience the city of lights.' },
      { name: 'New York', description: 'Explore the city that never sleeps.' },
      { name: 'Tokyo', description: 'Discover culture, food, and technology.' }
    ]
  });
};

module.exports = { travel };
