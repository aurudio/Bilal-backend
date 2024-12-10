import mongoose from 'mongoose';

const Product = new mongoose.Schema({
	title: { type: String },
	desc: { type: String },
	art_number: { type: String },
	category: { type: String },
	image: { type: String },
});

export default mongoose.model('Product', Product);
