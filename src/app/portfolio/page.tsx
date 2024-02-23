import Footer from "@/component/footer/page";
import HeroSection from "@/component/hero/page";
import Navbar from "@/component/navbar/page";
import PreFooter from "@/component/prefooter/page";
import ProjectCard from "@/component/project_card";
import img from '../assets/aboutus.png'
import projectimg1 from '@/assets/project1.webp'
import projectimg2 from '@/assets/project2.webp'
import projectimg3 from '@/assets/project3.webp'
import projectimg4 from '@/assets/project4.webp'
import projectimg5 from '@/assets/project5.webp'
import projectimg6 from '@/assets/project6.webp'
export default function Portfolio()
{
    return <div className="bg-black max-w-screen-2xl"> 
    <div className=" max-w-screen-lg mx-auto text-white">
        <Navbar/>
        <div>
            <div className="container mx-auto py-12 ">
                <HeroSection sub="" header={<>Show casing our <span className="text-slate-400 ">Talent and Passion</span></>} CTA=""/>
                <section className="text-center m-20">
                    <div className="grid grid-cols-2">
                    <h2 className="text-md  text-left font-semibold mb-6 text-slate-400">Selected Projects </h2>
                    <p className="font-mono text-left mb-10 text-3xl">Discover my skills and creativity in action, with just one click.</p>
                    </div>
                        <div className="grid grid-cols-2 gap-8">
                            <ProjectCard imageUrl={projectimg1} title="" />
                            <ProjectCard imageUrl={projectimg2} title=""/>
                            <ProjectCard imageUrl={projectimg3} title=""/>
                            <ProjectCard imageUrl={projectimg4} title=""/>
                            <ProjectCard imageUrl={projectimg5} title=""/>
                            <ProjectCard imageUrl={projectimg6} title=""/>
                        </div>
                    </section>
                    <PreFooter/>
                    <Footer/>
            </div>
        </div>

    </div>
</div>
}