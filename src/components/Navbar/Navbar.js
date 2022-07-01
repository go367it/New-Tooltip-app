import React from "react";
import styled from "styled-components";

// css for navbar container
const Appbar = styled.div`
  /* width: 100vw; */
  padding: 1rem;
  display: flex;
  justify-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <div>
      <Appbar>
        <div>Navbar</div>
        <div>
            <p>Login</p>
            <p>kjnk</p>
        </div>
      </Appbar>
    </div>
  );
};

export default Navbar;
