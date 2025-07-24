import AboutItem from "../AboutItem";
import InfoItem from "../InfoItem";
import SkillItem from "../SkillItem";

export default function AboutSection({hireMe}){
    return (
        <section className="flex flex-wrap min-h-screen relative bg-bgblack900">
            <div className="!pt-[60px] !pb-[70px]">
                <div className="flex flex-wrap relative">
                    <div className="flex-[0_0_100%] max-w-full !px-[30px] !mb-[60px]">
                        <h2 className="text-[40px] text-textblack900 font-[700] relative h2-before">About me</h2>
                    </div>
                </div>
                <div className="">
                    <div className="flex-[0_0_100%] max-w-full !px-[15px]">
                        <div className="flex flex-wrap relative">
                            <div className="flex-[0_0_100%] max-w-full !px-[15px]">
                                <h3 className="text-[24px] text-textblack900 !mb-[15px] font-[700]">I'm Nguyen Minh Hieu and <span className="text-skin">Web Developer</span></h3>
                                <p className="text-[16px]/[25px] text-textblack700">I'm a final-year Information Systems student with a solid foundation in web development. I’ve worked with technologies such as HTML, CSS, JavaScript, React, TailwindCSS, Java, PHP, and Node.js. I'm currently seeking a web development internship to apply my skills in real-world projects, gain hands-on experience, and grow as a professional developer.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap relative">
                            <div className="flex-[0_0_60%] max-w-[60%] !px-[15px] !mt-[40px]">
                                <div className="flex flex-wrap relative">
                                    {/* infoItem */}
                                    <InfoItem title="Birth day:" data="13 Jun 2004"/>
                                    <InfoItem title="Age:" data="21"/>
                                    <InfoItem title="Sex:" data="Male"/>
                                    <InfoItem title="Address:" data="Ha Noi City, Vietnam"/>
                                    <InfoItem title="Email:" data="gouenji13062004@gmail.com"/>
                                    <InfoItem title="Phone:" data="0338649413"/>
                                    <InfoItem title="Website:" data="domain.com" isLink/>
                                    <InfoItem title="Git:" data="https://github.com/minhieu204" isLink/>
                                </div>
                                <div className="flex flex-wrap relative">
                                    <div className="!mt-[30px]">
                                        <a href="CV.pdf" download className="text-[16px] text-white font-[500] !py-[12px] !px-[35px] bg-skin rounded-[40px] inline-block whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-[1.05] !mr-[15px] !mt-[10px]">Download CV</a>
                                        <a href="#" onClick={hireMe} className="text-[16px] text-white font-[500] !py-[12px] !px-[35px] bg-skin rounded-[40px] inline-block whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-[1.05] !mr-[15px] !mt-[10px]">Hire me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-[0_0_40%] max-w-[40%] !px-[15px] !mt-[40px]">
                                <div className="flex flex-wrap relative">
                                    <SkillItem name="JS" percentage="66"/>
                                    <SkillItem name="PHP" percentage="76"/>
                                    <SkillItem name="REACT" percentage="66"/>
                                    <SkillItem name="NODEJS" percentage="56"/>
                                    <SkillItem name="TAILWIND" percentage="66"/>
                                    <SkillItem name="JAVA" percentage="66"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap relative">
                            <AboutItem
                                title="Education"
                                timelines={[
                                { time: "2022 - Present", name: "University Of Transport Technology", description: "Fourth-year" },
                                ]}
                            />
                            <AboutItem title="Experience" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}