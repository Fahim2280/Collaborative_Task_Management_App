import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [avater, setAvater] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    // Create a new user object and store it in local storage
    const newUser = {
      name,
      email,
      password,
      bio,
      avater,
    };
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      bio === "" ||
      avater === ""
    ) {
      setMessage("Please fill up the form");
    } else {
      // check existing user
      const existingUser = localStorage.getItem(email);
      if (existingUser) {
        setMessage("User already exists");
      } else {
        localStorage.setItem(email, JSON.stringify(newUser));
        setMessage("Signup successful! You can now Signin.");
      }
    }
  };
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-ceter mb-3 text-2xl font-semibold text-gray-900"
        >
          Task Manager
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up to your account
            </h1>
            <form action="#" className="space-y-2 md:space-y-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="MD. "
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="******"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Bio
                </label>
                <textarea
                  type="text"
                  name="bio"
                  id="bio"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Tell something about your self"
                  required=""
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="avater"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Avater
                </label>
                <input
                  type="text"
                  name="avater"
                  id="avater"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Avatar link"
                  required=""
                  onChange={(e) => setAvater(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleSignup}
              >
                Sign up{" "}
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have an account yeat?
                <a
                  href="/signin"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign in
                </a>
              </p>
            </form>
            <p className="text-sm font-light text-danger">{message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
