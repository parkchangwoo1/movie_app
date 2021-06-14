import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://shop.hansalim.or.kr/im/is/activeDesigner/100101004_content1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://lh3.googleusercontent.com/proxy/q1xAB0EY86lgdf3zVKnAeJtWy0hPOuQgih-5UyuxXdqd0pZxQxPQ_B5CAcByglyyOD4gJyohJoitvMavtx92IfEQLmUigsGsCyI",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg",
    rating: 5,
  },
];

function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} picture={dish.picture} />;
}

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foodIlike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
