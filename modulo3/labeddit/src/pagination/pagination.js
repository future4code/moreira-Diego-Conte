import React from 'react';

const maxItens = 9;
const maxItensLeft = (maxItens - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {

    const currentPage = offset ? offset / limit + 1 : 1;
    const totalPages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - maxItensLeft, 1);

    return (
        <ul>
            {Array.from({ length: maxItens })
                .map((_, index) => index + firstPage)
                .map((page) => (
                    <li>
                        <button onClick={() => setOffset((page - 1) * limit)}> {page} </button>
                    </li>
                ))}
        </ul>
    )
}

export default Pagination;