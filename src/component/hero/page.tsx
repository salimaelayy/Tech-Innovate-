import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa6";
import Button from "../button/page";
import { ReactNode } from "react";

interface heroProps {
  header: ReactNode;
  sub: ReactNode;
  CTA:ReactNode;

}

const HeroSection: React.FC<heroProps> = ({header,sub,CTA}) => {
    return (
        <section className="bg-grey-900 bg-black h-screen text-center pt-10 text-white ">
          <div className="container mx-auto  mt-16 ">
            <div className="text-3xl textbottom-10 right-10" >
              <div className="text-3xl text-center bottom-10 right-10">
                <FaHandPointDown className="text-3xl absolute bottom-10 right-10" />
              </div>
            </div>
            <h1 className="text-6xl leading-relaxed font-bold ">{header}</h1>
            <h3>{sub}</h3>
            <Button className="m-20">{CTA}</Button>
          </div>
         
        </section>
      );
    };

export default HeroSection;