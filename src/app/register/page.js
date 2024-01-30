"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../Image/logo-p.svg";
import img from "../../Image/summit-app.jpg";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { registerUser } from "@/redux/reducers/userReducer";
import store from "@/redux/store";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Validate email using a regular expression
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-z]{2,4}$/;
    setEmailError(
      emailRegex.test(formData.email) ? "" : "Invalid email address"
    );

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    setPasswordError("");
    if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(formData.password)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(formData.password)) {
      setPasswordError("Password must contain at least one lowercase letter");
    } else if (!/\d/.test(formData.password)) {
      setPasswordError("Password must contain at least one number");
    }

    // Validate confirm password
    setConfirmPasswordError(
      formData.password === formData.confirmPassword
        ? ""
        : "Passwords must match"
    );

    // Check if the entire form is valid
    setIsFormValid(
      Object.values(formData).every((value) => value !== "") &&
        emailRegex.test(formData.email) &&
        passwordError === "" &&
        formData.password === formData.confirmPassword
    );
  }, [formData, passwordError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      try {
        await dispatch(registerUser(formData));
        const updatedUser = store.getState().user;
        console.log("Form submitted:", formData, updatedUser);

        console.log(updatedUser.success);
        if (updatedUser.success) {
          // Show success toast
          toast.success("Signup successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          router.push("/");
        } else {
          toast.error(updatedUser?.data?.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
      // Clear form data after successful signup
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("Form is not valid");
    }
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center container">
        <div className="flex items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <div className="flex flex-col mb-5 justify-center items-center">
              <Image src={logo} alt="" />
              <p className="text-[20px] font-medium md:-mt-[5px] text-[#1C3442]">
                Welcome! Login to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  autoComplete="off"
                  id="username"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  User name
                </label>
              </div>

              <div className="relative">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none ${
                    emailError ? "border-red-600" : "focus:border-rose-600"
                  }`}
                  placeholder="Email address"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${
                    formData.email
                      ? "-top-3.5"
                      : "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2"
                  } transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                >
                  Email Address
                </label>
                {emailError && (
                  <div className="text-red-600 text-sm mt-1">{emailError}</div>
                )}
              </div>

              <div className="relative">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none ${
                    passwordError ? "border-red-600" : "focus:border-rose-600"
                  }`}
                  placeholder="Password"
                  required
                />
                <label
                  htmlFor="password"
                  className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${
                    formData.password
                      ? "-top-3.5"
                      : "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2"
                  } transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                >
                  Password
                </label>
                <div
                  className="absolute right-0 top-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
                {passwordError && (
                  <div className="text-red-600 text-sm mt-1">
                    {passwordError}
                  </div>
                )}
              </div>

              <div className="relative">
                <input
                  autoComplete="off"
                  id="confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none ${
                    confirmPasswordError
                      ? "border-red-600"
                      : "focus:border-rose-600"
                  }`}
                  placeholder="Confirm password"
                  required
                />
                <label
                  htmlFor="confirm-password"
                  className={`absolute left-0 -top-3.5 text-gray-600 text-sm ${
                    formData.confirmPassword
                      ? "-top-3.5"
                      : "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2"
                  } transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                >
                  Confirm Password
                </label>
                <div
                  className="absolute right-0 top-2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
                {confirmPasswordError && (
                  <div className="text-red-600 text-sm mt-1">
                    {confirmPasswordError}
                  </div>
                )}
              </div>

              <div className="">
                <button
                  type="submit"
                  className={`bg-primaryColor text-white text-sm rounded-md px-2.5 font-bold py-1 uppercase ${
                    isFormValid ? "" : "cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  {user.loading ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </form>
            <ToastContainer />
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Register with Google
            </button>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <Link
                href="/Login"
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <Image src={img} className="rounded-2xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
