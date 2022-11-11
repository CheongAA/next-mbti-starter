export type MbtiElementType = 'i' | 'e' | 's' | 'n' | 't' | 'f' | 'j' | 'p';

export type MbtiType =
    | 'infp'
    | 'infj'
    | 'intp'
    | 'intj'
    | 'isfp'
    | 'isfj'
    | 'istp'
    | 'istj'
    | 'enfp'
    | 'enfj'
    | 'entp'
    | 'entj'
    | 'esfp'
    | 'esfj'
    | 'estp'
    | 'estj';

export type MbtiObject = {
    [key in MbtiElementType]: number;
};
