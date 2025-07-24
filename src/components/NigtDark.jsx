export default function NightDark({darkClick, mode}){
    return(
        <div className="fixed right-0 top-0 !p-[15px] w-[200px] border border-solid border-bgblack50 rounded-[5px] bg-bgblack100 z-101 transition-all duration-300 ease-in-out translate-x-full">
            <div className="absolute size-[40px] flex items-center justify-center text-[20px] bg-bgblack100 text-textblack900 right-full border border-solid border-bgblack50 !mr-[25px] cursor-pointer transition-all duration-300 ease-in-out rounded-[50%] top-[55px]">
                <i className={`fas fa-${mode} leading-[40px]`} onClick={darkClick}></i>
            </div>
        </div>
    )
}