import React, { useEffect } from "react";
import gamesdata from "../data/gamesdata";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "GameHub | Home";
  }, []);

  const popularGames = [...gamesdata].sort((a, b) => b.ratings - a.ratings);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <motion.section
          className="hero bg-gray-900 rounded-lg p-8 mb-12 shadow-xl flex flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              className="text-5xl font-bold mb-4 text-pink-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to GameHub
            </motion.h1>
            <motion.p
              className="mb-6 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Your ultimate destination for all things gaming. Discover, play, and share your favorite games!
            </motion.p>
            <motion.button
              onClick={() => navigate("/showcase")}
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Game Showcase
            </motion.button>
          </div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
              alt="Gaming"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.section>

        {/* Carousel Section */}
        <motion.section
          className="w-full mt-10 mb-12 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="carousel w-full h-80">
            {[
              "https://images.unsplash.com/photo-1723360480597-d21deccaf3d0?auto=format&fit=crop&w=1332&q=80",
              "https://images.unsplash.com/photo-1638625303600-9f3e7cc103b4?auto=format&fit=crop&w=1332&q=80",
              "https://images.unsplash.com/photo-1677722016462-c1c367f02a40?auto=format&fit=crop&w=1171&q=80"
            ].map((src, index) => (
              <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-full">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? 3 : index}`} className="btn btn-circle bg-gray-800 text-white border-none">❮</a>
                  <a href={`#slide${index === 2 ? 1 : index + 2}`} className="btn btn-circle bg-gray-800 text-white border-none">❯</a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Popular Games Section */}
       <section className="mt-16">
  <motion.h2
    className="text-3xl font-semibold mb-6 text-center text-pink-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    Popular Games
  </motion.h2>

  {/* Only show first 8 games */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {gamesdata.slice(0, 8).map((game, idx) => (
      <GameCard key={game.id} game={game} index={idx} />
    ))}
  </div>

  {/* SHOW ALL BUTTON */}
  <div className="text-center mt-8">
    <button
      onClick={() => navigate("/all-items")}
      className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded text-white"
    >
      Show All Games
    </button>
  </div>
</section>


        {/* Join Community Section */}
        <motion.section
          className="bg-gray-900 mt-16 py-10 rounded-lg text-center shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4 text-pink-500">Join Our Community</h2>
          <p className="mb-6 text-gray-300">
            Be part of the GameHub family! Get exclusive access to game news and updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:flex-1 bg-black text-white border-gray-600"
            />
            <motion.button
              className="btn bg-pink-600 hover:bg-pink-700 border-none text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Home;
