import { v2 as cloudinary, ConfigOptions, UploadApiResponse, type UploadStream } from 'cloudinary'

export class Cloudinary {
  constructor(
    public options: ConfigOptions,
    public folder: string
  ) {
    this.options = options
    this.folder = folder
    cloudinary.config(this.options)
  }

  uploadFile = async (file: File) => {
    const buffer = await file.arrayBuffer()
    const uploadResult = await new Promise<UploadApiResponse | undefined>((resolve) => {
      cloudinary.uploader
        .upload_stream((error, uploadResult) => {
          return resolve(uploadResult)
        })
        .end(buffer)
    })

    if (!uploadResult) throw new Error('Failed to upload file to Cloudinary')
    return uploadResult
  }
  async deleteFiles(...fileNames: string[]): Promise<'deleted'> {
    await cloudinary.api.delete_resources(fileNames.map((fileName) => `${this.folder}/${fileName}`))
    return 'deleted'
  }

  getFileNameFromUrl(url: URL | string) {
    const splits = url.toString().split('/')
    const fileSplit = splits[splits.length - 1]
    if (!fileSplit) throw new Error('Invalid URL - not able to be splitted')
    const file = fileSplit.split('.').at(0)
    if (!file) throw new Error('Invalid URL - not able to find the file name')
    return file
  }

  getBucketsBaseUrl() {
    return `http://res.cloudinary.com/${this.options.cloud_name}/${this.folder}`
  }
}
