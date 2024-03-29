import Head from "next/head";
import Link from "next/link";
import Animation from "../components/UI/Animation";
import Button from "../components/UI/Button";
import Data from "../data/data.json";

const Home = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-between text-center">
      <Head>
        <title>{Data.title}</title>
      </Head>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{Data.title}</h1>
        <p className="text-xl font-semibold">{Data.subtitle}</p>
      </div>
      <div className="flex">
        <Animation />
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/test">
          <a>
            <Button
              title="테스트 시작"
              backgroundColor="bg-primary"
              textColor="text-white"
            />
          </a>
        </Link>

        <Button
          title="친구한테 공유하기"
          backgroundColor="bg-secondary"
          textColor="text-white"
        />
      </div>
    </main>
  );
};
export default Home;
