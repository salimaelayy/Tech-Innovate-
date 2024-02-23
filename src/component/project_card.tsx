

export default function ProjectCard()
{
    return <div className="bg-black p-6 rounded-lg border border-white">
                <img src="project1.jpg" alt="Project 1" className="mb-4 mx-auto border border-white" />
                <div className="mb-4">
                    <span className="border border-white px-2 py-1 rounded-md mr-2">Web Design</span>
                    <span className="border border-white px-2 py-1 rounded-md">Development</span>
                </div>
                <button className="bg-white text-black py-2 px-6 rounded-lg">View Project</button>
            </div>
}