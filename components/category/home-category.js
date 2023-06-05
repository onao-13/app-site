import styles from '../../styles/components/category/home/home-category.module.css';
import BubbleButton from '../button/button-with-bubble';

/**
 * 
 * @param {String} categoryName - name of category
 * @param {String} mainTitle - big title category
 * @param {String} type - view type. Set "column" or "row".
 * @param children - content in category 
 * @param {Boolean} showButton - show bubble button
 * @param {String} buttonText - text in button
 * @returns 
 */
export default function HomeCategory({ categoryName, mainTitle, type, showButton, buttonText, children }) {
    let lastWord = mainTitle.split(" ").pop();
    let firstWordString = deleteLastWordInString(mainTitle)

    if (showButton === true) {
        return (
            <div className={styles.home_category + " " + styles[`${type}`]}>
                <div className={styles.category_title}>
                    <div className={styles.left}>
                        <div className={styles.category_name}>{categoryName}</div>
                        <p className={styles.main_title}>{firstWordString} <span className={styles.last}>{lastWord}</span></p>
                    </div>
                    <div className={styles.right}>
                        <BubbleButton text={buttonText} />
                    </div>
                </div>
                <div className={styles.category_content}>{children}</div>
            </div>
        )
    } 
    else {
        return (
            <div className={styles.home_category + " " + styles[`${type}`]}>
                <div className={styles.category_title}>
                    <div className={styles.left}>
                        <div className={styles.category_name}>{categoryName}</div>
                        <p className={styles.main_title}>{firstWordString} <span className={styles.last}>{lastWord}</span></p>
                    </div>
                </div>
                <div className={styles.category_content}>{children}</div>
            </div>
        )

    }
}

function deleteLastWordInString(text) {
    var wordsArr = text.split(" ");
    delete  wordsArr.pop();

    var string = "";
    wordsArr.forEach(word => {
        string += word + " "
    });
    return string;
}