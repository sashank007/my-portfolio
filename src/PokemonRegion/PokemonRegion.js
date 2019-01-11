import React, { Component } from "react";
import PokemonStadium from "../PokemonStadium/PokemonStadium";
import Typist from "react-typist";
import "./PokemonRegion.css";
import keydown from "react-keydown";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import LongTextSnackbar from "../Common/SnackBar";
var currentKey = false;
var TimerWalk;
// var me = findDOMNode(this.ref.character);
var me;
var charStep = 2; // current step, 1=1st foot, 2=stand, 3=2nd foot, 4=stand
// records the current key pressed
var lockUp = false; // when lock up, character won’t be able to move
// character object
var walking_area;
// Settings:
var walkSpeed = 80; //ms, animation speed
var walkLength = 20; //px, move how much px per “walk”
var newX;
var obstacles,
  gym,
  trees_left,
  lugia,
  moltress,
  latias,
  groudon,
  weirdTree,
  flowers,
  flowers2,
  mainSign,
  pokeSign,
  gymSign,
  pokecenter;
var newY;
// const themeClass = theme ? theme.toLowerCase() : "secondary";
export default class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      gamePiece: null,
      people: ["fafaf", "abcd", "sashank"],
      myX: 0,
      myY: 0,
      isCharFrontRight: true,
      infrontOfTree: false,
      shouldShowMessage: false,

      displayMessage:
        "Hi! Welcome to the Saso Region of Pokemon! Move around to checkout this region!",
      alertText: "Looks like this tree can be cut down"
    };
  }
  returnRows() {}
  componentDidMount() {
    gym = $("#gym");
    trees_left = $("#trees_group");
    lugia = $("#lugia");
    flowers = $("#flowers");
    flowers2 = $("#flowers2");
    pokecenter = $("pokecenter");
    // moltress = $("#moltress");
    // latias = $("#latias");
    // groudon = $("#groudon");
    weirdTree = $("#weird_tree");
    gymSign = $("#signGym");
    mainSign = $("#sign_main");
    pokeSign = $("#sign_poke");
    pokecenter = $("#pokecenter");

    obstacles = [
      gym,
      trees_left,
      flowers,
      flowers2,
      lugia,
      pokecenter,
      mainSign,
      pokeSign,
      gymSign
    ];
    me = $("#character");
    walking_area = $("#canvas");
    console.log("me in component did mount", me);
    // const ctx = this.refs.canvas.getContext("2d");
    console.log("initial load");
    // ctx.fillRect(0, 0, 100, 100);
    window.addEventListener("keydown", this.handleKeyDown, true);
    window.addEventListener("keyup", this.handleKeyUp, true);
  }
  handleKeyDown = event => {
    // timer handle for walking

    //add character state class
    me.addClass("front-stand");
    const keyLeft = 37;
    const keyRight = 39;
    const keyUp = 38;
    const keyDown = 40;
    const keySpace = 32;

    if (!lockUp && currentKey === false) {
      currentKey = event.keyCode;
      if (currentKey === keySpace && this.state.infrontOfTree) {
        console.log(
          "Looks like this tree can be cut down. If only there were some way to!"
        );
        this.setState({
          shouldShowMessage: true,
          displayMessage:
            "Looks like this tree can be cut down. If only there were some way to!"
        });
      }
      if (event.keyCode === keyLeft) {
        this.walk("left");
      }
      if (event.keyCode === keyRight) {
        this.walk("right");
      }
      if (event.keyCode === keyDown) {
        this.walk("down");
      }
      if (event.keyCode === keyUp) {
        this.walk("up");
      }
    }
  };

  handleKeyUp = event => {
    // console.log("handle key up  ", event.keyCode);
    if (event.keyCode === currentKey) {
      currentKey = false;

      //clear the walk timer
      clearInterval(TimerWalk);

      //finish the character’s movement
      me.stop(true, true);
    }
  };

  handleSnackClose = mustClose => {
    console.log("handle snack close ", mustClose);
    if (mustClose) {
      this.setState({
        shouldShowMessage: false
      });
    }
  };
  canIwalk(posX, posY) {
    // Within Main Road (walking area)?
    // console.log("can i walk");
    var wt = weirdTree;
    var wt_left = wt.position().left + parseInt(wt.css("margin-left"));
    var wt_top = wt.position().top + parseInt(wt.css("margin-top"));
    if (
      posX > wt_left - me.width() / 2 &&
      posX < wt_left + wt.width() + me.width() / 2 &&
      posY > wt_top - me.height() / 2 &&
      posY < wt_top + wt.height() + me.height() / 2
    ) {
      console.log("infront of treeeeeeeeeeeee");
      this.setState({
        infrontOfTree: true
      });
    }
    var walking_area_left =
      walking_area.position().left + parseInt(walking_area.css("margin-left"));
    var walking_area_top =
      walking_area.position().top + parseInt(walking_area.css("margin-top"));

    if (
      posX < walking_area_left + me.width() / 2 ||
      posX > walking_area_left + walking_area.width() - me.width() / 2 ||
      posY < walking_area_top + me.height() / 2 ||
      posY > walking_area_top + walking_area.height() - me.height() / 2
    ) {
      return false;
    }
    for (var i = 0; i < obstacles.length; i++) {
      var object = obstacles[i];

      // object = weirdTree;
      var obj_left =
        object.position().left + parseInt(object.css("margin-left"));
      var obj_top = object.position().top + parseInt(object.css("margin-top"));

      if (
        posX > obj_left - me.width() / 2 &&
        posX < obj_left + object.width() + me.width() / 2 &&
        posY > obj_top - me.height() / 2 &&
        posY < obj_top + object.height() + me.height() / 2
      ) {
        // Cannot walk here
        return false;
      }
    }

    return true;
  }

  processWalk = dir => {
    charStep++;
    if (charStep === 5) charStep = 1;

    //remove the current class
    me.removeAttr("class");

    //add the new class
    switch (charStep) {
      case 1:
        me.addClass(dir + "-stand");
        break;
      case 2:
        me.addClass(dir + "-right");
        break;
      case 3:
        me.addClass(dir + "-stand");
        break;
      case 4:
        me.addClass(dir + "-left");
        break;
      default:
        break;
    }

    //move the char
    switch (dir) {
      case "front":
        newY = me.position().top;
        newX = me.position().left;
        newY += walkLength;
        // console.log("inside front moving", newX, newY);
        break;

      case "back":
        newX = me.position().left;
        newY = me.position().top - walkLength;
        // console.log("inside back moving", newX, newY);
        break;

      case "left":
        newX = me.position().left - walkLength;
        newY = me.position().top;
        // console.log("inside left moving", newX, newY);
        break;

      case "right":
        newX = me.position().left + walkLength;
        newY = me.position().top;
        // console.log("inside right moving", newX, newY);
        break;
      default:
        break;
    }
    if (this.canIwalk(newX, newY)) {
      me.animate(
        {
          left: newX,
          top: newY
        },
        walkSpeed / 2
      );
    }
  };

  walk = dir => {
    // console.log("inside walk ", dir);
    if (dir === "up") dir = "back";
    if (dir === "down") dir = "front";
    TimerWalk = setInterval(
      (function(self) {
        //Self-executing func which takes 'this' as self
        return function() {
          //Return a function in the context of 'self'
          self.processWalk(dir); //Thing you wanted to run as non-window 'this'
        };
      })(this),
      50 //normal interval, 'this' scope not impacted here.
    );
  };

  componentDidUpdate() {
    console.log("component did update");
    this.updateCanvas();
  }
  updateCanvas() {
    console.log("updateCanvas--> context");
    // const ctx = this.refs.canvas.getContext("2d");
    console.log("initial load");
    // ctx.clearRect(0, 0, this.state.windowWidth, this.state.windowHeight);
    // ctx.fillRect(this.state.myX, this.state.myY, 100, 100);
  }
  setCharClass() {
    return "front-right";
  }
  render() {
    const { displayMessage, shouldShowMessage } = this.state;
    return (
      <div>
        {this.state.people.map(function(name, index) {
          return <div key={index}>{name}</div>;
        })}
        <Jumbotron displayMessage={this.state.displayMessage} />{" "}
        <div id="pokemon_region">
          <div ref="canvas" id="canvas">
            <div
              id="character"
              ref="character"
              className={this.setCharClass()}
            />{" "}
            <div id="gym" ref="gym" /> <div id="signGym" />{" "}
            {/* <div id="moltress" />
                            <div id="latias" /> */}{" "}
            {/* <div id="entei" />
                            <div id="groudon" /> */}{" "}
            <div id="sign_poke" />
            <div id="pokecenter" />
            <div id="flowers" />
            <div id="flowers2" />
            <div id="sign_main" />
            <div id="lugia" />
            <div id="weird_tree" />
            <div id="trees_group" />
            <div id="trees_bottom" /> {/* <div id="trees_square" /> */}{" "}
            <div id="gate" />
            <div id="poke_dialogue" />{" "}
            {/* <div id="alert_window">
                        <Typist className="alertTextTypist">
                          <p class="alertText">{this.state.alertText}</p>
                        </Typist>
                        <img
                          id="closeWinAlert"
                          src="../assets/images/close.png"
                          alt="x"
                        />
                      </div> */}{" "}
            {shouldShowMessage ? (
              <div id="snackbar">
                <LongTextSnackbar
                  closeSnack={this.handleSnackClose}
                  displayMessage={displayMessage}
                />{" "}
              </div>
            ) : (
              <div />
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
