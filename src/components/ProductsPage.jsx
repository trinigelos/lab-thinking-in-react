import React from 'react'
import { useState } from  'react';
import jsonData from '..//data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';
import "./ProductsPage.css"

export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filteredProds, setFilteredProds] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false);

    
    return(
    
        <div className='product-page'>
    
            <h1>Root Store</h1>
            <div className="searchbar">
            <SearchBar
                filteredProds={filteredProds}
                inStockOnly={inStockOnly}
                changeFilteredProducts={setFilteredProds}
                changeInStockOnly = {setInStockOnly}
                
            />
            </div>
            <div className="productstable">
                
            <ProductsTable
                products={products}
                filteredProds={filteredProds}
                inStockOnly={inStockOnly}
            
            />
         </div>
    </div>
    
    )
}



  

