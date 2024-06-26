import React, { useState } from "react";
import Navbar from "./Navbar";
import "@/styles/globals.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function AboutMe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true);

    // Simulated email send operation
    setTimeout(() => {
      window.location.href = `mailto:info@cakwebsolutions.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=Hallo, mein Name ist ${encodeURIComponent(
        formData.name
      )}. ${encodeURIComponent(formData.message)} (${encodeURIComponent(
        formData.email
      )})`;
      reset();
      setIsSubmitting(false);
    }, 2000);
  };
  return (
    <div className="w-screen lg:h-screen bg-white overflow-auto">
      <Navbar />
      <div className="flex lg:flex-row flex-col">
        <div className="bg-[#F4F4F2] lg:w-[700px] w-screen lg:h-auto h-[400px] flex items-center justify-center">
          <img
            src="/aboutMe.png"
            alt="Joan Popli"
            className="lg:w-[450px] lg:h-[493px] lg:ml-[80px] lg:-mt-12 md:mt-6 w-[300px] h-[340px] lg:hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col lg:w-[900px]  justify-center">
          <div className="flex flex-col space-y-4 lg:py-12 py-6 md:py-8 px-6 md:px-16 lg:px-16">
            <h1 className="font-bold font-jacques text-3xl text-black opacity-60">
              Joan Popli
            </h1>
            <p className="font-jacques text-black text-sm opacity-60 text-wrap">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              repudiandae iusto et, ex odit, nulla distinctio iste quisquam sit
              non delectus suscipit voluptates a nobis quos repellat officiis
              debitis tempore. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Numquam, rem. Veniam perspiciatis voluptatum,
              reiciendis iure animi dolorem vitae fugit praesentium. Corrupti
              aliquam blanditiis iusto harum a fuga animi eligendi alias. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nulla
              unde quis! Mollitia dolorum temporibus sint ea ipsam eligendi
              facere architecto maiores consequatur blanditiis quod aspernatur
              quidem, sed consequuntur accusamus!
            </p>
            <div className="flex lg:flex-row md:flex-row flex-col items-start justify-center space-y-6 py-4 lg:items-center lg:space-x-12 md:space-x-12 md:py-4 lg:py-4">
              <div className="flex flex-row items-center justify-center gap-2 mt-6 cursor-pointer hover:scale-105 transition-all duration-300">
                <img
                  src="/instagram.png"
                  alt="Instagram Icon"
                  className="w-8 h-8"
                />
                <h1 className="font-jacques text-black opacity-60">
                  @joanpopli
                </h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300">
                <img
                  src="/linkedin.png"
                  alt="LinkedIn Icon"
                  className="w-8 h-8"
                />
                <h1 className="font-jacques text-black opacity-60">
                  @joanpopli
                </h1>
              </div>
              <div className="flex flex-row justify-center items-center lg:gap-4 gap-2 cursor-pointer hover:scale-105 transition-all duration-300">
                <img src="/mail.png" alt="Mail Icon" className="w-8 h-6" />
                <h1 className="font-jacques text-black opacity-60">
                  joanpopli@gmail.com
                </h1>
              </div>
            </div>
            <h1 className="lg:text-center md:text-center text-start font-jacques py-8 sm:py-4 text-black opacity-60 text-2xl">
              Contact Me Here!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex lg:px-4 flex-col items-center justify-center lg:pb-0 pb-8 space-y-8 lg:w-auto lg:mx-auto"
            >
              <div className="flex space-x-2">
                <input
                  {...register("name", { required: "*The name is Missing" })}
                  placeholder={errors.name ? errors.name.message : "Full Name"}
                  className={`text-black placeholder:text-black placeholder:opacity-60 px-4 outline-none font-jacques h-[40px] w-[170px] md:w-[250px] lg:w-[300px] placeholder:font-jacques bg-white shadow-custom ${
                    errors.name ? "text-black opacity-60 font-jacques" : ""
                  }`}
                  type="text"
                />

                <input
                  {...register("email", {
                    required: "*The Email is missing", // Displayed if the field is empty
                    pattern: {
                      value: /^\S+@\S+$/i, // Regex for basic email validation
                      message: "Falscher Emailformat", // Displayed if the regex does not match
                    },
                  })}
                  placeholder={
                    errors.email ? (errors.email.message as string) : "Email"
                  }
                  className={`text-black placeholder:text-black placeholder:opacity-60 px-4 outline-none font-jacques h-[40px] w-[170px] md:w-[250px] lg:w-[300px] placeholder:font-jacques bg-white shadow-custom ${
                    errors.email ? "text-black opacity-60 font-jacques" : ""
                  }`}
                  type="email"
                />
              </div>
              <input
                {...register("subject", {
                  required: "*The Subject is missing",
                })}
                placeholder={
                  errors.subject ? errors.subject.message : "Subject"
                }
                className={`text-black placeholder:text-black px-4 placeholder:opacity-60 font-jacques outline-none w-[350px] md:w-[510px] lg:w-full h-[40px] placeholder:font-jacques bg-white shadow-custom ${
                  errors.subject ? "text-black opacity-60  font-jacques" : ""
                }`}
                type="text"
              />
              <textarea
                {...register("message", {
                  required: "*The Message is missing",
                })}
                placeholder={
                  errors.message ? errors.message.message : "Message"
                }
                className={`text-black placeholder:text-black placeholder:opacity-60 shadow-custom px-4 py-2 font-jacques w-[350px] md:w-[510px] h-[100px] lg:w-full outline-none placeholder:font-jacques resize-none bg-white shadow-custom${
                  errors.message ? "text-black opacity-60 font-jacques" : ""
                }`}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className={`bg-[#F4F4F2] text-xl font-typewriter   w-40 h-12 ${
                    isSubmitting
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-[#EAEAEA] hover:duration-500 "
                  } rounded-[34px] shadow-custom text-black font-bold font-jacques transition-all duration-300 hover:scale-105`}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
