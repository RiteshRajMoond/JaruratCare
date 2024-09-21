import React, { useEffect, useState } from "react";

const ServiceForm = ({ addService, updateService, editingService }) => {
  const [service, setService] = useState({
    name: "",
    description: "",
    cost: 0,
  });

  useEffect(() => {
    if (editingService) {
      setService(editingService);
    } else {
      setService({
        name: "",
        description: "",
        cost: 0,
      });
    }
  }, [editingService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.name && service.description && service.cost) {
      if (editingService) {
        updateService(service);
      } else {
        addService(service);
      }
      setService({
        name: "",
        description: "",
        cost: 0,
      });
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Service Name: </label>
        <input
          type="text"
          name="name"
          value={service.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={service.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="cost">Cost: </label>
        <input
          type="number"
          name="cost"
          value={service.cost}
          onChange={handleChange}
        />
        <br />
        <button type="submit">
          {editingService ? "Update Service" : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
