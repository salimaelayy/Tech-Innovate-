import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa6";
import Button from "../button/page";

const HeroSection = ({children}:any )=> {
    return (
        <section className="bg-grey-900 bg-black h-screen text-center pt-30 text-white py-16">
          <div className="container mx-auto px-4">
            
            <div className="text-3xl textbottom-10 right-10" >
              <div className="text-3xl text-center bottom-10 right-10">
                <FaHandPointDown className="text-3xl absolute bottom-10 right-10" />
              </div>
            </div>
            <h2 className="text-6xl leading-relaxed font-bold ">{children}</h2>
            <Button className="m-20">Explore Our Work</Button>
          </div>
         
        </section>
      );
    };

export default HeroSection;