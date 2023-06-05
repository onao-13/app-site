import styles from '../../../styles/components/card/content/post/post-card.module.css';
import Image from 'next/image';
import filter from '../../../styles/filter/white/color-filter-white.module.css';

export default function PostCard({ title, description, iconUrl }) {
    return (
        <div className={styles.box_post_card}>
            <div className={styles.post_card}>
                <Image 
                    src={iconUrl}
                    width={240}
                    height={160}
                    alt=""
                />
                <div className={styles.content}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>  
            <div className={styles.box_button}> 
                <button className={styles.button}>
                    <span className={styles.read_more}>
                        <p>Читать далее</p>
                        <Image 
                            src={"arrow-right.svg"}
                            width={24}
                            height={22}
                            alt=""
                            className={filter.color_filter_white}
                        />
                    </span>
                    <span className={styles.icon}>
                        <Image 
                            src="button/pattern.svg"
                            width={84}
                            height={0}
                            alt=""
                            style={{ 
                                height: '100%',
                                float: 'right'
                             }}
                        />
                    </span>
                </button>
            </div>
        </div>
    );
}