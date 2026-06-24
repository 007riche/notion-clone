import TitleSection from "@/components/landing-page/title-section";

function HomePage() {
    // const classes = " overflow-hidden
    // px-4 
    // sm:px-6 
    // mt-10 
    // sm:flex 
    // sm:flex-col 
    // gap-4 
    // md:justify-center 
    // md:items-center";

    return (
        <section>
            <div className=" overflow-hidden
    px-4 
    sm:px-6 
    mt-10 
    sm:flex 
    sm:flex-col 
    gap-4 
    md:justify-center 
    md:items-center">
                <TitleSection pill="✨ Your Workspace, Perfected"
                    title="All-In-One Collaboration and Productivity platform" />
            </div>
        </section>
    );
}

export default HomePage;