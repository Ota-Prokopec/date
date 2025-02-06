import { v2 as cloudinary, ConfigOptions, UploadApiResponse, type UploadStream } from 'cloudinary';
import { Readable } from 'stream';

export class Cloudinary {
  constructor(
    public options: ConfigOptions,
    public folder: string
  ) {
    this.options = options;
    this.folder = folder;
  }

  uploadFile = async (file: File) => {
    const buffer = await file.arrayBuffer();
    const uploadResult = await new Promise<UploadApiResponse | undefined>((resolve) => {
      cloudinary.uploader
        .upload_stream((error, uploadResult) => {
          return resolve(uploadResult);
        })
        .end(buffer);
    });

    if (!uploadResult) throw new Error('Failed to upload file to Cloudinary');
    return uploadResult;
  };
  async deleteFiles(...files: string[]) {
    cloudinary.config(this.options);
    return await cloudinary.api.delete_resources(files.map((file) => `${this.folder}/${file}`));
  }

  getFileNameFromUrl(url: URL | string) {
    const splits = url.toString().split('/');
    const fileSplit = splits[splits.length - 1];
    if (!fileSplit) throw new Error('Invalid URL - not able to be splitted');
    const file = fileSplit.split('.').at(0);
    if (!file) throw new Error('Invalid URL - not able to find the file name');
    return file;
  }
}
