import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = "GameHub | Contact";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email!");
      return;
    }

    alert(`Thanks for reaching out, ${name}! We'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">
     
      <div className="hidden md:block absolute left-10 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-cover bg-center rounded-lg shadow-lg"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=800&q=80')" }}
      ></div>

    
      <motion.div
        className="bg-gray-900 rounded-xl shadow-xl w-full max-w-lg p-10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-400 mb-6 text-center">
          Have questions or suggestions? Fill out the form below and we’ll get back to you shortly.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-800  border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-800   border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            className="bg-gray-800  border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 transition resize-none"
          />
          <motion.button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded mt-2 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
