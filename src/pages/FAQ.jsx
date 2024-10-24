import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadingReuse from "../reuse/HeadingReuse";
import { getDatabase, push, ref, set } from "firebase/database";
import { toast } from "react-toastify";
import { DNA } from "react-loader-spinner";

const FAQ = () => {
  let [userName, setUserName] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  let [loader, setLoader] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    let db = getDatabase();
    setLoader(true);

    if (userName === "") {
      toast.error("Please write name*");
      setLoader(false);
    } else if (subject === "") {
      toast.error("Please write subject");
      setLoader(false);
    } else if (message === "") {
      toast.error("Please write a Question");
      setLoader(false);
    } else {
      setLoader(false);
      set(push(ref(db, "userQuestion")), {
        UserName: userName,
        Subject: subject,
        Question: message,
      })
        .then(() => {
          toast.success("Question sent successfull!");
          setLoader(false);
          setUserName("")
          setSubject("")
          setMessage("")
        })
        .catch((error) => {
          toast.error("Question isn't sent.");
          setLoader(false);
        });
    }
  };

  return (
    <>
      <HeadingReuse heading="FAQs" toLink="/" toPage="Home" fromPage="FAQs" />
      <section id="faqSection">
        <div className="container mx-auto p-[10px]">
          <div className="md:flex justify-between">
            <div className="w-[48%]">
              <h3 className="text-[25px] text-[#1D3178] mb-[15px] font-bold">
                Generel Information
              </h3>
              <div className="">
                <div className="">
                  <h4 className="font-semibold text-[#1D3178] mb-[6px]">
                    Eu dictumst cum at sed euismood condimentum?
                  </h4>
                  <p className="text-[#A1ABCC] mb-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="">
                  <h4 className="font-semibold text-[#1D3178] mb-[6px]">
                    Magna bibendum est fermentum eros?
                  </h4>
                  <p className="text-[#A1ABCC] mb-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="">
                  <h4 className="font-semibold text-[#1D3178] mb-[6px]">
                    Odio muskana hak eris conseekin sceleton?
                  </h4>
                  <p className="text-[#A1ABCC] mb-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
                <div className="">
                  <h4 className="font-semibold text-[#1D3178] mb-[6px]">
                    Elit id blandit sabara boi velit gua mara?
                  </h4>
                  <p className="text-[#A1ABCC] mb-[50px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[48%]">
              <div className="bg-[#F8F8FD] p-[15px] rounded-[5px]">
                <h3 className="text-[22px] text-[#1D3178] font-bold mb-[30px]">
                  Ask a question
                </h3>
                <input
                  value={userName}
                  onChange={handleUserName}
                  type="text"
                  placeholder="Your Name*"
                  className="border rounded-[5px] p-[5px] w-full mb-[20px] outline-none"
                  required
                />
                <input
                  value={subject}
                  onChange={handleSubject}
                  type="text"
                  placeholder="Your Subject*"
                  className="border rounded-[5px] p-[5px] w-full mb-[20px] outline-none"
                  required
                />
                <textarea
                  value={message}
                  onChange={handleMessage}
                  rows={5}
                  placeholder="Write your message*"
                  className="border rounded-[5px] p-[5px] w-full mb-[30px] outline-none"
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
                    className="bg-pink-600 text-white outline-none rounded-[5px] px-[35px] py-[7px] mb-[20px]"
                    onClick={handleSend}
                  >
                    Send
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
