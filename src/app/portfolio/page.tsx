import Footer from "@/component/footer/page";
import HeroSection from "@/component/hero/page";
import Navbar from "@/component/navbar/page";

export default function Portfolio()
{
    return <div className="bg-black max-w-screen-2xl"> 
    <div className=" max-w-screen-lg mx-auto text-white">
        <Navbar/>
        <div>
            <div className="container mx-auto py-12">
                <HeroSection>"Show casing our <span className="text-slate-400">Talent and Passion</span>"</HeroSection>
                
            </div>
        </div>
    <Footer/>
    </div>
</div>
}