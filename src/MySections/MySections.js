import React, { Component } from "react";
import MyAvatar from "../MyAvatar/MyAvatar";
import Jumbotron from "../Jumbotron/Jumbotron";
import AboutMe from "../AboutMe/AboutMe";
import "./MySections.css";
// const themeClass = theme ? theme.toLowerCase() : "secondary";
export default class MySections extends Component {
  render() {
    return (
      <div>
        <nav id="navbar" class="navbar navbar-light" style={{ height: 50 }}>
          <a class="navbar-brand" href="#">
            <MyAvatar />
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Work">
                Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Blogs">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ContactMe">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <Jumbotron />
        {/* <div data-spy="scroll" data-target="#navbar-example2" data-offset="0"> */}
        <section id="sectionAboutMe">
          <div id="about">
            <h4>
              <AboutMe />
            </h4>
          </div>
        </section>
        <p>. ..</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4 id="Work">Work</h4>
        <p>...</p>
        <h4 id="Blogs">Blogs</h4>
        <p>...</p>
        <h4 id="ContactMe">Contact Me</h4>
        <p>...</p>
        {/* <h4 id="three">three</h4>
          <p>...</p> */}
      </div>
      // </div>
    );
  }
}
