import React from "react";
import Logout from "./auth/Logout";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-green-400 p-8 text-white">
      <p className="font-bold text-lg">Mern TODO</p>
      <p className="font-bold text-lg">Wingman Partners Assignment</p>
      <p className="flex">
        <Logout />
        <ExitToAppIcon />
      </p>
    </div>
  );
};

export default Navbar;
