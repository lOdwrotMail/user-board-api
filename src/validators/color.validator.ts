import { QueryParams } from "../type";

const checkQueryParams = ({
    perPage,
    pageNumber,
    order,
    orderBy,
}: QueryParams) => {
    if (perPage && Number.isNaN(Number(perPage))) {
        throw new Error('Invalid perPage value');
    }

    if (pageNumber && Number.isNaN(Number(pageNumber))) {
        throw new Error('Invalid perPage value');
    }

    if (order && (order !== 'ASC' && order !== 'DESC')) {
        throw new Error('Invalid order value');
    }

    if (orderBy && (orderBy !== 'name')) {
        throw new Error('Invalid orderBy value');
    }
}

export const colorValidator = { checkQueryParams };