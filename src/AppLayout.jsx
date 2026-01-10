import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import SmallSidebar from "./components/Sidebar/SmallSidebar";
import TaskDetails from "./components/task/TaskDetails";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);


useEffect(() => {
  const openTask = () => setIsTaskOpen(true);
  window.addEventListener("open-task", openTask);
  return () => window.removeEventListener("open-task", openTask);
}, []);


  return (
    <div className="h-screen flex bg-(--bg) text-(--text) overflow-hidden font-inter">
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex bg-(--sidebar) border border-(--border)
                      w-1/6 rounded-2xl p-5 m-2 min-w-72">
        <Sidebar />
      </div>

      {/* Small Sidebar */}
      <div className="flex lg:hidden bg-(--sidebar) border border-(--border)
                      w-14 rounded-2xl my-2 ml-2 py-5">
        <SmallSidebar onOpen={() => setIsSidebarOpen(true)} />
      </div>

      {/* Main Content */}
      <main className="bg-(--bg) border border-(--border)
                       w-full rounded-2xl p-5 m-2 flex-1">
        <Outlet />
      </main>

      {/* Desktop TaskDetails */}
      <div className="hidden 2xl:flex border border-(--border)
                      rounded-2xl p-5 m-2 flex-1">
        <TaskDetails />
      </div>

      {/* 🔥 Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="relative w-72 bg-(--sidebar) p-5 shadow-xl">
            <Sidebar />
          </div>
        </div>
      )}

      {/* 🔥 Mobile TaskDetails Overlay */}
      {isTaskOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsTaskOpen(false)}
          />
          <div className="relative w-full max-w-md bg-(--sidebar) p-5 shadow-xl">
            <TaskDetails onClose={() => setIsTaskOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
