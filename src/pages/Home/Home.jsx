import Tasks from "../Home/Tasks";
import Qoutes from "../Home/Qoutes";
import Completed from "../Home/Completed";
import AddButton from "../Home/AddButton";
import AddTask from "../../Components/AddTask";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import client from "../../api/appwrite";

function Home() {
  const [showModal, setShowModal] = useState(false);
  console.log(client)

  return (
    <div className="bg-gray-200 h-screen">
      <div className="sm:max-w-md mx-auto bg-white h-screen overflow-y-auto rounded-2xl">
        <AddTask showModal={showModal} setShowModal={setShowModal} />
        <Navbar />
        <Qoutes />
        <Tasks />
        <Completed />
        <AddButton showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default Home;
