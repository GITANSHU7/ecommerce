import React from 'react'

const LocalSearch = () => {
 return (
     <div className="container pt-4 pb-4">
  <input type= "search" 
         placeholder="filter"
         value={keyword}
            onChange={handleSearchChange}
            className="form-control mb-4"
                />
     </div>
 )
}

export default LocalSearch;