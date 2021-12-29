import profile from "../images/profile.jpg";
import {motion} from 'framer-motion';
const Navbar = () => {
  return (
    <div className="px-6 pt-6">
      <nav className="h-20 flex justify-between items-center">
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={{x: 0}}
          className="font-bold text-lg text-gray-400">
          Hello,
          <span className="text-xl font-extrabold text-gray-900 block">
            Ayub Abdullah
          </span>
        </motion.h2>
        <motion.img
          initial={{ x: "100vw" }}
          animate={{x: 0}}
          src={profile}
          alt="profile"
          className="w-12 rounded-xl object-cover object-top"
        />
      </nav>
    </div>
  );
};

export default Navbar;
