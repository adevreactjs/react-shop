import React from 'react';
import cl from './SortList.module.css';

const SortList = ({ option, defaultValue, value, onChange }) => {
  return (
    <select className={cl.selectSort} value={value} onChange={e => onChange(e.target.value)}>
      <option disabled value=''>
        {defaultValue}
      </option>
      {option.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SortList;
