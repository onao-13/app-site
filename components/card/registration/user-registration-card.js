import styles from '../../../styles/components/card/user-registration/user-registration-card.module.css';
import Image from 'next/image';

export default function UserRegistrationCard({ openAuthWindow }) {
    return (
        <div className={styles.box_card}>
            <div className={styles.user_card}>
                <div className={styles.label_user_card}><p>Карточка участника</p></div>
                <div className={styles.box_content}>
                    <Image 
                        src="/icon/user-icon.svg"
                        width={100}
                        height={100}
                        alt=''
                        className={styles.icon}
                    />
                    <span className={styles.nickname}>Твой будущий ник</span>
                </div>
            </div>
            <div className={styles.box_button}>
                <button className={styles.button} onClick={openAuthWindow} ><p>Начать путешествие</p></button>
            </div>
        </div>
    );
}