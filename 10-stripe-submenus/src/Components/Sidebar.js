// Import React
import React from "react";

// Import React Icons
import { FaTimes } from "react-icons/fa";

// Import Links from Data
import sublinks from "../data/data";

// Import Global Context
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { closeSideBar, isSideBarOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ page, links }) => {
            return (
              <article key={page}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map(({ label, icon, url }) => {
                    return (
                      <a href={url} key={label}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
