import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PasswordEyeIcon } from "../../assets/iconComponents";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import OtpInput from "react-otp-input";
import { setLoggedIn, setUser } from "./auth.reducer";
import { useSelector, useDispatch } from "react-redux";
import { checkRegisteredMobileNumber } from "./login.service";
import { toast } from "react-toastify";
import { setLoading } from "../../reducers/common.reducer";
import ButtonLoader from "../../components/common/buttonLoader";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state: any) => state.auth);
  const [mobileValue, setMobileValue] = useState<any>("");
  const [countryCode, setCountryCode] = useState<any>("91");
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [appVerifier, setAppVerifier] = useState<any>(null);
  const [mode, setMode] = useState("init");
  const [isLoading, setIsLoading] = useState(false);
  const [jeanieUser, setJeanieUser] = useState<any>(null);

  const createCaptchContainer = () => {
    const captchaElement = document.createElement("div");
    captchaElement.style.visibility = "hidden"; // Example style
    captchaElement.id = "recaptcha-container"; // Example id
    const rootElement = document.getElementById("root");
    if (rootElement) rootElement.appendChild(captchaElement);
  };

  const removeCaptcha = () => {
    const element = document.getElementById("recaptcha-container");
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  };

  const generateRecaptcha = () => {
    createCaptchContainer();
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {},
        "expired-callback": () => {},
      }
    );
    return recaptchaVerifier;
  };

  useEffect(() => {
    if (isLoggedIn && user !== null) {
      setTimeout(() => {
        navigate("/alerts");
      }, 500);
    }
    return () => {
      setTimeout(() => {
        removeCaptcha();
      }, 3000);
    };
  }, []);

  const checkPhoneNumberAvailability = async () => {
    setIsLoading(true);
    await checkRegisteredMobileNumber(mobileValue)
      .then((res: any) => {
        if (res.length > 0) {
          setJeanieUser(res[0]);
          handleSendCode();
        } else {
          setIsLoading(false);
          toast.error(
            "Your phone number is not registered & onboarded with Health Jeanie. Please check with your healthcare provider or health plan or contact support@jeanie.health"
          );
        }
      })
      .catch((err) => {
        console.error("Error checking phone number availability:", err);
        setIsLoading(false);
        toast.error("something went wrong");
      });
  };

  const handleSendCode = () => {
    let captchVerifier = appVerifier;
    if (appVerifier === null) {
      captchVerifier = generateRecaptcha();
      setAppVerifier(captchVerifier);
    }
    signInWithPhoneNumber(auth, `+${countryCode}${mobileValue}`, captchVerifier)
      .then((confirmationResult: any) => {
        setConfirmationResult(confirmationResult);
        setMode("verify");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("failed to get captcha verify");
        setIsLoading(false);
        console.error("Error sending code:", error);
      });
  };

  const handleNurseOnline = (providerId: any) => {
    if (providerId) {
    }
  };

  const handleVerifyCode = () => {
    setIsLoading(true);
    confirmationResult
      .confirm(verificationCode)
      .then((result: any) => {
        if (result?.user) {
          handleNurseOnline(jeanieUser?.jeanie_provider_id);
          setIsLoading(false);
          dispatch(setLoggedIn(result?.user));
          dispatch(setUser(jeanieUser));

          navigate("/alerts", {
            state: { isCaptchaRemove: true },
          });

          toast.success("Login successfully.");
          setAppVerifier(null);
        }
      })
      .catch((error: any) => {
        setIsLoading(false);
        console.error("Error verifying code:", error);
      });
  };

  const handleOnChangePhone = (value: any, country: any) => {
    const reducedPhone = value.replace(country.dialCode, "");
    setMobileValue(reducedPhone);
    setCountryCode(country.dialCode);
  };

  return (
    <div className="App">
      <div className="login-page p-0 bg-no-repeat bg-cover">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/5">
            <div className="login-left">
              <img src={Logo} className="mt-2 pl-2" alt="" />
              <div className="pl-4 md:pl-16 lg:px-0 w-full">
                <div className="pl-4 md:pl-24 mt-4 md:mt-12 pb-5 rounded-2xl lg:rounded-none bg-primary w-[calc(100%-16px)] md:w-[calc(100%-64px)] lg:w-[81.8%] ">
                  <p className="text-white text-left text-xl md:text-3xl font-bold font-Epilogue leading-10 pt-5 mb-0">
                    Welcome back,
                  </p>
                  <p className="text-left text-md md:text-xl font-medium leading-10 mb-0 text-secondary font-Epilogue">
                    sign in to continue to Health-Jeanie
                  </p>
                </div>
              </div>
              <div className="text-white text-base font-normal leading-6 font-Molish flex flex-col items-start">
                <p className="hidden md:block pl-24 pt-12 font-Mulish pb-16 lg:pb-0 text-left">
                  Ut enim ad minim veniam, quis nostrud exercitation
                  <br />
                  ullamco laboris nisi ut aliquip ex ea magna
                  <br />
                  commodo consequat.
                </p>
                <p className="block md:hidden font-Mulish px-8 pt-6 font-Mulish pb-6">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea magna commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="bg-[#F2F4F6] rounded-2xl lg:rounded-none flex items-center h-auto lg:h-[calc(100vh-0px)] py-8 md:py-16 lg:py=0 mx-4 md:mx-16 lg:mx-0">
              {mode === "init" && (
                <div className="w-full max-w-[90%] md:max-w-[65%] my-0 mx-auto">
                  <p className="text-left text-3xl font-bold capitalize font-Epilogue mb-5 text-light-black">
                    sign in
                  </p>

                  <form>
                    <div className="mb-7">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      ></label>
                      {/* <input
                      type="email"
                      className="block textBox focus:none appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 outline-0 rounded"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      aria-describedby="emailHelp"
                    /> */}
                      <PhoneInput
                        containerClass="focus:none appearance-none w-full py-1 px-2 mb-1 !text-[16px] leading-normal text-[#8891a0] outline-0 border-b border-b-[#d4d3d3] bg-[transparent] !font-normal"
                        inputClass="!focus:none !appearance-none !w-full !text-[16px] !leading-normal !text-[#8891a0] !outline-0 !border-0 !bg-[transparent] !font-normal"
                        buttonClass="!focus:none !appearance-none !outline-0 !border-0 !bg-[transparent]"
                        country={"in"}
                        copyNumbersOnly
                        value={`${countryCode}${mobileValue}`}
                        onChange={handleOnChangePhone}
                        placeholder="Enter phone number"
                      />
                    </div>
                    {/* <div className="mb-5 relative">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    ></label>
                    <input
                      type={isPasswordShow ? "text" : "password"}
                      className="block pr-8 textBox appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 outline-0 border border-gray-200 rounded"
                      placeholder="Password"
                      id="exampleInputPassword1"
                    />
                    <div
                      role="button"
                      className="cursor-pointer"
                      onClick={() => setIsPasswordShow(!isPasswordShow)}
                    >
                      <PasswordEyeIcon isShow={isPasswordShow} />
                    </div>
                  </div> */}

                    <div className="inline-block mr-2 flex items-center justify-between mt-8 mr-0">
                      <div className="mb-[0.125rem] mr-4 flex items-center min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="appearance-none checked:bg-primary float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray checked:border-primary outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          className="inline-block text-text-primary pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="inlineCheckbox1"
                        >
                          stay signed in
                        </label>
                      </div>{" "}
                      <label className="text-main-blue border-b border-dashed border-under-line-blue  mb-0 text-main-blue font-Mulish text-base font-normal leading-6">
                        Forgot Password?
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => checkPhoneNumberAvailability()}
                      disabled={isLoading}
                      className="bg-primary text-white text-xl font-medium w-full h-12 mt-10 rounded-none shadow-none"
                    >
                      {isLoading ? (
                        <ButtonLoader label="Generating OTP..." />
                      ) : (
                        "Generate Otp"
                      )}
                    </button>
                  </form>
                  <div className="block lg:hidden pt-4 w-full lg:w-2/5 pr-4 pl-4 relative">
                    <div className="text-center">
                      <p className="text-base font-normal leading-6 text-text-primary">
                        Don't have an Health-Jeanie account?{" "}
                        <span className="font-Mulish text-base font-normal leading-6 text-main-blue border-b border-dashed border-under-line-blue">
                          Sign up now!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {mode === "verify" && (
                <div className="w-full max-w-[90%] md:max-w-[65%] my-0 mx-auto">
                  <p className="text-left text-3xl font-bold capitalize font-Epilogue mb-5 text-light-black">
                    Verify
                  </p>

                  <form>
                    <div className="mb-7">
                      <label htmlFor="otp" className="form-label"></label>
                      <OtpInput
                        value={verificationCode}
                        onChange={setVerificationCode}
                        numInputs={6}
                        renderSeparator={
                          <span className=" text-xl font-bold text-[#8891a0]">
                            -
                          </span>
                        }
                        renderInput={(props) => <input {...props} />}
                        containerStyle={{ justifyContent: "space-around" }}
                        inputStyle={{
                          width: 45,
                          height: 40,
                          borderRadius: 8,
                          border: "1px solid #8891a0",
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleVerifyCode()}
                      className="bg-primary text-white text-xl font-medium w-full h-12 mt-10 rounded-none shadow-none"
                    >
                      {isLoading ? (
                        <ButtonLoader label="Verifying..." />
                      ) : (
                        "Verify Otp"
                      )}
                    </button>
                  </form>
                  <div className="block lg:hidden pt-4 w-full lg:w-2/5 pr-4 pl-4 relative">
                    <div className="text-center">
                      <p className="text-base font-normal leading-6 text-text-primary">
                        Don't have an Health-Jeanie account?{" "}
                        <span className="font-Mulish text-base font-normal leading-6 text-main-blue border-b border-dashed border-under-line-blue">
                          Sign up now!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="relative">
        <div className="absolute md:relative bottom-0 container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 footer">
          <div className="flex lg:flex-row flex-wrap">
            <div className="w-full lg:w-3/5 pr-4 pl-4">
              <div className="relative md:absolute pl-10 bottom-[16%] lg:bottom-[6%] w-[80%] lg:w-auto">
                <ul className="flex flex-col md:flex-row w-full justify-center lg:justify-between items-center">
                  <li>
                    <a
                      href="#"
                      className="inline-block py-2 px-4 no-underline text-white-s"
                    >
                      about us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block py-2 px-4 no-underline text-white-s"
                    >
                      terms of service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block py-2 px-4 no-underline text-white-s"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block w-full lg:w-2/5 pr-4 pl-4 relative">
              <div className="relative lg:absolute pl-0 left-0 right-0 text-center bottom-0 lg:bottom-[60px]">
                <p className="text-base font-normal leading-6 text-text-primary">
                  Don't have an Health-Jeanie account?{" "}
                  <span className="font-Mulish text-base font-normal leading-6 text-main-blue border-b border-dashed border-under-line-blue">
                    Sign up now!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
