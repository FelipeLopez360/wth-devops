import React from 'react';

const Hours = () => {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const today = new Date().getDay();
  const dayName = daysOfWeek[today];

  let openingHours;
  if (today >= 1 && today <= 5) {
    // Lunes a Viernes
    openingHours = '10 a.m. - 4 p.m.';
  } else {
    // Sábado y Domingo
    openingHours = '9 a.m. - 8 p.m.';
  }

  return (
    <div>
      <h1>Horas de apertura</h1>
      <p>Hoy es {dayName}</p>
      <p>El refugio está abierto de {openingHours}</p>
    </div>
  );
};

export default Hours;
