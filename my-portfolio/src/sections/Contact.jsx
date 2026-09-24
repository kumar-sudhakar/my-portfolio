import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ParticlesBackground from "../components/ParticlesBackground";
import astra from "../assets/astra.png";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

console.log("Service ID:", serviceId);
console.log("Template ID:", templateId);
console.log("Public Key:", publicKey);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow digits in the budget field
    if (name === "budget" && value && !/^\d+$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};

    required.forEach((f) => {
      if (!formData[f].trim()) {
        newErrors[f] = "Fill this field";
      }
    });

    if (formData.service !== "Other" && !formData.budget.trim()) {
      newErrors.budget = "Fill this field";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("1. Submit clicked");

    if (!validateForm()) {
      console.log("2. Validation failed");
      return;
    }

    console.log("3. Validation passed");
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);
    console.log("Form Data:", formData);

    setStatus("sending");

    try {
      console.log("4. Calling EmailJS...");

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          idea: formData.idea,
          from_name: formData.name,
          reply_to: formData.email,
        },
        publicKey
      );

      console.log("5. EMAIL SENT SUCCESSFULLY");
      console.log("EmailJS Response:", response);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });

      setErrors({});
    } catch (err) {
      console.log("6. EMAILJS FAILED");
      console.log("Error object:", err);
      console.log("Error status:", err?.status);
      console.log("Error text:", err?.text);
      console.log("Error message:", err?.message);

      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Animated Floating Astronaut */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={astra}
            alt="Contact Astronaut"
            className="w-72 md:w-[450px] rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Let's work together
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.email ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col">
              <label className="mb-1">
                Service Needed <span className="text-red-500">*</span>
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.service ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              >
                <option value="" disabled className="text-black">
                  Something in mind?
                </option>

                <option
                  value="Web Development"
                  className="text-black"
                >
                  Web Development
                </option>

                <option
                  value="Mobile Application"
                  className="text-black"
                >
                  Mobile Application
                </option>

                <option value="Other" className="text-black">
                  Other
                </option>
              </select>

              {errors.service && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.service}
                </p>
              )}
            </div>

            {/* Budget Field (Conditional) */}
            {formData.service && formData.service !== "Other" && (
              <div className="flex flex-col">
                <label className="mb-1">
                  Budget <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="budget"
                  placeholder="Your Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${
                    errors.budget
                      ? "border-red-500"
                      : "border-gray-500"
                  } text-white focus:outline-none focus:border-blue-500`}
                />

                {errors.budget && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.budget}
                  </p>
                )}
              </div>
            )}

            {/* Idea / Message Field */}
            <div className="flex flex-col">
              <label className="mb-1">
                Explain your idea <span className="text-red-500">*</span>
              </label>

              <textarea
                name="idea"
                rows={5}
                placeholder="Enter your idea"
                value={formData.idea}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.idea ? "border-red-500" : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.idea && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.idea}
                </p>
              )}
            </div>

            {/* Status Message */}
            {status && (
              <p
                className={`text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending" && "Sending..."}

                {status === "success" &&
                  "Message sent successfully! ✅"}

                {status === "error" &&
                  "Something went wrong! ❌"}
              </p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
