export default function InfoItem({title, data, isLink = false}){
    return (
        <div className="flex-[0_0_50%] max-w-[50%]">
            <p className="font-[600] text-[16px] text-textblack900 border-b border-bgblack50 border-solid !py-[10px]">
                {title} 
                {isLink ? (
                    <a 
                    href={data} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-[400] text-skin !ml-[4px] inline-block hover:underline"
                    >
                    {data}
                    </a>
                ) : (
                    <span className="font-[400] text-textblack700 !ml-[4px] inline-block">{data}</span>
                )}
            </p>
        </div>
    )
}