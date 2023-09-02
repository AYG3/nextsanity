import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
// import '../globals.css'

type Props = {
    params: {project: string};

};

export default async function project({ params }: Props){

    const slug = params.project;
    const project = await getProject(slug);



    return(
        
        <div>
            <header className="flex justify-between">
                <h1 className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent font-extrabold text-7xl drop-shadow">{project.name}</h1>
                <a href={project.url} className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 flex items-center hover:bg-pink-500 hover:text-pink-100 transition" title="View Project" target="_blank" rel="noopener noreferrer">View Project</a>
            </header>

            {/* Content goes here */}
            <div className="text-xl text-gray-700 mt-5">
                <PortableText value={project.content} />
            </div>

            {/* Image goes here */}
            <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />

        </div>
    )  
        
}