import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Support = () => {
  useEffect(() => {
    document.title = "GameHub | Support";
  }, []);

  const supportOptions = [
    {
      title: "FAQ",
      description: "Find answers to the most common questions about GameHub.",
      icon: "❓",
    },
    {
      title: "Technical Support",
      description: "Facing issues with your account or gameplay? We’re here to help.",
      icon: "🛠️",
    },
    {
      title: "Community Help",
      description: "Join our forum and get help from fellow gamers.",
      icon: "👥",
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
        <h1 className="text-4xl font-bold text-pink-500 mb-4">Support Center</h1>
        <p className="text-gray-300 text-lg">
          Need help? Find answers, connect with our support team, or get assistance from the community.
        </p>
      </motion.div>

      {/* Support Options */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {supportOptions.map((option, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4">{option.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-pink-500">{option.title}</h3>
            <p className="text-gray-300">{option.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional Support Form */}
      <motion.div
        className="max-w-3xl mx-auto mt-16 bg-gray-900 rounded-xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-pink-500 mb-4 text-center">
          Submit a Support Request
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 transition"
          />
          <textarea
            placeholder="Describe your issue"
            rows={5}
            className="bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 transition resize-none"
          />
          <motion.button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded mt-2 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Support;
