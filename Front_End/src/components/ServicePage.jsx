// ServicePage.jsx
import React from 'react';
import './ServicePage.css';

const services = [
  { name: 'Periodic Services', icon: 'fas fa-calendar-alt', description: 'Regular maintenance and servicing' },
  { name: 'AC Service & Repair', icon: 'fas fa-thermometer-half', description: 'Air conditioning service and repair' },
  { name: 'Batteries', icon: 'fas fa-car-battery', description: 'Battery replacement and maintenance' },
  { name: 'Tyres & Wheel Care', icon: 'fas fa-tools', description: 'Tyre replacement and wheel alignment' },
  { name: 'Denting & Painting', icon: 'fas fa-paint-roller', description: 'Denting and painting services' },
  { name: 'Detailing Services', icon: 'fas fa-spray-can', description: 'Vehicle detailing and polishing' },
  { name: 'Car Spa & Cleaning', icon: 'fas fa-water', description: 'Car washing and cleaning services' },
  { name: 'Car Inspections', icon: 'fas fa-search', description: 'Detailed vehicle inspections' },
  { name: 'Windshields & Lights', icon: 'fas fa-car-side', description: 'Windshield and light replacement' },
  { name: 'Suspension & Fitments', icon: 'fas fa-wrench', description: 'Suspension and other fitments' },
];

const ServicePage = () => {
  return (
    <div className="service-page-container">
      <h1>Vehicle Services</h1>
      <div className="card-container">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-icon">
              <i className={service.icon}></i>
            </div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
