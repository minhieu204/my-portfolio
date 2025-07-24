import Timeline from "./TimeLine";

export default function AboutItem({title, timelines = []}){
    return (
        <div className="flex-[0_0_50%] max-w-[50%] !mt-[30px] !px-[15px]">
            <h3 className="text-[24px] !mt-[30px] font-[700] text-textblack900">{title}</h3>
            <div className="flex flex-wrap relative">
            <div className="flex-[0_0_100%] max-w-[100%]">
                <div className="bg-bgblack100 !py-[30px] !px-[15px] border border-solid border-bgblack50 rounded-[10px] w-full relative shadow-[0_0_20px_rgba(48,46,77,0.15)]">
                    {timelines.length > 0 ? (
                        timelines.map((timeline, index) => (
                            <Timeline
                            key={index}
                            time={timeline.time}
                            name={timeline.name}
                            description={timeline.description}
                            />
                        ))
                        ) : (
                        <p className=" text-textblack700">No work experience yet</p>
                        )}
                </div>
            </div>
            </div>
        </div>
    )
}