const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://shop.hansalim.or.kr/im/is/activeDesigner/100101004_content1.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://lh3.googleusercontent.com/proxy/q1xAB0EY86lgdf3zVKnAeJtWy0hPOuQgih-5UyuxXdqd0pZxQxPQ_B5CAcByglyyOD4gJyohJoitvMavtx92IfEQLmUigsGsCyI",
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg",
  },
];
function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} picture={dish.picture} />;
}

function Food({ name, picture }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foodIlike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
