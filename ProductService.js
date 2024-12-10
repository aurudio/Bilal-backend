import fileService from './fileService.js';
import Product from './Product.js';

class ProductService {
	async create(product, image) {
		const fileName = fileService.saveFile(image);
		const createdProduct = await Product.create({
			...product,
			image: fileName,
		});
		console.log({ ...product });
		return createdProduct;
	}

	async getAll() {
		const products = await Product.find();
		return products;
	}
	async getOne(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const product = await Product.findById(id);
		return product;
	}

	async update(product) {
		if (!product._id) {
			throw new Error('не указан ID');
		}
		const updatedProduct = await Product.findByIdAndUpdate(
			product._id,
			product,
			{
				new: true,
			}
		);
		return updatedProduct;
	}

	async delete(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const product = await Product.findByIdAndDelete(id);
		return product;
	}
}

export default new ProductService();
