import React from 'react';

interface SectionHeaderProps {
    title: string;
    eyebrow: string;
    description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, eyebrow, description }) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-slate-300 to-sky-400 text-transparent bg-clip-text text-center">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
                {title}
            </h2>
            <p className="text-center md:text-lg lg:text-xl mt-4 max-w-md mx-auto text-white/60">
                {description}
            </p>
        </>
    );
}

export default SectionHeader;