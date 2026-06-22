import React from "react";

interface TitleSectionProps {
    title: string;
    subheading?: string;
    pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subheading, pill }) => {
    <>
        <section className="flex 
flex-col
gap-4
justify-center
items-start
md:items-center
">
            <article className="rounded-full
text-sm
dark\:bg-gradient-to-r
dark\:from-brand-primaryBlue
dark\:to-brand-primaryPurple
da">
                <div className="rounded-full
px-3
py-1
dark:bg-black">
                    {pill}
                </div>
            </article>
        </section>
    </>
}

export default TitleSection;