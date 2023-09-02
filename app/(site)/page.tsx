import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>

      <h1 className="font-bold text-5xl">Hola It&apos;s 
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">AYG3 !</span>
      </h1>
      
      <p className="text-gray-600 font-semibold text-4xl mt-8">
        Hola Everyone, Check out some of my projects
      </p>
      
      <h2 className="font-bold text-gray-700 text-3xl mt-24">My Projects</h2>


      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-black transition">

            {project.image && (
              <Image src={project.image} alt={project.name} width={750} height={300} className="object-cover rounded-lg border border-gray-500" /> 
              )}

            <div className="mt-5 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>

          </Link>
        ))}
      </div>

    </div>
  )
}
