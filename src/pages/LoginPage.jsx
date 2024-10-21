import React, { useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { DNA } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { userData } from "../slice/userDataSlice";
import { loginData } from "../slice/loginSlice";

const LoginPage = () => {
  let [loader, setLoader] = useState(false);
  let dispatch = useDispatch();
  let [showPass, setShowPass] = useState(false);
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const auth = getAuth();
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    setLoader(true);
    if (!email) {
      toast.error("Please Enter Email");
      setLoader(false);
    } else if (!password) {
      toast.error("Please Enter Password");
      setLoader(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified === true) {
            console.log(userCredential);
            toast.success("Login Successful!");
            setLoader(false);
            dispatch(loginData(userCredential))
            localStorage.setItem("hektoLoginData", JSON.stringify(userCredential))
            navigate("/");

            const dbRef = ref(getDatabase());
            get(child(dbRef, `allUsers/${userCredential.user.uid}`))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  console.log(snapshot.val());
                  dispatch(userData(snapshot.val()));
                  localStorage.setItem(
                    "hektoUserData",
                    JSON.stringify(snapshot.val())
                  );
                } else {
                  console.log("No data available");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            toast.error("Go to mailBox and verify the mail first");
            setLoader(false);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Invalid email and password.")
          setLoader(false);
        });
    }
  };

  return (
    <>
      <HeadingReuse
        heading="My Account"
        toLink="/"
        toPage="Home"
        fromPage="Login"
      />

      <section>
        <div className="container mx-auto p-[10px] flex justify-center items-center">
          <div className="w-[260px] sm:w-[350px] sm:px-[30px] sm:pb-[30px] loginDiv pt-[30px] pb-[15px] rounded-[5px] flex justify-center flex-col items-center px-[10px]">
            <div className="text-center">
              <h2 className="text-[25px] font-bold">Login</h2>
              <p className="text-[12px] mt-[-5px] mb-[15px] text-[#9096B2]">
                Please login using account detail below.
              </p>
            </div>

            <input
              onChange={handleEmail}
              type="email"
              placeholder="Email Address"
              className="border px-[10px] rounded-[3px] py-[5px] w-full outline-none mb-[15px]"
            />

            <div className="relative w-[100%]">
              <input
                onChange={handlePass}
                type={showPass === true ? "text" : "password"}
                placeholder="Password"
                className="border px-[10px] rounded-[3px] py-[5px] w-full outline-none mb-[15px]"
              />

              <div
                className="absolute top-[10px] right-[10px]"
                onClick={handleShowPass}
              >
                {showPass === true ? <MdRemoveRedEye /> : <IoEyeOff />}
              </div>
              <div className="mt-[-10px]">
                <button className="text-[#9096B2] text-[14px]">
                  Forgot your password?
                </button>
              </div>

              {loader ? (
                <div className="flex justify-center items-center">
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
                  onClick={handleLogin}
                  className="outline-none text-white w-full py-[6px] bg-[#FB2E86] rounded-[5px] mt-[15px]"
                >
                  Sign up
                </button>
              )}

              <div className="text-[#9096B2] text-[11px] sm:text-[14px] mt-[25px] text-center">
                {" "}
                <Link to="/signUp">
                  Don't have an Account? <u>Create an account.</u>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
