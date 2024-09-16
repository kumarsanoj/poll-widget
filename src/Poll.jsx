import React from "react";
function Poll(props) {
  const { title, options, addVote, onSubmit } = props;

  return (
    <div style={{ padding: "20px" }}>
      <p>{title}</p>
      {options.map((option) => (
        <div>
          <input
            type="radio"
            name="favorite"
            value={option.name}
            onChange={(e) => addVote && addVote(e.target.value)}
          />
          <label>{option.name}</label>
        </div>
      ))}
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default Poll;
