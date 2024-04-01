import React from "react";

export type Painting = {
  id: number;
  paintingname: string;
  artist: string;
  description: string;
  image: string;
  price: string;
  imageClassName: string;
  priceClass: string;
  divClass: string;
  iconsClass: string;
};

export const paintings: Painting[] = [
  {
    paintingname: "Into the Walls",
    image: "/thewalls.png",
    imageClassName: "w-[200px] h-[200px]",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 1,
    priceClass: "mt-2",
    artist: "Joan Popli",
    description: "Oil on canvas, 2020",
    price: "€100",
  },
  {
    paintingname: "Wallowing Breeze",
    image: "/wallowing.png",
    imageClassName: "w-[200px] h-[230px] mt-[-15px] ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 3,
    artist: "Joan Popli",
    description: "Oil on canvas, 2008",
    price: "€100",
  },
  {
    paintingname: "J Resistance",
    image: "/resistance.png",
    imageClassName: "w-[230px] h-[200px] ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 4,
    artist: "Joan Popli",
    description: "Gouache on paper, 2019",
    price: "€100",
  },
  {
    paintingname: "Warm Basket",
    image: "/basket.png",
    imageClassName: "w-[200px] h-[230px] mt-[-15px]  ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 5,
    artist: "Joan Popli",
    description: "Acrylic on wood, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[230px] h-[240px] mt-[-10px] ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 6,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[230px] h-[240px] mt-[-10px] ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 7,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[230px] h-[240px] mt-[-10px] ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 8,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[230px] h-[240px] mt-[-10px] ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 9,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  {
    paintingname: "The Vonnegut",
    image: "/vonnegut.png",
    imageClassName: "w-[230px] h-[240px] mt-[-10px] ml-[15px]",
    priceClass: "mt-2",
    divClass: "flex flex-row space-x-[85px] mt-9",
    iconsClass: "w-[40px] h-[40px]",
    id: 10,
    artist: "Joan Popli",
    description: "Oil on canvas, 2014",
    price: "€100",
  },
  // Add more testimonials as needed
];
