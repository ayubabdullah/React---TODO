
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";

const AddButton = ({showModal, setShowModal}) => {


  const handleClick = () => {
    setShowModal(true);
  };
 
  return (
    <>
      <div className=" w-screen fixed bottom-6 sm: max-w-md">
        <div className="flex justify-center items-center">
          <button
            className="w-10 h-10 bg-indigo-600 rounded-xl "
            onClick={handleClick}
          >
            <IconContext.Provider value={{ color: "white", size: "28px" }}>
              <div className="flex justify-center items-center">
                <AiOutlinePlus />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddButton;
