export default function SkillItem({name, percentage}){
    return (
        <div className="flex-[0_0_100%] max-w-[100%] !mb-[25px]">
            <h5 className="text-[16px]/[40px] font-[600] text-textblack900 capitalize">{name}</h5>
            <div className="bg-bgblack50 h-[7px] rounded-[4px] w-full relative">
                <div className="absolute left-0 top-0 h-full rounded-[4px] bg-skin"
                     style={{ width: `${percentage}%` }}></div>
                <div className="absolute right-0 text-textblack900 top-[-40px] font-[400] leading-[40px]">{percentage}%</div>
            </div>
        </div>
    )
}