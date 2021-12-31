import React from "react";
import { Nav, Button } from "../styles";

function NavBar() {
  return (
    <Nav>
      <div className="nav-links">
        <Button btnStyle="transparent">Log in</Button>
      </div>
    </Nav>
  );
}

export default NavBar;
