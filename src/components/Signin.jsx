import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useNavigate();

  const RedirectExample = () => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        // 👇️ redirects to an external URL
        window.location.replace("/dashboard");
      }, 3000);

      return () => clearTimeout(timeout);
    }, []);

    return <>Will redirect in 3 seconds...</>;
  };

  const handleLogin = () => {
    const userData = localStorage.getItem(email);
    // const user = JSON.parse(userData)
    // if(email === '' || password === ''){
    //     setMessage('Please fill up the form')
    // }else{
    //     if(user.email === email && (password === user.password)){
    //         setMessage('Login Successful');
    //     }else{
    //         setMessage('Invalid your credential');
    //     }
    // }
    const user = JSON.parse(userData);

    if (email === "" || password === "") {
      setMessage("Please fill out the form.");
    } else if (user.email === email && user.password === password) {
      const token = user.email;
      localStorage.setItem("token", token);
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };
  return (
    <section id="signin">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-ceter mb-6 text-2xl font-semibold text-gray-900"
        >
          Task Manager
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form action="/" className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="username"
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      aria-describedby="remember"
                      id="remember"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forget password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleLogin}
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have an account yeat?{" "}
                <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
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

export default Login;
