import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
	async create(req, res) {
		try {
			// console.log(req.files);
			const files = req.files;
			const post = await PostService.create(req.body, files);

			res.status(201).json(post);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async getAll(req, res) {
		try {
			const posts = await PostService.getAll();

			return res.json(posts);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async getOne(req, res) {
		try {
			const { id } = req.params;

			const post = await PostService.getOne(id);

			return res.json(post);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async update(req, res) {
		try {
			const post = req.body;

			const updatedPost = await PostService.update(post);

			return res.json(updatedPost);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async deleteOne(req, res) {
		try {
			const { id } = req.params;

			const deletedPost = await PostService.deleteOne(id);

			return res.json(deletedPost);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

export default new PostController();
