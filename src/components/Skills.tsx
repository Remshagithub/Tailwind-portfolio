import React from 'react';

export default function Skills() {
  return (
    <section id="Skills" className="container mx-auto pt-32 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Technologies I Work With
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Highly skilled web developer with a strong foundation in HTML, CSS, and JavaScript. 
            Proficient in leveraging React and Next.js to craft dynamic, user-centric applications. 
            Adept at utilizing Tailwind CSS for efficient, responsive design. Dedicated to ongoing learning, 
            staying current with the latest technologies to enhance expertise and drive project success.
          </p>
        </div>

        <div className=" p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-700">TypeScript</h3>
              <h3 className="text-xl font-bold text-gray-700">React.js</h3>
              <h3 className="text-xl font-bold text-gray-700">Next.js</h3>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-700">Tailwind CSS</h3>
              <h3 className="text-xl font-bold text-gray-700">CSS</h3>
              <h3 className="text-xl font-bold text-gray-700">Node.js</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}