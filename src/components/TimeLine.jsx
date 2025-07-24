export default function Timeline({time, name, description}){
    return (
        <div className="relative !pl-[37px] !pb-[50px] tlitem-before [&:last-child]:!pb-0">
            <div className="absolute left-0 top-0 size-[15px] rounded-[50%] bg-skin"></div>
            <h3 className="font-[400] text-[14px] !mb-[12px] text-textblack700">
            <i className="fa fa-calendar !mr-[5px]"></i> {time}
            </h3>
            <h4 className="font-[700] text-[18px] !mb-[15px] capitalize text-textblack900">{name}</h4>
            <p className="text-[16px]/[25px] text-justify text-textblack700">{description}</p>
        </div>
    )
}