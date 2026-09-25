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
        <div className="min-h-screen flex flex-col bg-black">
            <div>
                <h2 className="text-3xl text-amber-500 pt-2 px-4">Queue Management System</h2>
            </div>
            <div className="flex justify-between gap-4">
                <AddQueueForm onAdd={addQueue}/>
                <DisplayQueue queueList={queue} updateStatus={updateStatus} removeFromQueue={removeFromQueue}/>
            </div>
        </div>
    )   

}

export default App;