import me from '../../assets/images/me.jpg';

export default function HomeSection({handleClick}){
    return (
        <section className="bg-bgblack900 min-h-screen flex !px-[30px] opacity-[1] text-textblack900">
            <div className="max-w-[1200px] w-full !m-auto">
              <div className="flex flex-wrap !mx-[-15px] relative">
                <div className="flex-[0_0_60%] max-w-[60%] !px-[15px]">
                  <h3 className="text-[30px] !my-[15px]">Hello, my name is <span className="font-clicker text-[30px] font-[700] text-skin">Nguyen Minh Hieu</span></h3>
                  <h3 className="text-[30px] !my-[15px]">I'm a <span className="text-skin">Web Developer</span></h3>
                  <p className="!mb-[70px] text-[20px] text-textblack700">I aspire to create websites that not only operate efficiently but also deliver significant practical value, featuring optimal design and exceptional user experiences. I continuously strive to learn and apply new technologies to improve my knowledge and build high-quality products that meet client needs.</p>
                  <a href="" onClick={handleClick} className="text-[16px] text-white font-[500] !py-[12px] !px-[35px] bg-skin rounded-[40px] inline-block whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-[1.05]">More About Me</a>
                </div>
                <div className="flex-[0_0_40%] max-w-[40%] flex justify-center relative !px-[15px] img-after">
                  <img src={me} alt="" className="h-[400px] !m-auto rounded-[5px]"/>
                </div>
              </div>
            </div>
        </section>
    )
}