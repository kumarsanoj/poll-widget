function App(props) {
  const { title, description, options, addVote, removeVote } = props?.data;

  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        width: "300px",
        alignContent: "flex-start !important",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {options.map((option) => (
          <>
            <input
              type="radio"
              name="favorite"
              value={option.name}
              onChange={(e) => addVote(e.target.value)}
            />
            <label>{option.name}</label>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
