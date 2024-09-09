import React from 'react'

export default function SearchBar({ changeFilteredProducts, changeInStockOnly, filteredProds, inStockOnly }) {
    
    
    return (
        <div className="searchbar-div">
<form id='search-bar'>
            <input type="text" placeholder="Search..."
                value={filteredProds}
                onChange={(e)=> changeFilteredProducts(e.target.value)}

                />
                <div className="searchbar-label">
                <label>
                <input type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) =>changeInStockOnly(e.target.checked)}
                />
            {' '}
            Only show products in stock
          </label>
                </div>
          
        </form>
        </div>
        
      );
}

