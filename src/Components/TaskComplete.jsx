
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleCompleteTodoAsync, deleteTodoAsync } from "../redux/todoSlice";
const Task = ({ id, title, body, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleCompleteTodoAsync({ id, completed: !completed }));
    
  };
  const handleDelete = () => {
    dispatch(deleteTodoAsync({ id }));
    window.location.reload(false);
  };
  return (
    <>
      <div className="bg-gray-100 rounded-2xl p-5">
        <div className="flex justify-between items-center pb-3">
          <h4 className="font-bold text-lg line-through">{title}</h4>
          <div className="flex">
            <button
              className="flex justify-center items-center rounded-full bg-red-500 w-7 h-7 mr-1"
              onClick={handleDelete}
            >
              <AiFillDelete className="text-xl text-white" />
            </button>
            <form>
              <input
                className="rounded-full text-indigo-600 w-7 h-7 focus:border-0 focus:ring-0"
                type="checkbox"
                checked={completed}
                onChange={handleComplete}
              />
            </form>
          </div>
        </div>
        <div className="">
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default Task;
