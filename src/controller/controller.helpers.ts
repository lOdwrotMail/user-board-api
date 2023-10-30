import { QueryParams } from "../type";

export const parseParams = (params: QueryParams): Required<QueryParams> => {
  return {
    perPage: params.perPage ? Number(params.perPage) : 5,
    pageNumber: params.pageNumber ? Number(params.pageNumber) : 0,
    order: params.order || "ASC",
    orderBy: params.orderBy || "id",
  };
};
