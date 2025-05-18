import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
    email: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch(`${URL}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResponseMsg(data.message || "Message sent successfully");
      setFormData({
        firstName: "",
        lastName: "",
        subject: "",
        message: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      setResponseMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex justify-center items-center w-full flex-col bg-white pb-10">
      <div className="flex justify-center items-center w-full h-full flex-col gap-10 py-10">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold md:text-5xl text-3xl">Contact</h1>
          <div className="flex items-center justify-center mt-5">
            <div className="relative flex justify-center items-center">
              <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
              <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
              <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
              <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:p-10 p-5 gap-10 md:py-20 2xl:w-5/6">
            <div className="h-full flex flex-col justify-start items-start rounded-xl gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold ">
                  We would love to hear from you!
                </h2>
                <p className="text-gray-600 lg:w-3/4 md:text-base text-sm">
                  Thank you for considering CrossContinents Traders Ltd. We
                  value your inquiries, feedback, and the opportunity to assist
                  you. Feel free to reach out to us through the following
                  channels:
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-BgGolden text-white shadow-lg border border-BgGolden p-3 rounded-full">
                    <FiPhone className="text-2xl -rotate-90" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-semibold">Call us</span>
                    <p className="text-xl font-bold">+1 (437) 606-3251</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-BgGolden text-white shadow-lg border border-BgGolden p-3 rounded-full">
                    <MdOutlineMail className="text-2xl" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-semibold">Email</span>
                    <p className="text-xl font-bold">info@cctraders.ca</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 shadow-2xl bg-BgColor border-BgGolden border-2 rounded-xl lg:p-10 p-5"
            >
              <div className="pb-5">
                <h1 className="font-semibold text-4xl">Write to us</h1>
                <p className="mt-5">Send us a message</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="border p-3 rounded-lg bg-white">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full outline-none bg-transparent"
                    />
                  </div>
                  <div className="border p-3 rounded-lg bg-white">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="border p-3 rounded-lg bg-white">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@gmail.com"
                    className="w-full outline-none bg-transparent"
                  />
                </div>

                <div className="border p-3 rounded-lg bg-white">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full outline-none bg-transparent"
                  />
                </div>

                <div className="border p-3 rounded-lg bg-white">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full outline-none bg-transparent"
                  ></textarea>
                </div>

                <div className="p-3 rounded-lg bg-BgGolden text-white font-bold text-center text-lg">
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {responseMsg && (
                  <p className="text-sm mt-2 text-center text-red-700 font-semibold">
                    {responseMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
