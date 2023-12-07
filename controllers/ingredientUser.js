const express = require('express')

const IngredientUser = require('../models/IngredientUser')
const Ingredient = require('../models/Ingredient')

const read = async (req, res) => {
    var foodData0 = []
    var foodData1 = []
    var foodData2 = []
    var foodData3 = []
    var foodData4 = []
    try {
        const ingredients = await IngredientUser.find({ user: req.userId }).populate('ingredient', [
            'title', 'description', 'image', 'type'
        ])
        console.log(ingredients)
        ingredients.map((ing) => {
            const typ = ing.ingredient.type
            if (typ === 0) {
                foodData0.push(ing.ingredient)
                console.log(foodData0)
            }
            if (typ === 1) foodData1.push(ing.ingredient)
            if (typ === 2) foodData2.push(ing.ingredient)
            if (typ === 3) foodData3.push(ing.ingredient)
            if (typ === 4) foodData4.push(ing.ingredient)

        })
        const data = [
            {
                name: 'Củ',
                foodData: foodData0
            },
            {
                name: 'Rau',
                foodData: foodData1
            },
            {
                name: 'Cá',
                foodData: foodData2
            },
            {
                name: 'Thịt',
                foodData: foodData3
            },
            {
                name: 'Nấm',
                foodData: foodData4
            }
        ]
        console.log(data)
        res.json({ success: true, data })
    } catch (error) {
        console.log(error)
    }
}

const create = async (req, res) => {
    try {
        const newIngredientUser = new IngredientUser({ ingredient: req.body.ingredientId, user: req.userId })
        await newIngredientUser.save()
        res.json({ success: true, newIngredientUser })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { read, create }