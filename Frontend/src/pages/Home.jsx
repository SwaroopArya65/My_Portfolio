import Header from "../components/Header/Header";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Header />

      <motion.main
        className="pt-28"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Home page sections */}
        <section className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-heading">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-body">
            Building modern, fast, and scalable web applications.
          </p>
        </section>
      </motion.main>
    </>
  );
};

export default Home;