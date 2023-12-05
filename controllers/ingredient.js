const express = require('express')

const Ingredient = require('../models/Ingredient')

const getAllIngredient = async (req, res) => {
    try {
        const ingredients = await Ingredient.find()
        res.json({ success: true, ingredients })
    } catch (error) {
        console.log(error)
    }
}

const createIngredient = async (req, res) => {
    const { title, description, image } = req.body

    try {
        const newIngredient = new Ingredient({title, description, image})
        await newIngredient.save()
        res.json({ success: true, newIngredient })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllIngredient, createIngredient }