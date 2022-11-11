import React from 'react';

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="min-h-screen w-full flex justify-center">
            <div className="w-full max-w-md min-h-screen p-10 bg-gradient-to-b from-white to-background">
                {children}
                <p className="text-sm font-bold uppercase text-center py-3">Copyright 2022. kim cheong a</p>
            </div>
        </div>
    );
};

export default Layout;
