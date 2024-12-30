import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[]; // Declare tags as an array of strings
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags = [] }) => {
  return (
    <div className="border border-accent rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div>
        <Image
          className="w-full h-64 object-cover"
          src={img}
          width={350}
          height={200} // Add height if necessary
          alt={title}
        />
      </div>
      <div className="p-6 space-y-4 bg-white">
        <div className="text-3xl font-semibold text-black">{title}</div>
        <div className="text-gray-700 text-lg">{desc}</div>
        <div className="flex flex-wrap gap-2">
          {/* Use optional chaining for tags */}
          {tags?.map((el, index) => (
            <div
              key={index}
              className="bg-teal-200 text-teal-800 px-4 py-1 rounded-full text-sm font-medium"
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;