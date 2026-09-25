import { useState } from 'react'
import AddQueueForm from './components/AddQueueForm.jsx'
import DisplayQueue from './components/DisplayQueue.jsx'

const App = () => {
    const [queue, setQueue] = useState([]);
    const [completedQueue, setCompletedQueue] = useState([]);


    const addQueue = (customer) => {
        setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }]);
    }

    const updateStatus = (id, newStatus) => {
        const customer = queue.find((customer) => customer.id === id);

        if (newStatus === "completed" && customer) {
            setCompletedQueue((completedQueue) => [
                ...completedQueue,
                { ...customer, status: newStatus },
            ]);
            removeFromQueue(id);
            return;
        }

        setQueue(
            queue.map((customer) =>
                customer.id === id ? { ...customer, status: newStatus } : customer
            )
        );
    }

    const removeFromQueue = (id) => {
        setQueue(queue.filter((customer) => customer.id !== id))
    }

    console.log("Queue",queue);
    console.log("completedQueue",completedQueue);
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <div>
                <h2 className="text-2xl md:text-3xl text-center md:text-left text-amber-500 pt-2 px-4">Queue Management System</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <AddQueueForm onAdd={addQueue}/>
                <DisplayQueue completedQueue={completedQueue} queueList={queue} updateStatus={updateStatus} removeFromQueue={removeFromQueue}/>
            </div>
        </div>
    )   

}

export default App;