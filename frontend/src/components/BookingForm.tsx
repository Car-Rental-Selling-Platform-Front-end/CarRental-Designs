import React, { useState } from 'react';

interface BookingFormProps {
  onSubmit: (data: { startDate: string; endDate: string }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ startDate, endDate });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
