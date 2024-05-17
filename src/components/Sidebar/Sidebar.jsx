import React from 'react';
import styles from './sidebar.module.scss'

import ItemsList from '../ItemsList/ItemsList';
import { data } from '../../data'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}> 
            <ItemsList list={data}/>
        </div>
    );
};

export default Sidebar;