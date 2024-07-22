const router = require('express').Router();
const pizzaRoutes = require('./pizzaRoutes');
const userRoutes = require('./userRoutes');
const userDetailsRoutes = require('./userDetailsRoutes');
const orderRoutes = require('./orderRoutes');
const ingredientTypeRoutes = require('./ingredientTypeRoutes');
const ingredientRoutes = require('./ingredientRoutes');


router.use(pizzaRoutes);
router.use(userRoutes);
router.use(userDetailsRoutes);
router.use(orderRoutes);
router.use(ingredientTypeRoutes);
router.use(ingredientRoutes);

router.get('/status', (req, res) => {
    return res.json({
        status: 'API WORKING'
    })
})
module.exports = router;