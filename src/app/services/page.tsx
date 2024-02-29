import Footer from "@/component/footer/page";
import HeroSection from "@/component/hero/page";
import Navbar from "@/component/navbar/page";
import PreFooter from "@/component/prefooter/page";
import ProjectCard from "@/component/project_card";
import { FiCheckCircle } from "react-icons/fi";

export default function Services() {
    return (
        <div className="bg-black">
            <div className="max-w-screen-lg mx-auto text-white">
                <Navbar />
                <div className="px-4">
                    <div className="container mx-auto py-12">
                        <HeroSection sub="How I Combine design and technology to create exceptional user experiences." OC="#services-Section" header="Services" CTA="Our Services" />
                        <section className="text-center m-20">
                            <div className="grid grid-cols-2">
                                <div className="col-span-1">
                                    <h2 className="text-md font-semibold mb-6 text-slate-400">Selected Projects</h2>
                                    <p className="font-mono text-lg text-left mb-10">Discover my skills and creativity in action, with just one click.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 text-left text-lg mr-4">
                                    <p>At [Your Name], we believe in the power of creativity to transform ideas into reality. With a blend of innovation and expertise, we strive to deliver exceptional digital solutions that captivate and inspire</p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-black text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                </div>
            </div>
        </section>

                        <PreFooter />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
