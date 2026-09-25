const DisplayQueue = ({ queueList, updateStatus, removeFromQueue }) => {
    return queueList.length <= 0 ? 'No Queue Yet' : (
        <>
            <div><b>List of Queues</b></div>
            {queueList.map((queue) => {
                const { id, customer, service, status } = queue
                return (
                    <div key={id}>
                        <div>Name: {customer}</div>
                        <div>Service: {service}</div>
                        <div>Status: {status}</div>
                        <button onClick={() => updateStatus(id, 'in-progress')}>
                            Update
                        </button>
                        <button onClick={() => removeFromQueue(id)}>
                            Delete
                        </button>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default DisplayQueue;