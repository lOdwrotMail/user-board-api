import { Color } from "../type";

export const colors: Color[] = [
  { id: 1, name: "Black" },
  { id: 2, name: "DeepPink" },
  { id: 3, name: "Red" },
  { id: 4, name: "Aquamarine" },
  { id: 5, name: "Gold" },
  { id: 6, name: "YellowGreen" },
  { id: 7, name: "Yellow" },
];

const getAll = () => {
  return colors;
};

const getById = (colorId: number) => {
  return colors.find((v) => v.id === colorId);
};

export const colorService = { getAll, getById };
