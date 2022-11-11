

## MBTI STARTER !

First, install modules and run the server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the subject by modifying `data/data.json` and `components/ui/Animation.tsx` lottie data.
The page auto-updates as you edit the file.

```bash
type DataType = {
    theme: {
        colors: {
            primary: string,
            secondary: string,
            background: string
        }
    },
    title: string,
    subtitle: string,
    questions: {
        id:number,
        question: string,
        answers: {
            type: MbtiElementType,
            text: string
        }[]
    }[],
    results: {
        [key in MbtiType]: {
            title: string,
            subtitle: string,
            description: string,
            image: string
        }
    }

}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
