const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MealUserSchema = new Schema({
	meal: {
		type: Schema.Types.ObjectId,
		ref: 'meals'
	},
	favorite: {
		type: Boolean,
		default: false
	}
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('mealUsers', MealUserSchema)
