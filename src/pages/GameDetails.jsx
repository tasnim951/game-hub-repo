import React from "react";
import { useParams, useNavigate } from "react-router";
import gamesdata from "../data/gamesdata";

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = gamesdata.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="btn bg-pink-600 hover:bg-pink-700 border-none text-white"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* LEFT — Game Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="object-cover w-full h-full lg:h-[550px]"
          />
        </div>

        {/* RIGHT — Game Info */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-pink-500 mb-4">
            {game.title}
          </h1>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {game.description}
          </p>

          <div className="space-y-3 mb-8">
            <p>
              <span className="font-semibold text-white">Category: </span>
              <span className="text-gray-400">{game.category}</span>
            </p>
            <p>
              <span className="font-semibold text-white">Developer: </span>
              <span className="text-gray-400">{game.developer}</span>
            </p>
            <p>
              <span className="font-semibold text-white">Rating: </span>
              <span className="text-gray-400">{game.ratings}</span>
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-pink-600 hover:bg-pink-700 border-none text-white text-lg px-6"
            >
              Play / Download
            </a>
            <button
              onClick={() => navigate(-1)}
              className="btn bg-gray-700 hover:bg-gray-800 border-none text-white text-lg px-6"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
