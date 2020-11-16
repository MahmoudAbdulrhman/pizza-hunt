const { Pizza } = require('../models ');

const pizzaController = {
    // get all pizzas
    getAllPizza(req, res){
        pizzaController.find({})
        .then(dbPizzaData => res.json(dbPizzaData));
    }
};

// get one pizza by id

getPizzaById({})

module.exports = pizzaController;