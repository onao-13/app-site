import styles from '../../styles/components/list/list.module.css';

export default function List({ children }) {
    return <div className={styles.list}>{children}</div>;
}

// export default function List({ content }) {
//     return <div className={styles.list}>{content}</div>;
// }