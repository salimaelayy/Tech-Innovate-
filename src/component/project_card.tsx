import { Children } from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
    imageUrl: StaticImageData;
    title: string;
 
}

const ProjectCard: React.FC<CardProps> = ({imageUrl,title}) => {
    return (
        <div className="bg-black p-6 rounded-lg">
                <Image src={imageUrl} alt={title} width={500} height={500} className="mb-4 mx-auto border border-white" />
                <div className="mb-4">
                    <span className="border border-white px-2 py-1 rounded-md mr-2">Web Design</span>
                    <span className="border border-white px-2 py-1 rounded-md mr-2">Development</span>
                    <button className="border border-white  px-2 py-1 rounded-md mr-2">View Project</button>
                </div>
            </div>
    );
}
export default ProjectCard