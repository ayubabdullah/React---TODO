import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteTodoAsync } from "../redux/todoSlice";



const Task = ({ id, title, body, completed }) => {
    const [complete, setComplete] = useState(false);
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleCompleteTodoAsync({ id, completed: !completed }));
    setComplete(true);
  };
  return (
    <>
      {complete && <h4 className="font-bold text-lg line-through">complete</h4>}
      <div className="bg-gray-100 rounded-2xl p-5">
        <div className="flex justify-between items-center pb-3">
          <h4 className="font-bold text-lg">{title}</h4>
          <form>
            <input
              className="rounded-full text-indigo-600 w-7 h-7 focus:border-0 focus:ring-0"
              type="checkbox"
              checked={completed}
              onChange={handleComplete}
            />
          </form>
        </div>
        <div className="">
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default Task;
