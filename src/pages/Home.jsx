import React, { useEffect } from "react";
import gamesdata from "../data/gamesdata";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import GameCard from "../components/GameCard";


    // Hero Section
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
     
      <div className="mx-auto py-10 px-2 lg:px-6 max-w-[1400px]">
        
      
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

       {/* Carousel */}
        <motion.section
          className="w-full mt-10 mb-12 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="carousel w-full h-[65vh]">
            {[
              "https://images.unsplash.com/photo-1723360480597-d21deccaf3d0?auto=format&fit=crop&w=1332&q=80",
              "https://images.unsplash.com/photo-1638625303600-9f3e7cc103b4?auto=format&fit=crop&w=1332&q=80",
              "https://images.unsplash.com/photo-1677722016462-c1c367f02a40?auto=format&fit=crop&w=1171&q=80"
            ].map((src, index) => (
              <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-full">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" 
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? 3 : index}`} className="btn btn-circle bg-gray-800 text-white border-none">❮</a>
                  <a href={`#slide${index === 2 ? 1 : index + 2}`} className="btn btn-circle bg-gray-800 text-white border-none">❯</a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Popular Games */}
        <section className="mt-16">
          <motion.h2
            className="text-3xl font-semibold mb-6 text-center text-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Popular Games
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gamesdata.slice(0, 8).map((game, idx) => (
              <GameCard key={game.id} game={game} index={idx} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/all-items")}
              className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded text-white"
            >
              Show All Games
            </button>
          </div>
        </section>


<motion.section
  className="mt-12 h-[70vh] rounded-xl relative overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
 
  <motion.img
    src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    className="absolute w-full h-full object-cover opacity-40"
    initial={{ scale: 1.3 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 1.5 }}
  />

  <div className="absolute inset-0 flex items-center justify-center">
    <motion.h2
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-pink-500"
    >
      Explore the GameHub Universe
    </motion.h2>
  </div>
</motion.section>

{/* Reviews */}
<motion.section
  className="mt-20 bg-gray-900 p-10 rounded-lg shadow-lg"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold text-center text-pink-500 mb-10">
    What Gamers Say...
  </h2>

  <div className="relative overflow-hidden">
    <motion.div
      className="flex gap-6"
      animate={{ x: ["0%", "-50%"] }} 
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear"
      }}
    >
      
      {[...Array(2)].flatMap(() =>
        [
          {
            name: "Alex Chy.",
            text: "GameHub changed how I track my collection — smooth, fast, beautiful UI.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            name: "Joryan Ali.",
            text: "I discover new games weekly. The recommendations are insanely accurate.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            name: "Samiul.",
            text: "The best gaming library app I've used. Period.",
            avatar: "https://randomuser.me/api/portraits/men/76.jpg"
          },
          {
            name: "Tayef Imra.",
            text: "The cloud sync feature keeps my library perfectly organized across devices.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
          },
        ].map((review, i) => (
          <div
            key={i + Math.random()}
            className="min-w-[300px] bg-black rounded-lg shadow-lg p-6 border border-gray-700 hover:border-pink-600 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-pink-600"
              />
              <h4 className="text-pink-400 font-bold">{review.name}</h4>
            </div>
            <p className="text-gray-300 text-sm">{review.text}</p>
          </div>
        ))
      )}
    </motion.div>
  </div>
</motion.section>

<motion.section
  className="bg-gray-800 rounded-lg mt-16 p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-8"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  
  <motion.div
    className="flex-1"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <img
      src="https://images.unsplash.com/photo-1743514240526-dcc36f4e15c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="About Us"
      className="rounded-lg shadow-lg w-full"
    />
  </motion.div>

 
  <motion.div
    className="flex-1 text-center lg:text-left"
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold mb-4 text-pink-500">
      About GameHub
    </h2>
    <p className="text-gray-300 mb-6 text-lg">
      GameHub is your ultimate gaming companion. From indie gems to blockbuster hits,
      we help you discover, track, and share the games you love.
    </p>
    <button
      onClick={() => navigate("/about")}
      className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded"
    >
      Learn More
    </button>
  </motion.div>
</motion.section>

<motion.section
  className="relative mt-16 py-20 flex justify-center items-center overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  
  <div className="absolute top-0 left-0 w-full h-full">
    <img
      src="https://img.freepik.com/premium-photo/pink-black-abstract-arrows-black-background_615096-12475.jpg?semt=ais_hybrid&w=740&q=80"
      alt="Connect Background"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

 
  <motion.div
    className="relative text-center max-w-3xl flex flex-col gap-6 px-4"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-white">
      Let’s Stay Connected
    </h2>
    <p className="text-gray-200 text-lg">
      Have questions, suggestions, or ideas? Reach out and we’ll respond promptly.
      Your feedback helps GameHub grow and improve for every gamer.
    </p>
    <motion.button
      onClick={() => navigate("/contact")}
      className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-xl mt-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Us
    </motion.button>
  </motion.div>
</motion.section>


        {/* Features Section */}
<motion.section
  className="mt-20 bg-gray-900 p-10 rounded-lg shadow-xl"
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  <h2 className="text-3xl font-semibold text-center text-pink-500 mb-10">
    Why Choose GameHub?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Smart Game Library",
        desc: "Organize, track and explore games with advanced filtering."
      },
      {
        title: "Cloud Sync",
        desc: "Save your progress and settings seamlessly across devices."
      },
      {
        title: "Live Updates",
        desc: "Get instant access to trending games & new releases."
      }
    ].map((feat, i) => (
      <motion.div
        key={i}
        className="bg-black p-6 rounded-lg border border-gray-700 hover:border-pink-500 transition"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-bold text-pink-400 mb-2">{feat.title}</h3>
        <p className="text-gray-300">{feat.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>


      </div>
    </div>
  );
};

export default Home;
