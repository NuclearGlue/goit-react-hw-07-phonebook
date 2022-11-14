import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filtersSlice';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <label className="filter">
      Find contacts by name
      <input
        className="filter__field"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
}
