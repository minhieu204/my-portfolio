export default function NavItem({text, iconClass, handleOnClink}){
    return (
        <li className="!mb-[20px] block">
            <a onClick={handleOnClink} href="" className="text-[16px] font-[600] block text-textblack900 py-[5px] px-[15px] border-b border-solid border-bgblack50 active:text-skin">
                <i className={`${iconClass} !mr-[15px]`}></i>
                 {text}
            </a>
        </li> 
    )
}