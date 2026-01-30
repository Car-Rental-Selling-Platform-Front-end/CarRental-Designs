import React from 'react';
import CarCard from './CarCard';

interface Car {
  id: string;
  image: string;
  title: string;
  price: string;
  description?: string;
}

interface CarListProps {
  cars: Car[];
  onCarClick?: (id: string) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, onCarClick }) => (
  <div className="car-list">
    {cars.map(car => (
      <CarCard
        key={car.id}
        image={car.image}
        title={car.title}
        price={car.price}
        description={car.description}
        onClick={() => onCarClick && onCarClick(car.id)}
      />
    ))}
  </div>
);

export default CarList;
