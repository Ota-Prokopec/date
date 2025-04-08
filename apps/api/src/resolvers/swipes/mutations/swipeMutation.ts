import { builder } from '@/builder'
import { likeUser } from '@/lib/likes/likeUser'

builder.mutationField('swipe', (t) =>
  t.withAuth({ authenticated: true }).field({
    type: 'Swipe',
    args: {
      likedUserId: t.arg.string(),
      state: t.arg({ type: 'SwipeType', required: false, defaultValue: 'like' }),
    },
    resolve: async (_parent, args, ctx) => {
      const myUserId = ctx.session.user.id

      return await likeUser({ userId: myUserId, likedUserId: args.likedUserId })
    },
  })
)
