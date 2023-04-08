import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Links from "../utils/Links";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/SmallSidebar";

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => console.log("toggle sidebar")}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
