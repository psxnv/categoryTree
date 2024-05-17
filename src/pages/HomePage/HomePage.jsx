import React from 'react';
import styles from './homePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Sidebar/>
        </div>
    );
};

export default HomePage;