const DisplayQueue = ({
  queueList,
  updateStatus,
  removeFromQueue,
  completedQueue,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "text-amber-500";
      case "serving":
        return "text-green-500";
      case "completed":
        return "text-red-500";
      default:
        return "text-black";
    }
  };

  return queueList.length <= 0 && completedQueue.length <= 0 ? (
    <div className="w-full p-5 mt-5 bg-gray-800 text-white text-xl flex justify-center items-center rounded">
      Empty Queue
    </div>
  ) : (
    <div className="w-full flex flex-col">
      <div className="w-full p-5 mt-5 bg-gray-800 text-white rounded">
        <div className="text-xl mb-1 text-green-500 border-b-3 border-gray-600 p-2 rounded">
          Active Queues ({queueList.length})
        </div>
        {queueList.length === 0 ? (
          <div className="text-center w-full">No Active Queues</div>
        ) : (
          queueList.map((queue, index) => {
            const { id, customer, service, status } = queue;
            return (
              <div
                key={id}
                className="flex justify-start items-center rounded border-b border-gray-600 py-2 px-2 hover:bg-gray-600 transition-all"
              >
                <div className="relative w-10 h-10 bg-amber-500 rounded-3xl">
                  <div className="px-4 pt-2">{index + 1}</div>
                </div>
                <div className=" w-50 ml-5">
                  <div>Name: {customer}</div>
                  <div>
                    Service:&nbsp;
                    {service
                      .split("")
                      .map((s, i) => (i === 0 ? s.toUpperCase() : s))
                      ?.join("")}
                  </div>
                  <div>
                    Status:&nbsp;
                    <span className={getStatusColor(status)}>
                      {status
                        ?.split("")
                        .map((s, i) => (i === 0 ? s.toUpperCase() : s))
                        ?.join("")}
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  {status === "waiting" && (
                    <button
                      className="p-2 ml-4 sm:h-8 md:h-11 bg-amber-500 text-black rounded hover:bg-amber-600 hover:text-gray-200 cursor-pointer transition-all"
                      onClick={() => updateStatus(id, "serving")}
                    >
                      Serve
                    </button>
                  )}
                  {status === "serving" && (
                    <button
                      className="p-2 md:h-11 bg-amber-500 text-black rounded hover:bg-amber-600 hover:text-gray-200 cursor-pointer transition-all"
                      onClick={() => updateStatus(id, "completed")}
                    >
                      Complete
                    </button>
                  )}
                  {status !== "serving" && (
                    <button
                      className="p-2 m-4 md:h-11 bg-red-500 text-black rounded hover:bg-red-800 hover:text-gray-200 cursor-pointer transition-all"
                      onClick={() => removeFromQueue(id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="w-full p-5 mt-5 bg-gray-800 text-white rounded">
        <div className="text-xl text-red-500 border-b-3 border-gray-600 mb-1 p-2 rounded">
          Completed Queues ({completedQueue.length})
        </div>
        {completedQueue.length === 0 ? (
          <div className="flex justify-between items-center py-2">
            <div className="text-center w-full">No Completed Queues</div>
          </div>
        ) : (
          completedQueue.map((completedQueue, index) => {
            const { id, customer, service, status } = completedQueue;
            if (status === "completed") {
              return (
                <div
                  key={id}
                  className="flex justify-start items-center border-b border-gray-600 rounded p-4 hover:bg-gray-600"
                >
                  <div className="relative w-10 h-10 bg-red-500 rounded-3xl">
                    <div className="px-4 pt-2">{index + 1}</div>
                  </div>
                  <div className="flex flex-col ml-4 md:flex-row md:ml-5">
                    <div className="md:ml-4 md:mr-8">Name: {customer}</div>
                    <div className="md:mr-8">
                      Service:&nbsp;
                      {service
                        .split("")
                        .map((s, i) => (i === 0 ? s.toUpperCase() : s))
                        ?.join("")}
                    </div>
                    <div className="md:mr-8">
                      Status:&nbsp;
                      <span className={getStatusColor(status)}>
                        {status
                          ?.split("")
                          .map((s, i) => (i === 0 ? s.toUpperCase() : s))
                          ?.join("")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

export default DisplayQueue;
