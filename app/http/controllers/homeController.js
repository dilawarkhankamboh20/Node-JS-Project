const menuModel = require("../../models/menu")
function homeController() {
    return {
        async index(req, res) {
            const pizzas = await menuModel.find()
            console.log(pizzas);
            return res.render('home', { pizzas: pizzas })
        }
    }
}

module.exports = homeController