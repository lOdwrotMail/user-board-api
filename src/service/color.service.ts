import { Color } from "../model";

const getAll = () => {
  return Color.findAll();
};

export const colorService = { getAll };
