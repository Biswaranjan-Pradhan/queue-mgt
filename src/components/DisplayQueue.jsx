const DisplayQueue = ({ queueList, updateStatus, removeFromQueue }) => {
  return queueList.length <= 0 ? (
    <div className="w-full p-5 mt-5 bg-gray-800 text-white text-xl flex justify-center items-center rounded">
      Empty Queue
    </div>
  ) : (
    <div className="w-full p-5 mt-5 bg-gray-800 text-white rounded">
      <div className="text-xl mb-4 text-white border-b-3 border-gray-600 p-2 rounded">List of Queues</div>
      {queueList.map((queue) => {
        const { id, customer, service, status } = queue;
        return (
          <div key={id} className="flex justify-between items-center border-b border-gray-600 py-2">
            <div>
              <div>Name: {customer}</div>
              <div>
                Service:{" "}
                {service
                  .split("")
                  .map((s, i) => (i === 0 ? s.toUpperCase() : s))
                  ?.join("")}
              </div>
              <div>
                Status:{" "}
                {status
                  ?.split("")
                  .map((s, i) => (i === 0 ? s.toUpperCase() : s))
                  ?.join("")}
              </div>
            </div>
            <div>
              <button
                className="p-2 h-11 bg-amber-500 text-black rounded hover:bg-amber-600 hover:text-gray-200 cursor-pointer transition-all"
                onClick={() => updateStatus(id, "in-progress")}
              >
                Update
              </button>
              <button
                className="p-2 m-4 h-11 bg-red-500 text-black rounded hover:bg-red-800 hover:text-gray-200 cursor-pointer transition-all"
                onClick={() => removeFromQueue(id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayQueue;
