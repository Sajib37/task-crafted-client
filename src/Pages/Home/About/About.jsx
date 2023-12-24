import developer from "../../../assets/icons/internet.png"
import student from "../../../assets/icons/education.png"
import corporate from "../../../assets/icons/global-economy.png"
import enthuasist from "../../../assets/icons/active.png"

const About = () => {
    return (
        <section className="max-w-screen-xl mx-auto min-h-screen py-12 flex flex-col items-center justify-center gap-10">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">Explore Our Diverse Community</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    
                    <div className="max-w-sm mx-auto">
                        <img className="w-24 mx-auto" src={developer} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] text-center mb-2">Developers and Coders</h1>
                            <p className="text-center">A hub for coding enthusiasts, developers, and programmers seeking the latest trends, coding challenges, and collaborative projects.</p>
                        </div>
                    </div>
                    
                    <div className="max-w-md">
                        <img className="w-24 mx-auto" src={student} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] text-center mb-2">Students and Academia</h1>
                            <p className="text-center">A valuable resource hub for students and academics, providing educational materials, study resources, and a space for intellectual discussions across various disciplines.</p>
                        </div>
                    </div>
                    
                    <div className="max-w-md">
                        <img className="w-24 mx-auto" src={enthuasist} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] text-center mb-2">Health and Wellness Enthusiasts</h1>
                            <p className="text-center">Catering to those interested in maintaining a healthy lifestyle, our platform offers wellness tips, fitness routines, and a supportive community for sharing personal journeys.</p>
                        </div>
                    </div>
                    
                    <div className="max-w-md">
                        <img className="w-24 mx-auto" src={corporate} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] text-center mb-2"> Corporate Professionals</h1>
                            <p className="text-center">Tailored content and resources for business analysts, project managers, and executives navigating the corporate world. </p>
                        </div>
                    </div>

                </section>
        </section>
    );
};

export default About;