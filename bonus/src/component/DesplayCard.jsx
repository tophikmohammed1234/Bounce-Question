import React, { Component } from "react";
import Desplay from "./Desplay";
import "../CSS/style.css";

class DesplayCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Group 2 Bounce Practice</h1>
        </div>
        <h3 className="tomato">
          <Desplay
            fullName="Tophik Mohammed"
            state="Addis Abeba"
            country="Ethiopia"
            district="Addis Ketema"
          />
        </h3>

        <h3 className="silver">
          <Desplay
            fullName="Feven Girma"
            state="Addis Abeba"
            country="Ethiopia"
            district="Akaky Kaliti"
          />
        </h3>

        <h3 className="tomato">
          <Desplay
            fullName="Ebrahim Belayneh"
            state="Addis Abeba"
            country="Ethiopia"
            district="Bole"
          />
        </h3>
        <h3 className="silver">
          <Desplay
            fullName="Meklit Matiwos"
            state="Addis Abeba"
            country="Ethiopia"
            district="Gullele"
          />
        </h3>
        <h3 className="tomato">
          <Desplay
            fullName="Sador Yonas"
            state="Addis Abeba"
            country="Ethiopia"
            district=" Kirkos"
          />
        </h3>
        <h3 className="silver">
          <Desplay
            fullName="Shemsiya Mohammed"
            state="Addis Abeba"
            country="Ethiopia"
            district="Nifas Silk-Lafto"
          />
        </h3>
        <h3 className="tomato">
          <Desplay
            fullName="Jalene"
            state="Addis Abeba"
            country="Ethiopia"
            district="Yeka"
          />
        </h3>
        <h3 className="silver">
          <Desplay
            fullName="Tsedeke Ayele"
            state="Addis Abeba"
            country="Ethiopia"
            district="Yeka"
          />
        </h3>
        <h3 className="tomato">
          <Desplay
            fullName="Yishak Gebeyehu"
            state="Addis Abeba"
            country="Ethiopia"
            district="Ledeta"
          />
        </h3>
      </div>
    );
  }
}

export default DesplayCard;
