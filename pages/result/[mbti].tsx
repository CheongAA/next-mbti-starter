import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

import Button from "../../components/UI/Button";
import data from "../../data/data.json";
import { MbtiType } from "../../types";

const initialResultState = {
  title: "",
  subtitle: "",
  description: "",
  image: "",
};

const Result = () => {
  const {
    query: { mbti },
  } = useRouter();
  const [{ title, subtitle, description, image }, setResult] =
    useState(initialResultState);

  useEffect(() => {
    if (isMbtiType(mbti)) {
      setResult(data.results[mbti as MbtiType]);
    }
  }, [mbti]);

  const isMbtiType = (mbti: string[] | string | undefined) => {
    return (
      mbti &&
      typeof mbti !== "object" &&
      data.results[mbti as MbtiType] !== undefined
    );
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-center text-center gap-10">
      <Head>
        <title>
          {title} | {mbti}
        </title>
      </Head>
      <div className="space-y-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-2xl font-semibold">{subtitle}</h2>
        <div className="relative w-full h-60">
          <Image src={image} layout="fill" objectFit="fill" alt={title} />
        </div>
        <p className="text-lg pb-10">{description}</p>
        <Link href="/">
          <Button
            title="테스트 다시하기"
            backgroundColor="bg-secondary"
            textColor="text-white"
          />
        </Link>
      </div>
    </main>
  );
};

export default Result;
