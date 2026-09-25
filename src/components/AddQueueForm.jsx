import { useState } from "react";

const AddQueueForm = ({ onAdd }) => {
  const [customer, setCustomer] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer.trim() || !service.trim()) return;
    onAdd({ customer, service });
    setCustomer("");
    setService("");
  };

  return (
    <div className="p-5 mt-5 bg-gray-800 text-white rounded">
      <div className="text-xl mb-4">Queue Form</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="p-2 h-11 bg-gray-700 text-white border border-gray-600 rounded"
          type="input"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          placeholder="Customer Name"
        />
        <select
          className="p-2 h-11 bg-gray-700 text-white border border-gray-600 rounded"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="consultation">Consultation</option>
          <option value="payment">Payment</option>
          <option value="support">Support</option>
        </select>
        <button
          className="p-2 mt-3 h-11 bg-amber-500 text-black rounded hover:bg-amber-600 hover:text-gray-200 cursor-pointer transition-all"
          type="submit"
        >
          Add Queue
        </button>
      </form>
    </div>
  );
};

export default AddQueueForm;
