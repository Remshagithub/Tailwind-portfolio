import React from 'react';
import Heading from './Heading';
import Image from 'next/image'; // Import Next.js Image component

// Removed unused Cart import

const data = [
  {
    id: 1,
    title: 'Static Resume Generator',
    desc: 'Basic HTML helps you to generate resume.',
    img: '/static.jpg',
    tags: ['HTML', 'CSS', 'Typescript'],
  },
  {
    id: 2,
    title: 'Shareable Resume Generator',
    desc: 'Sharable resume generator helps to generate resume easily.',
    img: '/shareable.jpg',
    tags: ['HTML', 'CSS', 'Typescript'],
  },
  {
    id: 3,
    title: 'Dynamic Resume Generator',
    desc: 'A simple HTML and TypeScript powered tool for resume generation.',
    img: '/dyna.jpg',
    tags: ['HTML', 'CSS', 'Typescript'],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="container mx-auto pt-32 px-6 lg:px-12">
      <Heading title="Projects" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-slate-50 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Using Next.js Image component */}
            <div className="relative w-full h-48">
              <Image
                src={project.img}
                alt={project.title}
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Mimics the object-cover behavior of CSS
                quality={100} // Optional: Adjust image quality
                priority // Optional: Optimizes above-the-fold images
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg bg-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}