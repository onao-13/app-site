import styles from '../../styles/components/chip/category-chip.module.scss';

export default function CategoryChip({ isDark, name, link}) {
    let style
    if (isDark === true) {
        style = "dark"
    } else {
        style = "light"
    }
    return (
        <div className={styles.chip + " " + styles[style]}>
            <a href={link}>{name}</a>
        </div>
    )
}