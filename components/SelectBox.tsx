import React from 'react'

const SelectBox = ({ title, onSelect }: { title: string, onSelect: () => void }) => {
    return (
        <button
            onClick={onSelect}
            className="w-full bg-white border-2 border-black p-5 rounded-lg text-xl"
        >
            {title}
        </button>
    );
};

export default SelectBox