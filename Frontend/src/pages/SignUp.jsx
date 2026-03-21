import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-(--color-accent) p-4">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-60 h-60 bg-(--color-primary-hover) rounded-full opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-(--color-primary-hover) rounded-full opacity-30" />

        <div className="w-full max-w-3xl md:h-105 bg-white shadow-2xl flex flex-col md:flex-row rounded-lg overflow-hidden">
          {/* LEFT PANEL */}
          <div className="md:w-2/5 bg-(--color-primary) text-white p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                Looks like you're new here!
              </h1>

              <p className="text-blue-100 text-sm md:text-base">
                Sign up with your mobile number to get started
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center mt-6 md:mt-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                alt="signup"
                className="w-28 md:w-36"
              />
            </div>
          </div>

          <div className="md:w-3/5 flex flex-col px-8 items-center">
            <div className="w-full  mt-10">
              <input
                type="text"
                placeholder="Enter Mobile number or Email"
                className="border-b border-gray-300 py-2 outline-none mb-8 w-full"
              />

              <p className="text-xs text-gray-500 mb-4">
                By continuing, you agree to our Terms of Use and Privacy Policy.
              </p>

              <button className="bg-(--color-secondary) text-white py-3 font-semibold shadow-md hover:bg-(--color-secondary-hover) transition w-full cursor-pointer">
                CONTINUE
              </button>
            </div>

            <div className="mt-3 w-full border p-3 text-center shadow-sm cursor-pointer hover:bg-gray-50">
              <span className="text-blue-600">Existing User? Log in</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
