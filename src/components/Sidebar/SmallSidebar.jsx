import React from "react";
import { NavLink } from "react-router";
import ThemeToggle from "../ui/ThemeToggle";

const SmallSidebar = ({ onOpen }) => {
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div>
        <div className="mb-12" onClick={onOpen}>
          <svg
            class="w-6 h-6 m-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </div>

        <nav className="flex flex-col gap-5 mt-1 text-lg mx-auto">
          <NavLink className="flex" to={"/"}>
            <svg
              className="w-8 h-8 text-body m-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 16 4-4-4-4m6 8 4-4-4-4"
              />
            </svg>
          </NavLink>
          <NavLink className="flex" to={"/today"}>
            <svg
              className="w-8 h-8 text-body m-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
              />
            </svg>
          </NavLink>
          <NavLink className="flex" to={"/calendar"}>
            <svg
              className="w-7 h-7 text-body m-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
          <NavLink className="flex" to={"/sticky-wall"}>
            <svg
              className="w-7 h-7 text-body m-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15 14l-.117.007a1 1 0 0 0-.876.876L14 15v6H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V14h-6zm6 2l-5 4.997V16h5z" />
              </g>
            </svg>
          </NavLink>
        </nav>
      </div>
      <div>
        <ThemeToggle device="small" />
      </div>
    </div>
  );
};

export default SmallSidebar;
