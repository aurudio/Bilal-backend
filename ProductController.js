import ProductService from './ProductService.js';

class ProductController {
	async create(req, res) {
		try {
			const product = await ProductService.create(req.body, req.files.image);
			res.json(product);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getAll(req, res) {
		try {
			const products = await ProductService.getAll();
			return res.json(products);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const product = await ProductService.getOne(req.params.id);
			return res.json(product);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async update(req, res) {
		try {
			const updatedProduct = await ProductService.update(req.body);
			return res.json(updatedProduct);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

	async delete(req, res) {
		try {
			const product = await ProductService.delete(req.params.id);
			return res.json(product);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new ProductController();
