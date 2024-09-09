import React from 'react'
import ProductRow from './ProductRow'

export default function ProductsTable({products, filteredProds, inStockOnly}) {
  //create empty array to store each product row
  const rows = []
  //map through all products and display rows for each prod
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filteredProds.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.inStock) {
      return;
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.id} />
    );
  })
    


  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
  )
}
