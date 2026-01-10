import React from "react";
import ThemeToggle from "../ui/ThemeToggle";
import Navbar from "./Navbar";
import Tag from "./Tag";
import Priority from "./Priority";
import Search from './Search';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="text-4xl font-bold ">Menu</div>

        <Search />

        <div className="mt-6">
          <h2 className="text-2xl font-medium ">Tasks</h2>
          <Navbar />
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-medium">Priority</h2>
          <Priority />
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-medium">Tag</h2>
          <Tag />
        </div>

        
      </div>
        <ThemeToggle device="big"/>
    </div>
  );
};

export default Sidebar;
