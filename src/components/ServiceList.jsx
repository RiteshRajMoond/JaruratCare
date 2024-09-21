import React, { useState } from "react";
import Service from "./Service";
import ServiceForm from "./ServiceForm";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.name === updatedService.name ? updatedService : service
      )
    );
    setEditingService(null);
  };

  const deleteService = (serviceName) => {
    setServices(services.filter((service) => service.name !== serviceName));
  };

  const editService = (service) => {
    setEditingService(service);
  };

  return (
    <div>
      {services.map((service, idx) => (
        <div key={idx}>
          <Service service={service} />
          <button onClick={() => editService(service)}>Edit</button>
          <button onClick={() => deleteService(service.name)}>Delete</button>
        </div>
      ))}

      <ServiceForm
        addService={addService}
        updateService={updateService}
        editingService={editingService}
      />
    </div>
  );
};

export default ServiceList;
