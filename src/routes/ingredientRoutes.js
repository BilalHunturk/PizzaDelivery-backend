const express = require('express');
const IngredientController = require('../contollers/ingredientController'); // Adjust the path as needed

const router = express.Router();

router.post('/ingredient', IngredientController.createIngredientType);
router.get('/ingredients', IngredientController.getAllIngredientTypes);
router.get('/ingredient/:id', IngredientController.getIngredientTypeById);
router.delete('/ingredient/:id', IngredientController.deleteIngredientById);
router.put('/ingredient/:id', IngredientController.updateIngredientTypeById);

module.exports = router;