function Food(props) {
  return <h1>I love {props.fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
