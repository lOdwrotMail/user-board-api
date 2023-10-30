import { Color } from "../model";
import { QueryParams } from "../type";

const getAll = ({
  perPage,
  pageNumber,
  order,
  orderBy
}: Required<QueryParams>) => {
  return Color.findAndCountAll({
    limit: perPage,
    offset: perPage * pageNumber,
    order: [
      [orderBy, order]
    ]
  });
};

export const colorService = { getAll };
