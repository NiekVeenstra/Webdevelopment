import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "welcome to my React testing page!";
  // const likes = 50;
  // // const person = { name: "yoshi", age: 30 };
  // const googleLink = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        {/* <h1>{title}</h1>
        <p>liked {likes} times</p> */}

        {/* <p>{person}</p> */}

        {/* <p>{10}</p>
        <p>{"ten"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={googleLink}>Google</a> */}
      </div>
    </div>
  );
}

export default App;
