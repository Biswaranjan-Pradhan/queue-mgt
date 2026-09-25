import { useState } from 'react'
import AddQueueForm from './components/AddQueueForm.jsx'
import DisplayQueue from './components/DisplayQueue.jsx'

const App = () => {
    const [queue, setQueue] = useState([])

    const addQueue = (customer) => {
        setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }])
    }

    const updateStatus = (id, newStatus) => {
        setQueue(
            queue.map((customer) =>
                customer.id === id ? { ...customer, status: newStatus } : customer
            )
        )
    }

    const removeFromQueue = (id) => {
        setQueue(queue.filter((customer) => customer.id !== id))
    }


    return (
        <>
            <h2>Queue Management System</h2>
            <AddQueueForm onAdd={addQueue}/>
            <DisplayQueue queueList={queue} updateStatus={updateStatus} removeFromQueue={removeFromQueue}/>
        </>
    )   

}

export default App;