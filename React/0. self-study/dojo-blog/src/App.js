import "./App.css";

function App() {
  const title = "welcome";
  const likes = 50;
  // const person = { name: "yoshi", age: 30 };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>

        {/* <p>{person}</p> */}
      </div>
    </div>
  );
}

export default App;