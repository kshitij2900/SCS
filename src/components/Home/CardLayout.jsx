import React from "react";
import Image from "next/image";
import cardImage from '/assets/Experience/cardImage.png'; // Replace with your image path


const Card = ({ title, subtitle, description }) => {
  return (
    <div className="w-full md:w-[350px] h-auto md:h-[420px] bg-gray-200 shadow-lg rounded-xl p-4 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <Image 
        src={cardImage} 
        alt="Card Image" 
        width={450} 
        height={400} 
        className="mb-2 rounded-xl h-auto md:h-[300px] lg:h-[350px]" 
      />
      <h4 className="text-lg font-semibold mb-1 text-black">{subtitle}</h4>
      <p className="text-gray-700 text-center">{description}</p>
      <button className="bg-[#19456B] rounded-2xl mt-2 py-2 px-4 text-white">Action</button>
    </div>
  );
};

const CardLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-6 md:flex-row md:flex-wrap md:justify-center lg:gap-20">
      <Card
        title="Card Title 1"
        subtitle="Card Subtitle 1"
        description="This is a description for card 1."
      />
      <Card
        title="Card Title 2"
        subtitle="Card Subtitle 2"
        description="This is a description for card 2."
      />
      <Card
        title="Card Title 3"
        subtitle="Card Subtitle 3"
        description="This is a description for card 3."
      />
    </div>
  );
};

export default CardLayout;
