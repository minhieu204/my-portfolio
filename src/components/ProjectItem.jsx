export default function ProjectItem({number, link}){
    return (
        <div className="!px-[15px] flex-[0_0_33.33%] max-w-[33.33%] !mb-[30px]">
            <div className="shadow-[0_0_20px_rgba(48,46,77,0.15)] border-[6px] border-solid border-bgblack100 rounded-[10px] overflow-hidden cursor-pointer">
                <img onClick={() => { window.open(link, "_blank", "noopener,noreferrer") }} src={`../images/projects/p${number}.png`} alt="" className="w-full block"/>
            </div>
        </div>
    )
}