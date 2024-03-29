import React from 'react'

const Spinner = () => {
    return (
        <div
            className="animate-spin inline-block w-10 h-10 border-[5px] border-current border-t-transparent text-primary rounded-full"
            role="status"
            aria-label="loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner