import React from 'react';
import styles from './ItemList.scss'


const Item = ({ item: { name, subItems = null } }) => {
    const [showSubItems, setShowSubItems] = React.useState(false);

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

const ItemsList = ({ list = [] }) => {

    if(!list?.length) {
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