import React from 'react';
import styles from './ItemList.module.scss'

import minus from '../icons/coolicon.svg'
import plus from '../icons/plus.svg'

const Item = ({ item: { title, subCategories = null } }) => {
    const [showSubItems, setShowSubItems] = React.useState(false);

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.item}>

                {subCategories && (
                    <button 
                        className={styles.itemButton}
                        onClick={() => setShowSubItems(!showSubItems)}>

                        {showSubItems ? <img className={styles.icon} src={minus} alt="минус" /> : <img className={styles.icon} src={plus} alt="плюс" />}

                    </button>
                )}
                
                <span
                    className={styles.name}
                    onDoubleClick={() => setShowSubItems(!showSubItems)}
                >
                    {title}
                </span>
            </div>
            {showSubItems && <ItemsList list={subCategories} />}
        </div>

    );
};

const ItemsList = ({ list = [] }) => {

    if (!list?.length) {
        return null
    }

    return (
        <div className={styles.itemsList}>
            {list?.map((item) => (
                <Item key={item.key} item={item} />
            ))}

        </div>
    )
};

export default ItemsList;