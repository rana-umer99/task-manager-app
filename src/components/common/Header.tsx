import React from "react";
import { Link } from "react-router-dom";
import { Pages} from './Pages';

import { AppBar } from "@mui/material";

import { FaTrash, FaPen, FaList } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

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
              className="btn-green"
              onClick={() => handleCloseNavMenu(Pages[0].href)}
            >
              <FaList className="text-xs md:text-sm mr-1" />
              <span className="hidden md:inline">{Pages[0].label}</span>
            </button>
            <button
              className="btn-blue"
              onClick={() => handleCloseNavMenu(Pages[1].href)}
            >
              <FaPen className="text-xs md:text-sm mr-1" />
              <span className="hidden md:inline">{Pages[1].label}</span>
            </button>
            <button
              className="btn-red"
              onClick={() => handleCloseNavMenu(Pages[2].href)}
            >
              <FaTrash className="text-xs md:text-sm mr-1" />
              <span className="hidden md:inline">{Pages[2].label}</span>
            </button>
          </div>
        </div>
      </nav>
    </AppBar>
  );
};

export default Header;
