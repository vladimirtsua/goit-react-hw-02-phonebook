import React from 'react';
import styles from './filter.module.css';
const Filter = ({ value, onChange }) => {
	return <input className={styles.search} type="text" value={value} placeholder="Search" onChange={onChange} />;
};
export default Filter;