import React from "react";
import { Link } from "react-router-dom";

import { AppBar } from "@mui/material";

import { FaTrash, FaPen, FaList } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { label: "Task List", href: "/list-tasks" },
  { label: "Create Task", href: "/create-task" },
  { label: "Bulk Delete", href: "/bulk-delete" },
];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (href?: string) => {
    setAnchorElNav(null);
    if (href) navigate(href);
  };

  return (
    <AppBar position="sticky">
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            className="text-xl font-semibold"
            onClick={() => navigate("/")}
            to="/"
          >
            Task Manager
          </Link>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-1 mr-2 hover:bg-green-600"
              onClick={() => handleCloseNavMenu(pages[0].href)}
            >
              <FaList className="text-xs md:text-sm mr-1" />
              <span className="hidden md:inline">{pages[0].label}</span>
            </button>
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-1 mr-2 hover:bg-cyan-600"
              onClick={() => handleCloseNavMenu(pages[1].href)}
            >
              <FaPen className="text-xs md:text-sm mr-1" />
              <span className="hidden md:inline">{pages[1].label}</span>
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-1 hover:bg-red-600"
              onClick={() => handleCloseNavMenu(pages[2].href)}
            >
              <FaTrash className="text-xs md:text-sm mr-1" />
              <span className="hidden md:inline">{pages[2].label}</span>
            </button>
          </div>
        </div>
      </nav>
    </AppBar>
  );
};

export default Header;
