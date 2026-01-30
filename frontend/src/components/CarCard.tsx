import React from 'react';

interface CarCardProps {
  image: string;
  title: string;
  price: string;
  description?: string;
  onClick?: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ image, title, price, description, onClick }) => (
  <div className="car-card" onClick={onClick}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{price}</p>
    {description && <p>{description}</p>}
  </div>
);

export default CarCard;
