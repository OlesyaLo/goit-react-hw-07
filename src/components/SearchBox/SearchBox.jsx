import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search for..."
      />
    </div>
  );
}
