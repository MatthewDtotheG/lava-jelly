import React from "react";
import styled from "styled-components";
import About from "./About";
import Apps from "./Apps";
import Blog from "./Blog";
import Home from "./Home";
import Parents from "./Parents";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = styled.nav`
  height: 50px;
  margin: 0px 15%;
  margin-top: 50px;
  a {
    color: white;
    text-decoration: none;
  }
`;
const NavContainer = styled.nav`
  width: 100%;
`;

const LogoLink = styled(Link)`
  font-weight: bold;
`;
const NavLinkWrapper = styled.div`
  float: right;
`;
const NavLink = styled(Link)`
  color: purple;
  margin: 20px;
`;

const TopNavBar = () => {
  return (
    <Router>
      <NavContainer>
        <Nav>
          <LogoLink to="/home">LavaJelly</LogoLink>
          <NavLinkWrapper>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="/parents">Parents</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </NavLinkWrapper>
        </Nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/apps">
            <Apps />
          </Route>
          <Route path="/parents">
            <Parents />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </NavContainer>
    </Router>
  );
};

export default TopNavBar;
