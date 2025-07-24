import ContactItem from "../ContactItem"
import FormItem from "../FormItem"


export default function ContactSection(){
    return (
        <section className="flex flex-wrap min-h-screen relative bg-bgblack900 !pb-[40px]">
            <div className="!pt-[60px] !pb-[70px] w-full">
                <div className="flex flex-wrap relative">
                    <div className="flex-[0_0_100%] max-w-[100%] !px-[30px] !mb-[60px]">
                        <h2 className="text-[40px] text-textblack900 font-[700] relative h2-before">Contact Me</h2>
                    </div>
                </div>
                <h3 className="!px-[30px] text-skin text-center text-[25px] !mb-[20px]">Have You Any Question?</h3>
                <h4 className="!px-[30px] text-textblack900 text-center text-[15px] !mb-[60px]">I'M AT YOUR SERVICES</h4>
                <div className="flex flex-wrap relative !px-[15px]">
                    {/* item */}
                    <ContactItem name="Call Us On" data="0338649413" iconClass="fa-phone"/>
                    <ContactItem name="Address" data="Hanoi, Vietnam" iconClass="fa-map-marker-alt"/>
                    <ContactItem name="Email" data="gouenji13062004@gmail.com" iconClass="fa-envelope"/>
                    <ContactItem name="Website" data="https://minhieu204.github.io/my-portfolio/" iconClass="fa-globe-europe"/>
                </div>
                <h3 className="!px-[30px] text-skin text-center text-[25px] !mb-[20px]">SEND ME AN EMAIL</h3>
                <h4 className="!px-[30px] text-textblack900 text-center text-[15px] !mb-[60px]">I'M VERY RESPOSIVE TO MESSAGES</h4>
                {/* contact form */}
                <form action="">
                    <div className="flex flex-wrap relative">
                        <div className="!px-[15px] flex-[0_0_100%] max-w-[100%]">
                            <div className="flex flex-wrap relative">
                                <FormItem type="text" placeholder="Name" percentage="50" />
                                <FormItem type="email" placeholder="Email" percentage="50" />
                            </div>
                            <div className="flex flex-wrap relative">
                                <FormItem type="text" placeholder="Subject" percentage="100" />
                            </div>
                            <div className="flex flex-wrap relative">
                                <div className="!px-[15px] flex-[0_0_100%] max-w-[100%] !mb-[30px]">
                                    <div className="group">
                                        <textarea name="" id="" className="w-full border border-solid border-bgblack50 rounded-[25px] bg-bgblack100 !py-[10px] !px-[25px] text-[16px] text-textblack700 transition-all duration-300 ease-in-out focus:shadow-[0_0_20px_rgba(48,46,77,0.15)] h-[140px]" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap relative">
                                <div className="!px-[15px] flex-[0_0_100%] max-w-[100%]">
                                    <button type="submit" className="text-[16px] text-white font-[500] !py-[12px] !px-[50px] bg-skin rounded-[40px] inline-block whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-[1.05] h-[50px]">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}