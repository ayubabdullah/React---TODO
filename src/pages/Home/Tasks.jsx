import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../../Components/Task";
import { getTodoAsync } from "../../redux/todoSlice";


const taskVariant = {
  hidden: {
    x: -180,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
};
const Tasks = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAsync())
  },[dispatch])
  const todos = useSelector((state) => state.todos);
  const tasks = todos.filter((item) => !item.completed);
  
    return (
      <>
        <h3 className="pb-4 px-5 text-xl font-bold">Tasks</h3>
        {tasks.map((item, i) => (
          <motion.div
            variants={taskVariant}
            initial="hidden"
            animate="visible"
            custom={i}
            className="px-5 mb-2"
            key={item.id}
          >
            <Task
              id={item.id}
              title={item.title}
              body={item.body}
              completed={item.completed}
            />
          </motion.div>
        ))}
      </>
    );
}
 
export default Tasks;