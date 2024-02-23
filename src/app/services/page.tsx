import Footer from "@/component/footer/page";
import HeroSection from "@/component/hero/page";
import Navbar from "@/component/navbar/page";
import PreFooter from "@/component/prefooter/page";
import ProjectCard from "@/component/project_card";

export default function Services()
{
    return <div className="bg-black max-w-screen-2xl">
    <div className="max-w-screen-lg mx-auto text-white">
        <Navbar />
        <div>
            <div className="container mx-auto py-12 ">
            <HeroSection sub="How I Combine design and technology to create exceptional user experiences." header="Services" CTA=""/>
                <section className="text-center m-20">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <h2 className="text-md font-semibold mb-6 text-slate-400">Selected Projects</h2>
                            <p className="font-mono text-lg text-left mb-10">Discover my skills and creativity in action, with just one click.</p>
                        </div>
                        <div className="col-span-1">
                            {/* Your selected projects content goes here */}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 text-left text-lg mr-4">
                            <p>At [Your Name], we believe in the power of creativity to transform ideas into reality. With a blend of innovation and expertise, we strive to deliver exceptional digital solutions that captivate and inspire</p>
                        </div>
                        <div className="w-1/2">
                            {/* Add content for the right half if needed */}
                        </div>
                    </div>
                </section>
                <section className="bg-black text-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Service 1</h3>
                        <p className="text-gray-300">Description of Service 1 goes here.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Service 2</h3>
                        <p className="text-gray-300">Description of Service 2 goes here.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Service 3</h3>
                        <p className="text-gray-300">Description of Service 3 goes here.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Service 4</h3>
                        <p className="text-gray-300">Description of Service 4 goes here.</p>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Service 5</h3>
                        <p className="text-gray-300">Description of Service 5 goes here.</p>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Service 6</h3>
                        <p className="text-gray-300">Description of Service 6 goes here.</p>
                    </div>
                </div>
            </div>
        </section>
                <PreFooter />
                <Footer />
            </div>
        </div>
    </div>
</div>
}