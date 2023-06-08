import styles from '../../styles/components/padding/page-paddings.module.scss';

export default function PagePaddings({ children }) {
    return <div className={styles.paddings}>{children}</div> 
}