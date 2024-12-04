const router = require('express').Router();
const pizzaRoutes = require('./pizzaRoutes');
const userRoutes = require('./userRoutes');
const userDetailsRoutes = require('./userDetailsRoutes');
const orderRoutes = require('./orderRoutes');
const ingredientTypeRoutes = require('./ingredientTypeRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const authRoutes = require('./authRoutes');
const orderItemRoutes = require('./orderItemRoutes')
const cartItemRoutes = require('./cartItemRoutes')
const cartRoutes = require('./cartRoutes')



router.use(pizzaRoutes);
router.use(userRoutes);
router.use(userDetailsRoutes);
router.use(orderRoutes);
router.use(orderItemRoutes);
router.use(ingredientRoutes);
router.use(ingredientTypeRoutes);
router.use(authRoutes);
router.use(cartRoutes);
router.use(cartItemRoutes);



router.get('/status', (req, res) => {
    return res.json({
        status: 'API WORKING'
    })
})
module.exports = router;