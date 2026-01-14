import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../../assets/favicon.png';

const TopBar = () => {
  return (
    <motion.nav
      className="bg-neutral-primary"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mx-auto max-w-7xl p-4 py-2">
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-md text-heading">
            AryaSwaroop
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/signin" className="text-sm font-medium text-fg-brand">
            SignUp
          </Link>
          <Link to="/signin" className="text-sm font-medium text-fg-brand">
            SignIn
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default TopBar;