import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Button from '../components/UI/Button';
import Data from '../data/data.json';

const Home = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-between text-center">
      <Head>
      </Head>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{Data.title}</h1>
        <p className="text-xl font-semibold">
          {Data.subtitle}
        </p>
      </div>
      {/* <Animation /> */}
      <div className="flex flex-col gap-3">
        <Link href="/test">
          <Button
            title="테스트 시작"
            backgroundColor="bg-primary"
            textColor="text-white"
          />
        </Link>

        <Button
          title="친구한테 공유하기"
          backgroundColor="bg-secondary"
          textColor="text-white"
        />
      </div>
    </main>
  )
}
export default Home;