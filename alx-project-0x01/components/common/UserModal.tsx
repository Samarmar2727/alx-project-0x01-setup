import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<UserData, 'id'>>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData((prev: any) => {
      const updated = { ...prev };
      let obj = updated;
      while (keys.length > 1) {
        const key = keys.shift()!;
        obj[key] = { ...obj[key] };
        obj = obj[key];
      }
      obj[keys[0]] = value;
      return updated;
    });
  };

  const handleSubmit = () => {
    const newUser: UserData = { id: Date.now(), ...formData };
    onSubmit(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <div className="grid grid-cols-2 gap-2">
          <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="username" placeholder="Username" onChange={handleChange} className="border p-2 rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 rounded" />
          <input name="website" placeholder="Website" onChange={handleChange} className="border p-2 rounded" />
          
          <input name="address.street" placeholder="Street" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.city" placeholder="City" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.zipcode" placeholder="Zipcode" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.geo.lat" placeholder="Latitude" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.geo.lng" placeholder="Longitude" onChange={handleChange} className="border p-2 rounded" />

          <input name="company.name" placeholder="Company Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" onChange={handleChange} className="border p-2 rounded" />
          <input name="company.bs" placeholder="BS" onChange={handleChange} className="border p-2 rounded" />
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
