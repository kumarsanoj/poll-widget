import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const props = {
  title: "React Voting App",
  description: "Select an option to vote for it",
  options: [
    { id: 1, name: "React", votes: 0 },
    { id: 2, name: "Vue", votes: 0 },
    { id: 3, name: "Angular", votes: 0 },
  ],
  addVote: (id) => console.log(`Add vote for ${id}`),
  removeVote: (id) => console.log(`Remove vote for ${id}`),
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={props} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
