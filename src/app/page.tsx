import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import HeroSection from "../component/hero/page";
import Navbar from "../component/navbar/page";
import Button from "@/component/button/page";
import Image from 'next/image'
import img from '@/assets/aboutus.png'
import projectimg1 from '@/assets/project1.webp'
import projectimg2 from '@/assets/project2.webp'
import projectimg3 from '@/assets/project3.webp'
import projectimg4 from '@/assets/project4.webp'
import Footer from "@/component/footer/page";
import ProjectCard from "@/component/project_card";
import PreFooter from "@/component/prefooter/page";

export default function Home() {
    return (
        <div className="bg-black">
            <div className="container mx-auto text-white">
                <Navbar />
                <div>
                    <HeroSection sub="" OC="" header={<>Designing with Purpose <span className="text-slate-400">Building with Webflow.</span></>} CTA={<>say hi</>} />
                    <section className="text-center">
                        <div className="mr-4 ml-4 mb-20 flex items-center justify-between">
                            <h2 className="text-base">About us</h2>
                            <ul className="flex space-x-4">
                                <li className="border rounded-full p-1"><FaLinkedin /></li>
                                <li className="border rounded-full p-1"><FaTwitter /></li>
                                <li className="border rounded-full p-1"><FaInstagram /></li>
                            </ul>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 text-left text-lg mr-4">
                                <p>At [Your Name], we believe in the power of creativity to transform ideas into reality. With a blend of innovation and expertise, we strive to deliver exceptional digital solutions that captivate and inspire</p>
                                <p className="mt-20">At [Your Name], we believe in creativity to transform ideas into reality. of innovation and expertise, we strive to deliver exceptional digital solutions that captivate and inspire</p>
                            </div>
                            <div className="w-1/2">
                                <Image src={img} alt="" />
                            </div>
                        </div>
                        <table className="w-full mt-10 mb-10">
                            <thead>
                                <tr>
                                    <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                    <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                    <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                </tr>
                            </thead>
                        </table>
                    </section>
                    <section className="text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-6">Explore Our Work</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <ProjectCard imageUrl={projectimg1} title="first project" />
                            <ProjectCard imageUrl={projectimg2} title="second project" />
                            <ProjectCard imageUrl={projectimg3} title="third project" />
                            <ProjectCard imageUrl={projectimg4} title="fourth project" />
                        </div>
                    </section>
                    <section className="text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-black p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-4">Client Video</h3>
                                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                                    <video width="640" height="360" controls>
                                        <source src="sample_video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="bg-black p-6 text-left rounded-lg">
                                <blockquote className="text-white text-lg mb-4">"Working with [Your Name] was a pleasure. Their attention to detail and commitment to excellence truly set them apart."</blockquote>
                                <p className="text-white">- John Doe</p>
                            </div>
                        </div>
                    </section>
                </div>
                <PreFooter />
                <Footer />
            </div>
        </div>
    );
}
