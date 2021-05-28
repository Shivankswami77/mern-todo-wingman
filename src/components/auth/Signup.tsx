import React from "react";
import axios from "axios";
import PersonIcon from "@material-ui/icons/Person";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignupProps {
  renderLogin: () => void;
}

const Signup = ({ renderLogin }: SignupProps) => {
  const notify = () =>
    toast.error("Please check the details!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyCreated = () =>
    toast.success("User created successfully", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = () => {
    if (username != "") {
      axios
        .post("https://mern-todo-wingman.herokuapp.com/signup", {
          username: username,
          password: password,
        })
        .then((res) => console.log(res));
      if (username != "" && password != "") {
        notifyCreated();
      }
    } else {
      notify();
    }
  };

  React.useEffect(() => {
    if (password === confirmPassword) setDisabled(false);
    else setDisabled(true);
  }, [password, confirmPassword]);

  return (
    <div style={{ height: "300px" }}>
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
      <h1 className="text-center text-green-400 font-bold">Signup</h1>
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
      <div className="mb-4">
        <label>Confirm Password</label>
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-md"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>
            Already a member?{" "}
            <span
              className="text-green-400 cursor-pointer"
              onClick={renderLogin}
            >
              Login
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
          Signup
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
  );
};

export default Signup;
