import React from 'react'

export default function ProductRow({product}) {
//if stocked is true : display product name else display name in red.
  const name = product.inStock ? product.name :
  <span style={{ color: 'red' }}>
    {product.name}
  </span>;

return (
  <tr>
    <td>{name}</td>
    <td>{product.price}</td>
  </tr>
);
}
