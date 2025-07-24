import ProjectItem from "../ProjectItem";

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
                        <h2 className="text-textblack900 font-[500]">My last projects:</h2>
                    </div>
                </div>
                <div className="flex flex-wrap relative !px-[15px]">
                    {/* item */}
                    <ProjectItem number={1} link="https://minhieu204.github.io/timingGame/"/>
                    <ProjectItem number={2} link="https://minhieu204.github.io/timingGame/"/>
                    <ProjectItem number={3} link="https://github.com/minhieu204/projectKTPM"/>
                    <ProjectItem number={4} link="https://github.com/oulyn1/webroutine"/>
                    <ProjectItem number={5} link="https://github.com/minhieu204/ProjectCShape"/>
                </div>
            </div> 
        </section>
    )
}