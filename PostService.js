import FileUploadService from './FileUploadService.js';
import Post from './Post.js';

class PostService {
	async create(postData, files) {
		const path = FileUploadService.uploadPostPicture(files);
		const post = await Post.create({ ...postData, picture: path });

		return post;
	}

	async getAll() {
		const posts = await Post.find();

		return posts;
	}

	async getOne(id) {
		if (!id) throw new Error('id can not be empty');

		const post = await Post.findById(id);

		return post;
	}

	async update(postData) {
		if (!postData.id) throw new Error('post id uncorrect');

		const updatedPost = await Post.findByIdAndUpdate(postData.id, postData, { new: true });

		return updatedPost;
	}

	async deleteOne(id) {
		if (!id) throw new Error('post id uncorrect');

		const deletedPost = await Post.findByIdAndDelete(id);

		return deletedPost;
	}
}

export default new PostService();
