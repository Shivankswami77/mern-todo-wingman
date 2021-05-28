import React from "react";
import axios from "axios";
import PersonIcon from "@material-ui/icons/Person";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface LoginProps {
  renderSignup: () => void;
}
const Login = ({ renderSignup }: LoginProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const notify = () =>
    toast.success("Log in successful", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyWarn = () =>
    toast.error("Login failed!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const onSubmit = () => {
    if (username != "") {
      console.log("printing");
      axios
        .post("https://mern-todo-wingman.herokuapp.com/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          // sucessful, save the token
          if (res.status === 200) {
            const token = res.data.token;
            localStorage.setItem("token", token);
            console.log(res.status);
            window.location.href = "/dashboard";
            notify();
          } else {
            // do some validation, logging
            console.warn("hey");
          }
        });
    } else {
      notifyWarn();
    }
  };
  React.useEffect(() => {
    if (username == "" || password != "") setDisabled(false);
    else setDisabled(true);
  }, [password, username]);
  return (
    <div style={{ height: "300px" }}>
      <div>
        <h1 className="text-center text-green-400 font-bold">
          <PersonIcon
            style={{
              fontSize: 100,
              borderWidth: 1,
              borderRadius: "100%",
              backgroundColor: "#34d399",
              color: "white",
            }}
          />
        </h1>
        <h1 className="text-center text-green-400 font-bold">Login</h1>
        <div className="mb-4">
          <label>Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p>
              No account?{" "}
              <span
                className="text-green-400 cursor-pointer"
                onClick={renderSignup}
              >
                Signup
              </span>
            </p>
          </div>
          <button
            className={`rounded-lg px-6 py-3 font-bold text-white ${
              disabled ? "bg-gray-400" : "bg-green-400"
            }`}
            disabled={disabled}
            onClick={() => onSubmit()}
          >
            Login
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
