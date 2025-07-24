export default function ServiceSection(){
    return (
        <section className="flex flex-wrap min-h-screen relative bg-bgblack900 !pb-[40px]">
            <div className="!pt-[60px] !pb-[70px] w-full">
                <div className="flex flex-wrap relative">
                    <div className="flex-[0_0_100%] max-w-[100%] !px-[30px] !mb-[60px]">
                        <h2 className="text-[40px] text-textblack900 font-[700] relative h2-before">Services</h2>
                    </div>
                </div>
                <div className="flex flex-wrap relative !px-[15px]">
                    {/* services item */}
                    <div className="group !px-[15px] !mb-[30px] flex-[0_0_33.33%] max-w-[33.33%]">
                        <div className="bg-bgblack100 border border-solid border-bgblack50 rounded-[10px] !py-[30px] !px[15px] text-center transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(48,46,77,0.15)]">
                            <div className="group-hover:bg-skin size-[60px] rounded-[50%] !mx-auto !mb-[30px] flex items-center justify-center transition-all duration-300 ease-in-out"> 
                                <i className="group-hover:text-[25px] group-hover:text-white  fa fa-mobile-alt text-[40px]/[60px] text-skin"></i>
                                {/* <i className="fa fa-laptop-code"></i>
                                <i className="fa fa-palette"></i>
                                <i className="fa fa-code"></i>
                                <i className="fa fa-search"></i>
                                <i className="fa fa-bullhorn"></i> */}
                            </div>
                            <h4 className="text-[18px] !mb-[15px] text-textblack900 font-[700] capitalize">Web Design</h4>
                            <p className="text-[16px]/[25px] text-textblack700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, culpa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}