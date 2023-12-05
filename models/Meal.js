const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MealSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	ingredients: {
		type: [
			type: Schema.Types.ObjectId,
			ref: 'ingredients'
		],
		default: []

	},
	status: {
		type: Boolean,
		default: false
	},
	image: {
		type: String,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
})

module.exports = mongoose.model('meals', MealSchema)
