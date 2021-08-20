import React, { useState } from "react";
import food from "./foody.webp";
import "./styles.css";

const foodDB = {
  Italian: [
    {
      name: " Mushroom Risotto",
      rating: "4/5",
      about:
        "A great source of protein, powerful antioxidant and even has cancer-fighting properties."
    },
    {
      name: "Margherita Pizza",
      rating: "3.5/5",
      about:
        "Fancy a pipping hot pizza, fresh out of the oven? Create one at home! Margherita Pizza is to many the true Italian flag."
    },
    {
      name: "Pasta Carbonara",
      rating: "3/5",
      about:
        "This simple Roman pasta dish derives its name from 'carbone' meaning coal. It was a pasta popular with the coal miners."
    },
    {
      name: "Lasagna",
      rating: "3/5",
      about:
        "Loaded with parmesan cheese and layered with a mix of vegetables, bacon strips and minced lamb, this lasagna recipe is nothing short of perfect."
    }
  ],

  Chinese: [
    {
      name: "Hakka noodles",
      rating: "5/5",
      about:
        "Hakka noodles are Indian-Chinese style noodles made with unleavened refined wheat flour."
    },
    {
      name: "Dimsums",
      rating: "5/5",
      about:
        "Dim sum is a Cantonese style of steamed dumpling prepared in small, almost bite-sized portions."
    },
    {
      name: "Manchurian",
      rating: "5/5",
      about:
        "Manchurian is a class of Indian Chinese dishes made by roughly chopping and deep-frying a main ingredient"
    },
    {
      name: "Manchow soup",
      rating: "4.5/5",
      about:
        "It is a dark brown soup prepared with various vegetables, scallions, and chicken, thickened with broth and corn flour"
    }
  ],
  Indian: [
    {
      name: "Chhole Bhature",
      rating: "5/5",
      about:
        "Chole bhature is a combination of two dishes: chole - a spicy chickpea curry, and bhature - a type of fried bread made with maida flour"
    },
    {
      name: "Panipuri",
      rating: "5/5",
      about:
        "Gol gappa (also known as pani puri) is a popular bite-size chaat consisting of a hollow, crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and flavoured water"
    },
    {
      name: "Veg Biryani",
      rating: "4.5/5",
      about:
        "Veg biryani is an aromatic rice dish made with basmati rice, spices & mixed veggies. "
    },
    {
      name: "Dal Makhni",
      rating: "5/5",
      about:
        "Dal makhani is a classic Indian dish made with whole urad dal, rajma, butter and spices."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Indian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App" style={{ backgroundImage: `url(${food})` }}>
      <h1> Favourite Food 🍣 </h1>
      <p> Checkout my favorite Food Items. Select a genre to get started </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li className="foodName" key={food.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.about} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
