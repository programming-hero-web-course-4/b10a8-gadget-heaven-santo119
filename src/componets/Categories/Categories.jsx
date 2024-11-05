
import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-lifted gap-3 w-3/4">
           
           {
            categories.map((category) =>(
                <NavLink key={category.category} to={`/category/${category.category}`}
                role='tab' className={({isActive}) => `tab text-2xl ${isActive? 'tab-active' : ''}`}>
                    {category.category}
                </NavLink>
            ) )
           }
            
        </div>
    );
};

export default Categories;
