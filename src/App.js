import "./styles.css";
import React, { useState } from "react";

var userName = prompt("Give your name to login");
// var userName = "Sudipta";
var userLoggedIn = true;
// var likeCounter = 0;
var foodList = ["pizza", "burger", "puchka", "chocolate", "ice-cream", "cake"];

export default function App() {
  var [likeCounter, setLikeCounter] = useState(0);
  const [userInput, setUserInput] = useState("");

  function getUserMessage() {
    if (userLoggedIn) {
      return <em>{userName}</em>;
    }
    return "user";
  }

  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  function likeClickHandler() {
    likeCounter++;
    // console.log(likeCounter, "liked!");
    setLikeCounter(likeCounter);
  }

  function listItemClickHandler(item) {
    setUserInput(item);
  }

  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "#d1d5db";
  }

  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "#bae6fd",
          padding: "2rem",
          marginTop: "0",
          fontSize: "3rem",
          fontWeight: "bold"
        }}
      >
        Food Taste
      </nav>
      <h1>
        Welcome <span style={{ color: "#1d4ed8" }}>{getUserMessage()}</span>
      </h1>
      <h2>What is your favourite food?</h2>
      <input
        style={{
          fontSize: "larger",
          border: "3px solid #1d4ed8",
          borderRadius: "1rem",
          width: "80%",
          padding: "1rem"
        }}
        onChange={inputChangeHandler}
      />
      <div>
        <h4>
          Your vote is for ={" "}
          <span style={{ backgroundColor: "yellow" }}>{userInput}</span>
        </h4>
      </div>
      <div>
        <h3>You can choose from this list</h3>
        <ul style={{ listStyle: "none" }}>
          {foodList.map(function (item, index) {
            return (
              <li
                key={item}
                onClick={() => listItemClickHandler(item)}
                style={{
                  backgroundColor: getBg(index),
                  padding: "0.5rem"
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <footer
        style={{
          marginTop: "10rem",
          backgroundColor: "#bae6fd",
          paddingTop: "1rem",
          paddingBottom: "1rem"
        }}
      >
        <button
          style={{
            color: "white",
            borderRadius: "1rem",
            width: "80px",
            height: "40px",
            fontSize: "large",
            backgroundColor: "#1d4ed8",
            cursor: "pointer"
          }}
          onClick={likeClickHandler}
        >
          Like
        </button>
        <h5>{likeCounter} people liked this app</h5>
      </footer>
    </div>
  );
}
