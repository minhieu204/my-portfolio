export default function ContactItem({name, data, iconClass}){
    return (
        <div className="!px-[15px] flex-[0_0_25%] max-w-[25%] text-center !mb-[60px]">
            <div className="inline-block"><i className={`fa ${iconClass} text-[25px] text-skin`}></i></div>
            <h4 className="text-[18px] font-[700] text-textblack900 capitalize !mt-[15px] !mb-[5px]">{name}</h4>
            <p className="text-[16px]/[25px] font-[400] text-textblack700">{data}</p>
        </div>
    )
}