/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Config__Global/UserContext";

// Components
import UserNavbar from "../NavBar/NavBar/UserNavbar";
import Footer from "../Footer/Footer";

// css
import "./UserScreen.css";
import { useState } from "react";

function UserScreen(props) {
  const { user } = useContext(UserContext);

  // props
  const { childComponent, active } = props;

  return (
    <div classeName="app3">
      <UserNavbar />
      <div className="_profile_container">
        <div className="view-account">
          <Segment className="_profile_segment">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                  <img
                    className="img-circle img-responsive center-block"
                    src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png"
                    alt=""
                  />
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      <label className="label label-info">
                        {user.username}
                      </label>
                    </li>
                    <li className="email">
                      <p style={{ color: "#616670" }}>{user.Email}</p>
                    </li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li>
                      <a href="/profile">
                        <span className="fa fa-user"></span>Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-cog"></span>Settings
                      </a>
                    </li>
                    <li>
                      <a href="/profile/myConf">
                        <span className="fa fa-credit-card"></span>My
                        Conferences
                      </a>
                    </li>
                    <li className={active === "articles" ? "active" : ""}>
                      <Link to="/profile/articles">
                        <span className="fa fa-th"></span>My articles
                      </Link>
                    </li>
                    <li className={active === "evalu" ? "active" : ""}>
                      <Link to="/profile/evaluate">
                        <span className="fa fa-th"></span>My evaluations
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-clock-o"></span>Reminders
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="content-panel">{childComponent}</div>
            </div>
          </Segment>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default UserScreen;
