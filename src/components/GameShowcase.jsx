import React from "react";
import { motion } from "framer-motion";

const Showcase = () => {
  const features = [
      //  collected from AI
    {
      title: "🎮 Latest Releases",
      description: "Discover the newest games released this month. Stay ahead in the gaming world!",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "🕹️ Trending Genres",
      description: "Action, RPG, Indie… explore what’s hot among gamers right now.",
      color: "from-green-400 to-blue-500",
    },
    {
      title: "⭐ Top Developers",
      description: "Meet the creators behind the most loved games in the industry.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "🔥 Gaming Tips",
      description: "Pro tips and tricks to level up your gameplay in every game.",
      color: "from-red-400 to-pink-600",
    },
  ];

      return (
   
   <div className="min-h-screen bg-black text-white px-4 py-12">
  
     
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 text-pink-500"
        >
          Explore the World of Games
        </motion.h1>
       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 text-lg"
        >
          Dive into game universes, latest releases, trending genres, and tips from top developers!
        </motion.p>
      </section>

      
      <section className="grid gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
         
         <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`p-6 rounded-xl bg-gradient-to-r ${feature.color} shadow-xl cursor-pointer`}
          >
            <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-100">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      
     
    </div>
  );
};

export default Showcase;
