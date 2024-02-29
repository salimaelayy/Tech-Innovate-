"use client"
import CForm from "@/component/ContactForm/form";
import Footer from "@/component/footer/page";
import HeroSection from "@/component/hero/page";
import Navbar from "@/component/navbar/page";
import PreFooter from "@/component/prefooter/page";
import ProjectCard from "@/component/project_card";

export default function Contact() {
            return (
                <div className="bg-black">
                    <div className="max-w-screen-lg mx-auto text-white">
                        <Navbar />
                        <div className="px-4">
                            <div className="container text-left mx-auto py-12">
                                <HeroSection OC="" sub="Get in touch with us" header="Contact Us" CTA="Contact Now" />
                                <section className="text-left ">
                                    <div className="grid grid-cols-2">
                                        <div className="col-span-1">
                                            <h2 className="font-bold text-xl mb-6 ">How to Contact Us</h2>
                                            <p className=" text-lg text-left mb-10">Feel free to reach out to us through any of the following methods:</p>
                                            <ul className="list-disc ml-6 text-slate-400">
                                                <li>Email: example@example.com</li>
                                                <li>Phone: +1234567890</li>
                                                <li>Address: 123 Main Street, City, Country</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-1">
                                            <h2 className="font-semibold text-md mb-6 ">Get in touch with us</h2>
                                            <CForm/>
                                        </div>
                                    </div>
                                </section>
                                {/* Add your form component here */}
                            </div>
                        </div>
                        <PreFooter />
                        <Footer />
                    </div>
                </div>
        
    );
}
