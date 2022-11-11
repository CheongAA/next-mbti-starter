import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/UI/Button';
import data from '../../data/data.json';
import { MbtiType } from '../../types';

const Result = () => {
    const { query: { mbti } } = useRouter();
    const { title, subtitle, description } = data.results[mbti as MbtiType];

    return (
        <main className="w-full h-full flex flex-col items-center justify-center text-center gap-10">
            <Head>
                <title>{title} | {mbti}</title>
            </Head>
            <div className="space-y-10">
                <h1 className="text-4xl font-bold">{title}</h1>
                <h2 className="text-2xl font-semibold">{subtitle}</h2>
                <div className="w-full h-60 bg-gray-300"></div>
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
