import { useState } from "react";

const AddQueueForm = ({onAdd}) => {

    const [customer, setCustomer] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!customer.trim() || !service.trim()) return;
        onAdd({customer, service});
        setCustomer('');
        setService('');
    }

    return (
        <>           
            <div>Queue Form</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="input" 
                    value={customer} 
                    onChange={(e) => setCustomer(e.target.value)} 
                    placeholder="Customer Name" />
                <select value={service} onChange={(e) => setService(e.target.value)}>
                    <option value=''>Select Service</option>
                    <option value='consultation'>Consultation</option>
                    <option value='payment'>Payment</option>
                    <option value='support'>Support</option>
                </select>
                <button type="submit" >Add Queue</button>
            </form>
        </>
    )
}

export default AddQueueForm;