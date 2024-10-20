import React, { useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import SignUpReuse from "../reuse/SignUpReuse";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { DNA } from "react-loader-spinner";

const SignUpPage = () => {
  let navigate = useNavigate();
  let [showPassword, setShowPassword] = useState(false);
  let [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let [checked, setChecked] = useState(false);
  let [loader, setLoader] = useState(false);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [street, setStreet] = useState("");
  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [postCode, setPostCode] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handlePostCode = (e) => {
    setPostCode(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPass = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = () => {
    setChecked(!checked);
  };


  const auth = getAuth();

  const handleSubmit = (e) => {
    const db = getDatabase();
    e.preventDefault();
    setLoader(true);
    // for mail validity:
    let mailValidity =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // for password validity :
    let digit = /^(?=.*\d)/;
    let lowerCase = /^(?=.*[a-z])/;
    let upCase = /^(?=.*[A-Z])/;
    let length = /^(?=.{8,})/;
    let special = /^(?=.*[!@#$%^&*])/;

    if (!email) {
      toast.error("Please enter email");
      setLoader(false);
    } else if (!mailValidity.test(email)) {
      toast.error("Please enter a valid email");
      setLoader(false);
    } else if (!password) {
      setLoader(false);
      toast.error("Please Enter a password first");
    } else if (!digit.test(password)) {
      setLoader(false);
      toast.error("Password need at least one digit");
    } else if (!lowerCase.test(password)) {
      setLoader(false);
      toast.error("Password need at least one lower case");
    } else if (!upCase.test(password)) {
      setLoader(false);
      toast.error("Password need at least one upper case");
    } else if (!length.test(password)) {
      setLoader(false);
      toast.error("Password need minimum 8 characters");
    } else if (!special.test(password)) {
      toast.error("Password need at least one special characters");
      setLoader(false);
    } else if (password !== confirmPassword) {
      toast.error("Passwords are not same");
      setLoader(false);
    } else if (checked !== true) {
      toast.error("Please read our policy and agree the policy below");
      setLoader(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            set(ref(db, "allUsers/" + userCredential.user.uid),{
              
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                phone: phone,
                street: street,
                country: country,
                city: city,
                postCode: postCode,
              });
          });
          // Signed up
          setLoader(false);
          toast.success("Sign up successful!");
          const user = userCredential.user;
          console.log(user);
          navigate("/login");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);

          // ..
        });
    }
  };

  return (
    <>
      <HeadingReuse
        heading="Sign Up"
        toLink="/"
        toPage="Home"
        fromPage="Sign up"
      />
      <section id="signUpSection">
        <div className="container mx-auto p-[10px]">
          <p className="border-b border-[#eeeeed] mt-[30px] mb-[20px] pb-[20px] text-center sm:text-left lg:w-[80%] xl:w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            tempora saepe quis cum iure laboriosam autem aliquid, dicta
            excepturi mollitia.
          </p>

          <div className="mb-[30px]">
            <h2 className="text-[25px] font-bold mb-[15px]">
              Personal Details
            </h2>
            <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
              <SignUpReuse
                For="firstName"
                label="First Name"
                id="firstName"
                placeholder="Enter your first name..."
                type="text"
                onChange={handleFirstName}
              />
              <SignUpReuse
                For="lastName"
                label="last Name"
                id="lastName"
                placeholder="Enter your last name..."
                type="text"
                onChange={handleLastName}
              />
            </div>
            <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
              <SignUpReuse
                For="Email"
                label="Mail"
                id="Email"
                placeholder="Input mail here..."
                type="email"
                onChange={handleMail}
              />
              <SignUpReuse
                For="phone"
                label="Phone"
                id="phone"
                placeholder="input your mobile..."
                type="text"
                onChange={handlePhone}
              />
            </div>
          </div>

          <div className="mb-[30px]">
            <h2 className="text-[25px] font-bold mb-[15px]">Address Details</h2>
            <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
              <SignUpReuse
                For="address"
                label="Street/Address"
                id="address"
                placeholder="Enter your Address..."
                type="text"
                onChange={handleStreet}
              />
              <SignUpReuse
                For="country"
                label="Country"
                id="country"
                placeholder="Please Select..."
                type="text"
                onChange={handleCountry}
              />
            </div>
            <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
              <SignUpReuse
                For="postCode"
                label="Post Code"
                id="postCode"
                placeholder="Input post here..."
                type="text"
                onChange={handlePostCode}
              />
              <SignUpReuse
                For="city"
                label="City"
                id="city"
                placeholder="Please Select..."
                type="text"
                onChange={handleCity}
              />
            </div>
          </div>

          <div className="mb-[20px]">
            <h2 className="text-[25px] font-bold mb-[15px]">Passwords</h2>
            <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
              <div className="mb-[10px] sm:w-[50%] relative">
                <label htmlFor="password">New Password</label>
                <input
                  type={showPassword === true ? "text" : "password"}
                  id="password"
                  placeholder="Make a Password..."
                  className={`w-full outline-none pb-[5px] 
                border-b border-[#eeeeed]`}
                  required
                  onChange={handlePassword}
                />
                <div
                  className="absolute top-[60%] translate-x-[-50%] right-[0px] sm:right-[25px] md:right-[35px] lg:right-[50px]"
                  onClick={handleShowPass}
                >
                  {showPassword === true ? <MdRemoveRedEye /> : <IoEyeOff />}
                </div>
              </div>
              <div className="mb-[10px] sm:w-[50%] relative">
                <label htmlFor="confirmPass">Confirm Password</label>
                <input
                  type={showConfirmPassword === true ? "text" : "password"}
                  id="confirmPass"
                  placeholder="Enter Password again..."
                  className={`w-full outline-none pb-[5px] 
                border-b border-[#eeeeed]`}
                  required
                  onChange={handleConPassword}
                />
                <div
                  className="absolute top-[60%] translate-x-[-50%] right-[0px] sm:right-[25px] md:right-[35px] lg:right-[50px]"
                  onClick={handleConfirmPass}
                >
                  {showConfirmPassword === true ? (
                    <MdRemoveRedEye />
                  ) : (
                    <IoEyeOff />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="mr-[10px]"
              />
              I have read and agree to the Privacy Policy
            </label>
          </div>

          {/* Loader making........ */}

          {loader ? (
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
              type="submit"
              onClick={handleSubmit}
              className="px-[25px] mt-[40px] mb-[30px] py-[6px] bg-[#FB2E86] rounded-[5px] text-white"
            >
              Sign Up
            </button>
          )}

          <p>
            Already have an account?{" "}
            <Link to="/login">
              {" "}
              <u>Login here.</u>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
