import { db, drizzleSchema } from '@repo/db'
import { Gender } from '@repo/ts-types'

const users = [
  {
    id: 'a1',
    name: 'Johanka',
    email: 'johanka@gmail.com',
    birthDate: '2015-12-12',
    bio: "Johanka is a fun-loving and adventurous soul who enjoys making the most out of life. Whether it's spending time with friends, trying new activities, or simply enjoying a quiet evening with a good book, she embraces every moment with enthusiasm. She has a witty sense of humor and a playful personality, always ready to make those around her smile. Johanka is looking for someone who shares her zest for life and isn’t afraid to be themselves.",
    gender: 'female',
    lookingForGender: 'male',
    image:
      'https://res.cloudinary.com/dzvtoifsm/image/upload/v1743522101/date-app/profile-pictures/w53xx9ipnf8ihlhsrc1z.jpg',
    socials: {
      instagram: { link: 'link to account', platformProfileId: '@verca' },
      facebook: { link: 'link to account', platformProfileId: '@verca' },
    },
  },
  {
    id: 'a2',
    name: 'Martin',
    email: 'martin@example.com',
    birthDate: '1990-05-20',
    bio: 'Martin is a software engineer with a deep appreciation for nature and the great outdoors. When he’s not immersed in code, you’ll likely find him exploring scenic hiking trails, traveling to new destinations, or enjoying a weekend getaway in the mountains. He values meaningful conversations, creativity, and a good sense of humor. Martin is looking for someone who shares his love for adventure and intellectual curiosity.',
    gender: 'male',
    lookingForGender: 'female',
    image:
      'https://res.cloudinary.com/dzvtoifsm/image/upload/v1743522101/date-app/profile-pictures/tgdsky3frpjduqclnnva.jpg',
    socials: {
      instagram: { link: 'link to account', platformProfileId: '@verca' },
      facebook: { link: 'link to account', platformProfileId: '@verca' },
    },
  },
  {
    id: 'a3',
    name: 'Anna',
    email: 'anna@example.com',
    birthDate: '1985-08-15',
    bio: 'Anna is a passionate writer who finds beauty in the little details of everyday life. A dedicated coffee enthusiast, she enjoys spending hours at cozy cafés, getting lost in a good book, or working on her next novel. She believes that storytelling has the power to connect people and inspire change. She’s looking for someone who appreciates deep conversations, creativity, and a shared love for the written word.',
    gender: 'female',
    lookingForGender: 'male',
    image:
      'https://res.cloudinary.com/dzvtoifsm/image/upload/v1743522101/date-app/profile-pictures/ppl7rp3ccms7zijwlixw.jpg',
    socials: {
      instagram: { link: 'link to account', platformProfileId: '@verca' },
      facebook: { link: 'link to account', platformProfileId: '@verca' },
    },
  },
  {
    id: 'a4',
    name: 'Peter',
    email: 'peter@example.com',
    birthDate: '2000-01-01',
    bio: 'Peter is a curious and ambitious student fascinated by artificial intelligence and its potential to shape the future. He enjoys learning about new technologies, engaging in thought-provoking discussions, and working on projects that challenge his mind. In his free time, he likes gaming, reading sci-fi books, and exploring new ideas. Peter is looking for someone who shares his curiosity and isn’t afraid to dream big.',
    gender: 'male',
    lookingForGender: 'female',
    image:
      'https://res.cloudinary.com/dzvtoifsm/image/upload/v1743522101/date-app/profile-pictures/roab3p2bnjdt4t33txso.jpg',
    socials: {
      instagram: { link: 'link to account', platformProfileId: '@verca' },
    },
  },
  {
    id: 'a5',
    name: 'Sophia',
    email: 'sophia@example.com',
    birthDate: '1995-03-10',
    bio: "Sophia is a creative and talented graphic designer with a deep passion for art and aesthetics. She enjoys exploring new design trends, visiting art galleries, and expressing herself through her work. When she's not designing, she loves traveling, trying new foods, and capturing the beauty of the world through photography. Sophia is looking for someone who shares her appreciation for creativity and adventure.",
    gender: 'female',
    lookingForGender: 'male',
    image:
      'https://res.cloudinary.com/dzvtoifsm/image/upload/v1743522101/date-app/profile-pictures/fwc16symoj5b0qku7csy.jpg',
    socials: {
      instagram: { link: 'link to account', platformProfileId: '@verca' },
      facebook: { link: 'link to account', platformProfileId: '@verca' },
    },
  },
  {
    id: 'a6',
    name: 'Lukas',
    email: 'lukas@example.com',
    birthDate: '1992-07-25',
    bio: 'Lukas is an entrepreneur with a deep passion for technology and innovation. He thrives on bringing ideas to life, solving complex problems, and building projects that make an impact. When he’s not working on his next venture, he enjoys networking with like-minded individuals, learning about new industries, and staying ahead of the latest tech trends. Lukas is looking for someone who is ambitious, driven, and enjoys deep conversations about the future.',
    gender: 'male',
    lookingForGender: 'female',
    image:
      'https://res.cloudinary.com/dzvtoifsm/image/upload/v1743522101/date-app/profile-pictures/t08gwuqe27s7luf8pprs.jpg',
    socials: {
      instagram: { link: 'link to account', platformProfileId: '@verca' },
    },
  },
]

const upload = () => {
  users.map((user) => {
    const socials = user.socials

    db.insert(drizzleSchema.socials)
      .values({
        link: socials.instagram.link,
        platformProfileId: socials.instagram.platformProfileId,
        type: 'instagram',
        userId: user.id,
      })
      .then(() => console.log('success'))
    if (socials.facebook)
      db.insert(drizzleSchema.socials)
        .values({
          link: socials.facebook.link,
          platformProfileId: socials.facebook.platformProfileId,
          type: 'facebook',
          userId: user.id,
        })
        .then(() => console.log('success'))
  })
}
upload()
