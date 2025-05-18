import React from 'react';

type EquipCardProps = {
  image: string;
  title: string;
};

const EquipCard: React.FC<EquipCardProps> = ({ image, title }) => {
  return (
    <div className="min-w-[350px] h-[410px] bg-white rounded-3xl flex flex-col justify-center items-center px-4 py-6 mx-2">
      <img src={image} alt={title} className="h-70 object-contain" />
      <p className="mt-6 text-black font-semibold uppercase text-center">{title}</p>
    </div>
  );
};

export default EquipCard;
