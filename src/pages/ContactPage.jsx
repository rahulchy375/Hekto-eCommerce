import React, { useEffect, useRef, useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import contactImg from "/images/ContactImg.png";
import { useSelector } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import { DNA } from "react-loader-spinner";
import { toast } from "react-toastify";

const ContactPage = () => {
  let loginData = useSelector((state) => state.login.value);
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  let [loader, setLoader] = useState(false);
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const db = getDatabase();
    setLoader(true);
    setUserName("");
    setEmail("");
    setMessage("");
    setSubject("");

    if (userName === "") {
      toast.error("Please Enter Your Name.")
      setLoader(false);
    } else if (subject === "") {
      toast.error("Please Enter Your Subject")
      setLoader(false);
    } else if (email === "") {
      toast.error("Please Enter Email")
      setLoader(false);
    } else if (message === "") {
      toast.error("Please Enter Your Message")
      setLoader(false);
    } else if (loginData) {
      set(ref(db, "UserMessages/" + loginData.user.uid), {
        userName: userName,
        email: email,
        subject: subject,
        message: message,
      });
      setLoader(false);
      toast.success("Message sent successfully!");
    } else {
      toast.error("Login data isn't found");
      setLoader(false);
    }
  };

    

  return (
    <>
      <HeadingReuse
        heading="Contact Us"
        toLink="/"
        toPage="Home"
        fromPage="Contact"
      />

      <section id="contactSection">
        <div className="container mx-auto p-[10px]">
          <div className="sm:flex justify-between">
            <div className="sm:w-[48%]">
              <h2 className="text-[20px] lg:text-[25px] lg:mb-[20px] font-bold text-[#151875]">
                Information About us
              </h2>
              <p className="text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <div className="flex gap-[5px] mt-[10px] lg:my-[15px]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#5625DF]"></div>
                <div className="w-[15px] h-[15px] rounded-full bg-[#FF27B7]"></div>
                <div className="w-[15px] h-[15px] rounded-full bg-[#37DAF3]"></div>
              </div>
            </div>
            <div className="mt-[20px] sm:mt-0 sm:w-[48%]">
              <h2 className="text-[20px] lg:text-[25px] lg:mb-[20px] font-bold text-[#151875]">
                Contact Way
              </h2>
              <div className="lg:flex justify-between">
                <div className="">
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="w-[30px] h-[30px] bg-[#5625DF] rounded-full"></div>
                    <div className="">
                      <p className="text-[#8A8FB9]">Tel: (+880)1884805902</p>
                      <p className="text-[#8A8FB9]">
                        E-mail: rahulchy375@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="w-[30px] h-[30px] bg-[#FF27B7] rounded-full"></div>
                    <div className="">
                      <p className="text-[#8A8FB9]">Support Forum</p>
                      <p className="text-[#8A8FB9]">For over 24hr</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="w-[30px] h-[30px] bg-[#FFB265] rounded-full"></div>
                    <div className="">
                      <p className="text-[#8A8FB9]">20 Margaret st, London</p>
                      <p className="text-[#8A8FB9]">Great britain, 3NM98-LK</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="w-[30px] h-[30px] bg-[#1BE982] rounded-full"></div>
                    <div className="">
                      <p className="text-[#8A8FB9]">Free standard shipping</p>
                      <p className="text-[#8A8FB9]">on all orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="order-2 md:order-1 md:w-[48%]">
              <h2 className="text-[20px] lg:text-[25px] lg:mt-[15px] lg:mb-[20px] font-bold text-[#151875]">
                Get In Touch
              </h2>
              <p className="text-[#8A8FB9] lg:mb-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>
              <div className="mt-[20px]">
                <div className="lg:flex gap-[15px]">
                  <input
                    value={userName}
                    onChange={handleUserName}
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="border rounded-[5px] p-[5px] w-full mb-[20px] outline-none"
                  />
                  <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    placeholder="Your email*"
                    required
                    className="border rounded-[5px] p-[5px] w-full mb-[20px] outline-none"
                  />
                </div>
                <input
                  value={subject}
                  onChange={handleSubject}
                  type="text"
                  placeholder="Your Subject*"
                  required
                  className="border rounded-[5px] p-[5px] w-full mb-[20px] outline-none"
                />
                <textarea
                  value={message}
                  onChange={handleMessage}
                  rows={5}
                  placeholder="Write your message*"
                  required
                  className="border rounded-[5px] p-[5px] w-full mb-[20px] outline-none"
                ></textarea>
                {loader === true ? (
                  <div className="">
                    <DNA
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    />
                  </div>
                ) : (
                  <button
                    className="bg-[#FB2E86] text-white outline-none lg:mt-[30px] rounded-[5px] px-[35px] py-[7px] mb-[20px]"
                    onClick={handleSendMessage}
                  >
                    Send Mail
                  </button>
                )}
              </div>
            </div>
            <div className="order-1 md:order-2 md:w-[48%] sm:flex justify-center items-center">
              <img
                src={contactImg}
                alt=""
                className="sm:w-[70%] md:w-full lg:w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
