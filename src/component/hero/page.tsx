import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa6";
import Button from "../button/page";
import { ReactNode } from "react";
import { Url } from "url";

interface heroProps {
  header: ReactNode;
  sub: ReactNode;
  CTA:ReactNode;
  OC:string;

}

const HeroSection: React.FC<heroProps> = ({header,sub,CTA,OC}) => {
    return (
        <section className=" mb-44 bg-grey-900 bg-black flex flex-col justify-center items-center text-center pt-10 text-white ">
          <div className="container mx-auto  mt-16 ">
            <div className="text-3xl textbottom-10 right-10" >
              <div className="text-3xl text-center bottom-10 right-10">
                <FaHandPointDown className="text-3xl absolute bottom-10 right-10" />
              </div>
            </div>
            <h1 className="text-6xl leading-relaxed font-bold ">{header}</h1>
            <h3>{sub}</h3>
            <div className="m-20"><Link className=" p-56 border rounded-full py-2 px-4" href={OC}>{CTA}</Link></div>
            
          </div>
        </section>
      );
    };

export default HeroSection;