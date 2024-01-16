This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# TODO:

1. GET getNearestPlaces(lat, long, category?) (called when map loads & when we search/click filter button. )
2. GET getUserInfo(userId) (gotta fix the userId trash... This will display on profile page)
3. POST savePlace(placeId, userId) (when a user saved a place to their profile)
4. Delete google api calls
5. Remove all calls that have to do with trips
6. Make profile and saved pages not look like TRASH
7. Fix the picture from blowing up on-load on the landing page
