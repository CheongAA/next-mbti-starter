import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SelectBox from '../components/SelectBox';
import data from '../data/data.json';
import { MbtiType } from '../types';



const Test = () => {
    const navigate = useRouter();

    const [mbti, setMbti] = useState<MbtiType[]>([]);
    const step = mbti.length;

    useEffect(() => {
        if (mbti.length === data.questions.length) {
            navigate.replace(`/result/${mbti}`);
        }
    }, [navigate, mbti]);

    const selectAnswer = (type: MbtiType) => {
        setMbti((prev: MbtiType[]) => [...prev, type]);
    };

    return (
        <div className="w-full h-full flex flex-col items-center text-center gap-20">
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
                        onSelect={() => selectAnswer(answer.type as MbtiType)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Test;
