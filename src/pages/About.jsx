import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "GameHub | About Us";
  }, []);

  const images = [
    {
      src: "https://play-lh.googleusercontent.com/zviFGW2hDHh5qrnBvDGx05dhryz62Vx7xY5rbUlSHbCHifHXnXrAHB93qecr42IIBfk=w526-h296-rw",
      alt: "Gaming Setup",
      caption: "Explore the latest games in our library",
    },
    {
      src: "https://img.freepik.com/free-photo/group-multiracial-teens-playing-video-games-video-game-club-with-blue-red-illumination-excited-because-victory_1268-24592.jpg?semt=ais_incoming&w=740&q=80",
      alt: "Community",
      caption: "Connect with thousands of gamers worldwide",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/96/92/869/game-games-2014-best-wallpaper-preview.jpg",
      alt: "Game Collection",
      caption: "Track and organize your favorite games",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-pink-500 mb-4">About GameHub</h1>
        <p className="text-gray-300 text-lg">
          GameHub is your ultimate platform for discovering, tracking, and sharing games.
          Join our community of passionate gamers and explore the gaming universe!
        </p>
      </motion.div>

      {/* Images Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover"
            />
            <p className="p-4 text-gray-300 text-center">{img.caption}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
