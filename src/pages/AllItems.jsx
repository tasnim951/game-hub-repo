import React, { useEffect } from "react";
import gamesdata from "../data/gamesdata"; 
import GameCard from "../components/GameCard"; 
import { motion } from "framer-motion";

const AllItems = () => {
  useEffect(() => {
    document.title = "GameHub | All Games";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center text-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          All Games
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gamesdata.map((game, idx) => (
            <GameCard key={game.id} game={game} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
