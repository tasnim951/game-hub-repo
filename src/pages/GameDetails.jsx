import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import gamesdata from "../data/gamesdata";

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = gamesdata.find((g) => g.id === id);

  useEffect(() => {
    if (game) {
      document.title = `GameHub | ${game.title}`;
    } else {
      document.title = "GameHub | Game Not Found";
    }
  }, [game]);

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
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row gap-8">
        
        {/* Image */}
        <div className="lg:w-1/2 w-full h-96 lg:h-auto">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Game Info */}
        <div className="lg:w-1/2 w-full flex flex-col justify-between p-6">
          <div>
            <h1 className="text-4xl font-extrabold text-pink-500 mb-4">{game.title}</h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{game.fullDescription}</p>

            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold text-white">Category:</span> {game.category}
              </p>
              <p>
                <span className="font-semibold text-white">Developer:</span> {game.developer}
              </p>
              <p>
                <span className="font-semibold text-white">Rating:</span> {game.ratings}
              </p>
              {game.releaseYear && (
                <p>
                  <span className="font-semibold text-white">Release Year:</span> {game.releaseYear}
                </p>
              )}
              {game.platforms && (
                <p>
                  <span className="font-semibold text-white">Platforms:</span> {game.platforms.join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 flex-wrap mt-6">
            {game.downloadLink && (
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-pink-600 hover:bg-pink-700 border-none text-white text-lg px-6"
              >
                Play / Download
              </a>
            )}
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
