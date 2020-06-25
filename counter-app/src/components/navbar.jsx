import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-brand">
        Total Counters{" "}
        <span className="badge badge-secondary badge-pill">
          {props.totalCounters}
        </span>
      </p>
    </nav>
  );
};

export default Navbar;
