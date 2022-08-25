import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😋": "Hungry",
  "😂": "Laughing",
  "😅": "Happy sweat",
  "😉": "wink face",
  "😍": "face with heart eyes",
  "😛": "face with tongh",
  "💓": "Beating heart"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This is not in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside out</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="put an emoji here to know the meaning!"
      ></input>
      <h2>{meaning}</h2>
      <h3>emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
