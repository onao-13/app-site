import styles from '../../styles/text/title/title-start-text.module.scss';

export default function TitleStartText({ blockText1, fandom, blockText2, position }) {
    return (
        <h1 className={styles.text_title_start}>
            {blockText1}
            <span className={styles.fandom}>{fandom}</span> 
            {blockText2}
            <span className={styles.position}>{position}</span>
        </h1>
    )
}