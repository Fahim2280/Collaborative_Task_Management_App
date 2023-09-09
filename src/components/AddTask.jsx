import { useState } from "react";
// eslint-disable-next-line react/prop-types
const AddTask = ({ setAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [progress, setProgress] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleAddTask = () => {
    const newTask = {
      taskName,
      progress,
      date,
      description,
    };

    const existTask = localStorage.getItem("task");

    if (
      taskName === "" ||
      progress === "" ||
      date === "" ||
      description === ""
    ) {
      setMessage("Please fill up the form");
    } else if (existTask) {
      setMessage("Task already assign");
    } else {
      localStorage.setItem("task", JSON.stringify(newTask));
      setAddTask(false);
    }
  };
  return (
    <div id="createProductModal" className="-mt-20 z-10">
      <div className=" p-4 w-full max-w-2xl max-h-full">
        <div className=" p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Add Product
            </h3>
            <button
              onClick={() => setAddTask(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-target="createProductModal"
              data-modal-toggle="createProductModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type Task name"
                  required=""
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="progress"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Progress
                </label>
                <input
                  type="text"
                  name="porgress"
                  id="progress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Task Progress"
                  required=""
                  onChange={(e) => setProgress(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Date
                </label>
                <input
                  type="date"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Write project description here"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleAddTask}
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add new product
            </button>
          </form>
          <p className="text-sm font-light text-danger">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
