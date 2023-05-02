import React from 'react';

// import navigation data
import { navigationData } from '../../Data/data';

const Nav = () => {
  return (
    <navhom>
      <ul className='flex gap-x-10 max-xl:30px h5 mb-1'>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </navhom>
  );
};

export default Nav;
