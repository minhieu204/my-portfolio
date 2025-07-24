import ProjectItem from "../ProjectItem";
import p1 from '../../assets/images/projects/p1.png'
import p2 from '../../assets/images/projects/p2.png'
import p3 from '../../assets/images/projects/p3.png'
import p4 from '../../assets/images/projects/p4.png'
import p5 from '../../assets/images/projects/p5.png'

export default function ProjectSection(){
    return(
        <section className="flex flex-wrap min-h-screen relative bg-bgblack900 !pb-[40px]">
            <div className="!pt-[60px] !pb-[70px] w-full">
                <div className="flex flex-wrap relative">
                    <div className="flex-[0_0_100%] max-w-[100%] !px-[30px] !mb-[60px]">
                        <h2 className="text-[40px] text-textblack900 font-[700] relative h2-before">Projects</h2>
                    </div>
                </div>
                <div className="flex flex-wrap relative !px-[30px]">
                    <div className="flex-[0_0_100%] max-w-[100%] !mb-[40px]">
                        <h2 className="text-textblack900 font-[500]">My Last Projects:</h2>
                    </div>
                </div>
                <div className="flex flex-wrap relative !px-[15px]">
                    {/* item */}
                    <ProjectItem img={p1} link="https://minhieu204.github.io/my-portfolio/"/>
                    <ProjectItem img={p2} link="https://minhieu204.github.io/timingGame/"/>
                    <ProjectItem img={p3} link="https://github.com/minhieu204/projectKTPM"/>
                    <ProjectItem img={p4} link="https://github.com/oulyn1/webroutine"/>
                    <ProjectItem img={p5} link="https://github.com/minhieu204/ProjectCShape"/>
                </div>
            </div> 
        </section>
    )
}