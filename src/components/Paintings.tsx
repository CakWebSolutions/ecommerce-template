import React from "react";

export type Painting = {
  id: number;
  paintingname: string;
  artist: string;
  description: string;
  image: string;
  price: string;
};

export const paintings: Painting[] = [
  {
    paintingname: "Into the Walls",
    image: "/thewalls.png",
    id: 1,
    artist: "Joan Popli",
    description: "Oil on canvas, 2020",
    price: "€100",
  },
  {
    paintingname: "Wallowing Breeze",
    image: "/wallowing.png",
    id: 3,
    artist: "Joan Popli",
    description: "Oil on canvas, 2008",
    price: "€100",
  },
  {
    paintingname: "J Resistance",
    image: "/resistance.png",
    id: 4,
    artist: "Joan Popli",
    description: "Gouache on paper, 2019",
    price: "€100",
  },
  {
    paintingname: "Warm Basket",
    image: "/basket.png",
    id: 5,
    artist: "Joan Popli",
    description: "Acrylic on wood, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    id: 6,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    id: 7,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    id: 8,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    id: 9,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    id: 10,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  // Add more testimonials as needed
];
