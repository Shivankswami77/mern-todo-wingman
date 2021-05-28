import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Landing = () => {
  const [isSignup, setIsSignup] = React.useState<boolean>(false);

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 max-w-xs mx-auto relative">
        <div className="absolute inset-0 m-auto" style={{ height: "300px" }}>
          {(isSignup && <Signup renderLogin={() => setIsSignup(false)} />) || (
            <Login renderSignup={() => setIsSignup(true)} />
          )}
        </div>
      </div>

      <div className="w-1/2 bg-green-400">
        <h1
          className="text-center align-baseline text-white text-xxl"
          style={{ verticalAlign: "center", marginTop: "40%", fontSize: 40 }}
        >
          Wingman Partners Assignment <br />
          MERN-TODO
          <br />
          Submitted by :- Shivank Swami
        </h1>
      </div>
    </div>
  );
};
export default Landing;
