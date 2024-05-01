import React from 'react';
import { useState } from 'react';
import ItemsList from '../ItemsList/ItemsList';
import styles from './Item.scss';

// import minus from '../icons/coolicon.svg'
// import plus from '../icons/plus.svg'

const Item = ({ item: { name, subItems = null } }) => {
    const [showSubItems, setShowSubItems] = useState(false);

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.item}>
                {subItems && (
                    <button className={styles.itemButton}
                        onClick={() => setShowSubItems(!showSubItems)}>
                        {/* {showSubItems ? <img className={styles.icon} src={minus} alt="минус" /> : <img className={styles.icon} src={plus} alt="плюс" />} */}
                        {showSubItems ? '-' : '+' }
                    </button>
                )}
                <span
                    className={styles.name}
                    onDoubleClick={() => setShowSubItems(!showSubItems)}
                >
                    {name}
                </span>
            </div>
            {showSubItems && <ItemsList list={subItems} />}
        </div>

    );
};

export default Item;