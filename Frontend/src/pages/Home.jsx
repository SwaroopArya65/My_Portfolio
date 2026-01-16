import Header from "../components/Header/Header";
import { motion } from "framer-motion";
import Hero from "../components/Hero";

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
        <main className="max-w-7xl mx-auto px-4">
          <Hero/>
        </main>
      </motion.main>
    </>
  );
};

export default Home;