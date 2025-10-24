import React from "react";
import gamesdata from "../data/gamesdata";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate(); // ✅ Added navigate

  // Sort games by rating descending for Popular Games
  const popularGames = [...gamesdata].sort((a, b) => b.ratings - a.ratings).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-10">

        {/* Hero Section */}
        <section className="hero bg-gray-900 rounded-lg p-8 mb-12 shadow-xl flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4 text-pink-500">
              Welcome to GameHub
            </h1>
            <p className="mb-6 text-lg text-gray-300">
              Your ultimate destination for all things gaming. Discover, play, and share your favorite games!
            </p>
            <button
              onClick={() => navigate("/showcase")} // ✅ Using navigate
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded"
            >
              Game Showcase
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
              alt="Gaming"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Banner Slider */}
        <section className="w-full mt-10 mb-12 rounded-lg overflow-hidden">
          <div className="carousel w-full h-80">
            {[
              "https://images.unsplash.com/photo-1723360480597-d21deccaf3d0?auto=format&fit=crop&w=1332&q=80",
              "https://images.unsplash.com/photo-1638625303600-9f3e7cc103b4?auto=format&fit=crop&w=1332&q=80",
              "https://images.unsplash.com/photo-1677722016462-c1c367f02a40?auto=format&fit=crop&w=1171&q=80"
            ].map((src, index) => (
              <div
                key={index}
                id={`slide${index + 1}`}
                className="carousel-item relative w-full h-full"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? 3 : index}`} className="btn btn-circle bg-gray-800 text-white border-none">❮</a>
                  <a href={`#slide${index === 2 ? 1 : index + 2}`} className="btn btn-circle bg-gray-800 text-white border-none">❯</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Games Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-pink-500">
            Popular Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {popularGames.map((game) => (
              <div
                key={game.id}
                className="card bg-gray-900 text-white shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => navigate(`/games/${game.id}`)} // ✅ Updated to use navigate
              >
                <figure>
                  <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="rounded-t-lg object-cover h-48 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-pink-400">{game.title}</h3>
                  <p className="text-gray-400">{game.category}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400 mr-2">⭐ {game.ratings}</span>
                    <span className="text-gray-400 text-sm">by {game.developer}</span>
                  </div>
                  <div className="card-actions justify-end mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent parent onClick
                        navigate(`/games/${game.id}`);
                      }}
                      className="btn btn-sm bg-pink-600 hover:bg-pink-700 border-none text-white"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-gray-900 mt-16 py-10 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-pink-500">
            Join Our Community
          </h2>
          <p className="mb-6 text-gray-300">
            Be part of the GameHub family! Get exclusive access to game news and updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:flex-1 bg-black text-white border-gray-600"
            />
            <button className="btn bg-pink-600 hover:bg-pink-700 border-none text-white">
              Join Now
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
