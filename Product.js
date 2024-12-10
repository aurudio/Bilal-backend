import mongoose from 'mongoose';

const Product = new mongoose.Schema({
	title: { type: String, required: true },
	desc: { type: String, required: false },
	arе_number: { type: Number, required: true },
	category: { type: String, required: true },
	image: { type: String, required: false },
});

export default mongoose.model('Product', Product);
