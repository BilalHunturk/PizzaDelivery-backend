const express = require('express');
const IngredientTypeController = require('../contollers/ingredientTypeController'); // Adjust the path as needed

const router = express.Router();

router.post('/ingredientType', IngredientTypeController.createIngredientType);
router.get('/ingredientTypes', IngredientTypeController.getAllIngredientTypes);
router.get('/ingredientType/:id', IngredientTypeController.getIngredientTypeById);
router.delete('/ingredientType/:id', IngredientTypeController.deleteIngredientTypeById);
router.put('/ingredientType/:id', IngredientTypeController.updateIngredientTypeById);

module.exports = router;