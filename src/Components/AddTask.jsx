import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";


const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const dispatch = useDispatch()

 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAsync({
      title,
      body,
    }))

    props.setShowModal(false);
  };
  const handleClick = () => {
    props.setShowModal(false);
  };

  return (
    <>
      {props.showModal && (
        <div className="w-full h-full bg-opacity-80 fixed flex justify-center items-center bg-black z-10 sm:max-w-md">
          <div className="w-64 h-64 bg-white p-4 rounded-xl">
            <form onSubmit={(e) => handleSubmit(e)} className="w-56 relative">
              <button className="absolute right-0" onClick={handleClick}>
                <AiOutlineClose />
              </button>
              <label htmlFor="title">Task title</label>
              <input
                className="rounded-xl bg-gray-50 h-12 w-full  block my-2"
                type="text"
                name="title"
                id="title"
                onChange={(e) =>setTitle(e.target.value)}
                placeholder="Task Title"
              />
              <textarea
                className="rounded-xl bg-gray-50 h-20 w-full  block my-2"
                name="body"
                id="body"
                placeholder="Body"
                onChange={(e) =>setBody(e.target.value)}
              ></textarea>
              <input
                className="py-2 px-8 w-full bg-indigo-600 text-white rounded-xl"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
