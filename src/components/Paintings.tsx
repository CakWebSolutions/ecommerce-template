import React from "react";

export type Painting = {
  id: number;
  paintingname: string;
  artist: string;
  description: string;
  image: string;
  price: string;
  imageClassName: string;
  divClassPrice: string;
};

export const paintings: Painting[] = [
  {
    paintingname: "Into the Walls",
    image: "/thewalls.png",
    imageClassName: "w-[200px] h-[200px]",
    divClassPrice: "flex flex-row space-x-[95px] mt-24",
    id: 1,
    artist: "Joan Popli",
    description: "Oil on canvas, 2020",
    price: "€100",
  },
  {
    paintingname: "Wallowing Breeze",
    image: "/wallowing.png",
    imageClassName: "w-[200px] h-[230px] mt-[-15px]",
    divClassPrice: "flex flex-row space-x-[95px] mt-20",
    id: 3,
    artist: "Joan Popli",
    description: "Oil on canvas, 2008",
    price: "€100",
  },
  {
    paintingname: "J Resistance",
    image: "/resistance.png",
    imageClassName: "w-[230px] h-[200px]",
    divClassPrice: "flex flex-row space-x-[125px] mt-24",
    id: 4,
    artist: "Joan Popli",
    description: "Gouache on paper, 2019",
    price: "€100",
  },
  {
    paintingname: "Warm Basket",
    image: "/basket.png",
    imageClassName: "w-[200px] h-[230px] mt-[-15px]",
    divClassPrice: "flex flex-row space-x-[95px] mt-20",
    id: 5,
    artist: "Joan Popli",
    description: "Acrylic on wood, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[200px] h-[200px]",
    divClassPrice: "flex flex-row space-x-[100px] mt-24",
    id: 6,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[220px] h-[220px] mt-[-15px] ",
    divClassPrice: "flex flex-row space-x-[115px] mt-24",
    id: 7,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[200px] h-[200px]",
    divClassPrice: "flex flex-row space-x-[100px] mt-24",
    id: 8,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[220px] h-[220px] mt-[-15px] ",
    divClassPrice: "flex flex-row space-x-[115px] mt-24",
    id: 9,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[200px] h-[200px]",
    divClassPrice: "flex flex-row space-x-[100px] mt-24",
    id: 10,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  // Add more testimonials as needed
];
