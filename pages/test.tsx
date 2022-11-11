import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SelectBox from '../components/SelectBox';
import Spinner from '../components/UI/Spinner';
import data from '../data/data.json';
import { MbtiObject, MbtiElementType } from '../types';

const convertMbtiArrayToObject = (mbtiArray: MbtiElementType[]) =>
    mbtiArray.reduce(
        (prev, cur) => {
            const prevArr = prev;
            prevArr[cur] = (prevArr[cur] || 0) + 1;
            return prevArr;
        },
        { e: 0, i: 0, s: 0, n: 0, t: 0, f: 0, p: 0, j: 0 }
    );

const convertMbtiObjectToString = (mbtiObject: MbtiObject) =>
    `${mbtiObject.e < mbtiObject.i ? 'i' : 'e'}${mbtiObject.s < mbtiObject.n ? 'n' : 's'
    }${mbtiObject.f < mbtiObject.t ? 't' : 'f'}${mbtiObject.p < mbtiObject.j ? 'j' : 'p'
    }`;

const Test = () => {
    const navigate = useRouter();
    const [mbti, setMbti] = useState<MbtiElementType[]>([]);
    const step = mbti.length;

    useEffect(() => {
        if (mbti.length === data.questions.length) {
            const mbtiObject = convertMbtiArrayToObject(mbti);
            const mbtiString = convertMbtiObjectToString(mbtiObject);
            navigate.replace(`/result/${mbtiString}`);
        }
    }, [navigate, mbti]);

    const selectAnswer = (type: MbtiElementType) => {
        setMbti((prev: MbtiElementType[]) => [...prev, type]);
    };

    return (
        <main className="w-full h-full flex flex-col items-center text-center gap-20">
            <Head>
                <title>테스트 중 . . . </title>
            </Head>
            {
                mbti.length === data.questions.length ?
                    <div className="my-auto">
                        <Spinner />
                    </div>
                    :
                    <>
                        <div className="w-full flex flex-row justify-between items-center">
                            <h2 className="text-6xl font-bold text-primary">Q{step + 1}.</h2>
                            <h3 className="text-4xl font-semibold">
                                {step + 1} / {data.questions.length}
                            </h3>
                        </div>
                        <h1 className="text-3xl">{data.questions[step]?.question}</h1>
                        <div className="w-full space-y-3">
                            {data.questions[step]?.answers.map((answer) => (
                                <SelectBox
                                    key={answer.type}
                                    title={answer.text}
                                    onSelect={() => selectAnswer(answer.type as MbtiElementType)}
                                />
                            ))}
                        </div>
                    </>
            }
        </main>
    );
};

export default Test;
