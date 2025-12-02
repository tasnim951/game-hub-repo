import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GameCard = ({ game, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="
        bg-[#111] border border-gray-800 rounded-xl overflow-hidden 
        shadow-lg hover:shadow-pink-500/20 
        hover:-translate-y-2 transition-all duration-300
        flex flex-col
      "
    >
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-full object-cover rounded-t-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-bold text-pink-500 mb-2">
          {game.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-300 text-sm line-clamp-3 mb-4">
          {game.shortDescription}
        </p>

        {/* See More Button */}
        <motion.button
          onClick={() => navigate(`/games/${game.id}`)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-auto w-full py-2 
            bg-pink-600 hover:bg-pink-700 
            text-white rounded-lg text-sm 
            transition-all duration-300
          "
        >
          See More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameCard;
