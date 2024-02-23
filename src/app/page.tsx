import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import HeroSection from "../component/hero/page";
import img from "../assets/aboutus.png"
import Navbar from "../component/navbar/page";
import Button from "@/component/button/page";
import Image from 'next/image'
import Footer from "@/component/footer/page";
import ProjectCard from "@/component/project_card";

export default function Home()
{
    return <div className="bg-black max-w-screen-2xl"> 
        <div className=" max-w-screen-lg mx-auto text-white">
            <Navbar/>
            <div>
                <div className="container mx-auto py-12">
                    <HeroSection>"Crafting Digital Experiences with <span className="text-slate-400">Passion and Precision</span></HeroSection>
                    <section className="text-center h-screen ">
                        <div className="mr-4 ml-4 mb-20 flex items-center justify-between">
                            <h2 className="text-base">About us</h2>
                            <ul className="flex space-x-4">
                                <li><CiLinkedin /></li>
                                <li><CiTwitter /></li>
                                <li><CiInstagram /></li>
                            </ul>
                        </div>
                        <div className="flex ">
                            <div className="w-1/2 text-left text-lg mr-4">
                                <p>At [Your Name], we believe in the power of creativity to transform ideas into reality. With a blend of innovation and expertise, we strive to deliver exceptional digital solutions that captivate and inspire</p>
                                <p className="mt-20">At [Your Name], we believe in  creativity to transform ideas into reality. of innovation and expertise, we strive to deliver exceptional digital solutions that captivate and inspire</p>
                            </div>
                            <div className="w-1/2">
                                <Image src={img} alt="" />
                            </div>
                        </div>
                        <table className="w-full mt-10 mb-10">
                            <tr>
                                <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                            </tr>
                        </table>

                    </section>
                    <section className="text-center mb-12">
                    <section className="text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-6">Explore Our Work</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                        </div>
        </section>
                    </section>
                    <section className="text-center mb-12">
                        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-black p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-4">Client Video</h3>
                                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                                    {/* Embed your video here */}
                                </div>
                            </div>
                            <div className="bg-black p-6  text-left rounded-lg">
                                <blockquote className="text-white text-lg mb-4">"Working with [Your Name] was a pleasure. Their attention to detail and commitment to excellence truly set them apart."</blockquote>
                                <p className="text-white">- John Doe</p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="col-span-1 md:col-span-1">
                                <h2 className="text-6xl font-bold mb-4">Let's Work-Together</h2>
                            </div>
                            <div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center">
                                <button className="bg-black text-white border border-white py-2 px-4 rounded-lg mb-4 hover:bg-gray-800 hover:border-gray-800 transition duration-300 w-60">Contact Me</button>
                                <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 w-60">Visit My LinkedIn</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        <Footer/>
        </div>
    </div>
}