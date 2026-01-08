import React from "react";
import ComponentHead from "./ComponentHead";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaRegPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { minLength } from "zod";

let Heading = "Get In Touch";
let paragraph =
  "Have a project in mind or want to collaborate? Feel free to reach out!";

let getIntouchCard = [
  {
    cardIcon: MdOutlineMail,
    cardHead: "Email",
    cardDescription: "ShubhamSaini@gmail.com",
  },

  {
    cardIcon: CiLocationOn,
    cardHead: "Location",
    cardDescription: "India",
  },
];

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset()
  }

  return (
    <div className="flex flex-col gap-10 w-full pt-30 items-center">
      <ComponentHead HeadContent={Heading} ParaContent={paragraph} />

      <div className="flex flex-col md:flex-row  p-4 items-center justify-between gap-20 [w-90%]">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-white font-bold ">
            Let's work together
          </h3>
          <p className="text-gray-400 text-lg font-light ">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {getIntouchCard.map((card,i) => {
            return (
              <motion.div key={i}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className=" shadow-sm shadow-black p-4 rounded-xl border border-gray-900 flex gap-3 items-center "
              >
                <div className="bg-[#222] rounded-lg   hover:border w-fit cursor-pointer border border-transparent  hover:border-yellow-100 hover:rounded-md hover:scale-105 hover:translate-z-10  transition duration-300">
                  {<card.cardIcon className="p-1 text-gray-300  text-4xl" />}
                </div>

                <div>
                  <p className=" font-medium  text-white">{card.cardHead}</p>
                  <p className="text-gray-400">{card.cardDescription}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full md:w-[50%] shadow-sm shadow-black border border-gray-950 p-5 rounded-lg  text-white "
        >
          <div className="flex flex-col items-start gap-2 ">
            <label className="text-lg font-medium  " htmlFor="name">
              Name
            </label>

            <input
              type="text"
              className="w-full outline-0 p-3 shadow-sm shadow-black rounded-xl border text-gray-400 border-gray-900 "
              {...register("name", { required: true })}
              placeholder="Enter your name here"
            />

            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2 ">
            <label className="text-lg font-medium  " htmlFor="email">
              Email
            </label>

            <input
              type="email"
              className="w-full outline-0 p-3 shadow-sm shadow-black rounded-xl border text-gray-400  border-gray-900 "
              {...register("email", { required:"Email is required",pattern:{
                value:/^\S+@\S+\.\S+$/,
                message:"Enter your valid email"
              } })}
              placeholder="Your@email.com"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-2 ">
            <label className="text-lg font-medium  " htmlFor="Description">
              Message
            </label>

            <textarea
              type="text"
              className="w-full outline-0 p-3 shadow-sm shadow-black rounded-xl border text-gray-400 border-gray-900 "
              {...register("Description", { required: true ,minLength:{value:10 , message:"Message must be at least 10 chracters"}}   )}
              rows={4}
              placeholder="Tell me about your project"
            />

            {errors.Description && (
              <p className="text-red-500 text-sm">Message must be at least 10 chracters</p>
            )}
          </div>

          <button
            type="submit"
            disabled = {isSubmitting}
            className="flex items-center gap-2 justify-center self-center bg-white text-black w-56 py-1.5 rounded-lg text-md font-medium cursor-pointer hover:bg-blue-500 hover:text-white transition duration-500 active:scale-75"
          >
            <FaRegPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
