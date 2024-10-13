import Image from 'next/image';
import React from 'react';

function OptionSection() {
  const optionsList = [
    {
      id: 1,
      name: 'Play Store',
      icon: '/playstore.png',
      url: 'https://play.google.com/store/apps/details?id=com.successstudycircle.learners' 
    },
    {
      id: 2,
      name: 'YouTube',
      icon: '/youtube.png',
      url: 'https://www.youtube.com/@S2C_tnpsc' 
    }
  ];

  return (
    <div className='flex items-center gap-3'>
      {optionsList.map((option) => (
        <a 
          key={option.id} 
          href={option.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer'
        >
          <Image 
            src={option.icon} 
            width={30} 
            height={30} 
            alt={option.name} 
          />
          <h2 className='text-[14px] text-gray-500'>{option.name}</h2>
        </a>
      ))}
    </div>
  );
}

export default OptionSection;
