import styles from '../../styles/components/button/bubble/bubble-button.module.css';
import Image from 'next/image';
import filter from '../../styles/filter/white/color-filter-white.module.css';

export default function BubbleButton({ text }) {
    return (
        <div className={styles.bubble_button}>
            <div className={styles.bubble}>
                <div className={styles.box}>
                    <Image
                        src="/arrow-right.svg"
                        alt=""    
                        width={24}
                        height={24}
                        className={filter.color_filter_white}
                    />
                </div>
            </div>
            <button className={styles.button} onClick={() => console.log("click")}>{text}</button>
        </div>
    )
}