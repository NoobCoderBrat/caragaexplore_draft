import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [password, showPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="card glass w-full sm:w-96 p-8 font-mono">
      <img src="logo.png" alt="logo" className="w-full max-w-xs mx-auto" />
      <form onSubmit={handleRegister} className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4"
          >
            <path d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8ZM8 4a4 4 0 1 0 0 8A4 4 0 0 0 8 4Z" />
          </svg>
          <input
            type="text"
            className="grow text-gray-600"
            placeholder="Traveler's Name"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow text-gray-600"
            placeholder="Enter an email"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={password ? "text" : "password"}
            className="grow text-gray-600"
            placeholder="Enter a password"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4"
          >
            <path d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
          </svg>
          <input
            type={password ? "text" : "password"}
            className="grow text-gray-600"
            placeholder="Confirm your password"
            required
          />
        </label>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              onChange={() => showPassword(!password)}
              className="mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            Show Password
          </label>
        </div>

        <button
          type="submit"
          className={`w-full py-3 font-bold text-white btn-primary btn tracking-widest rounded-lg ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-4 border-t-4 border-white rounded-full animate-spin mx-auto" />
          ) : (
            "Register"
          )}
        </button>
      </form>
      <div className="divider before:bg-black after:bg-black">or</div>
      <NavLink to="/">
        <button className="w-full py-3 font-bold text-white btn-error btn rounded-lg tracking-widest">
          Login Instead
        </button>
      </NavLink>
    </div>
  );
};

export default Register;
