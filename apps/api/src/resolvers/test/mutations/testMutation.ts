import { builder } from '@/builder'
import { buckets } from '@/lib/pictureBuckets'

builder.mutationField('test', (t) =>
  t.field({
    type: 'String',
    resolve: (parent, args) => {
      const profilePicturesBucket = buckets.profilePictures.options

      console.log({ profilePicturesBucket })

      return 'fad'
    },
  })
)
