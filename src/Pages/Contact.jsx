import React, { useEffect } from "react";
import { Share2 } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Connect With Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          I’m always open to connecting. Follow or message me on the platforms below!
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
        id="Contact"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="w-full max-w-3xl bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 text-center transform transition-all duration-300 hover:shadow-[#6366f1]/10"
        >
          <div className="flex flex-col items-center justify-center">
            <Share2 className="w-10 h-10 text-[#6366f1] opacity-50 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Whether you have a question, opportunity, or just want to say hi, feel free to reach out through my socials.
            </p>
            <div className="flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
