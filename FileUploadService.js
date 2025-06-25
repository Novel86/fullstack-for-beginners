import * as uuid from 'uuid';
import * as path from 'path';

class FileUploadService {
	uploadPostPicture(files) {
		try {
			console.log(files);
			const ext = files.picture.name.split('.').at(-1);
			const pictureName = uuid.v4() + '.' + ext;
			const picturePath = path.resolve('static', 'images', pictureName);

			files.picture.mv(picturePath);

			return pictureName;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

export default new FileUploadService();
