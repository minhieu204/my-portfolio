export default function FormItem({type, placeholder, percentage}){
    return (
        <div className="!px-[15px] !mb-[30px]"
            style={{ flex: `0 0 ${percentage}%`,  maxWidth: `${percentage}%`, }}>
            <div className="group">
            <input type={type} className="w-full h-[50px] border border-solid border-bgblack50 rounded-[25px] bg-bgblack100 !py-[10px] !px-[25px] text-[16px] text-textblack700 transition-all duration-300 ease-in-out focus:shadow-[0_0_20px_rgba(48,46,77,0.15)] " 
            placeholder={placeholder}></input>
            </div>
        </div>
    )
}