import styles from '../../../styles/components/banner/start/banner.module.css';
import Image from 'next/image';
import PagePaddings from '../../global/paddings';

export default function StarterBanner({ 
    mainImageUrl, topCenterUrl, 
    leftMiddleUrl, rightMiddleUrl, 
    bottomCenterUrl, bottomRightTopUrl  
}) {
    return (
        <div className={styles.start_banner}>
            <div className={styles.images}>
                <div className={styles.left}>
                    <Image
                        src={mainImageUrl}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '550px' }}
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.top_center}>
                        <Image
                            src={topCenterUrl}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className={styles.top_right}>
                        <div className={styles.box}></div>
                    </div>
                    <div className={styles.top_left}></div>
                    <div className={styles.middle_left}>
                        <Image
                            src={leftMiddleUrl}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className={styles.middle_right}>
                        <Image
                            src={rightMiddleUrl}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className={styles.bottom_left}>
                        <div className={styles.box}></div>
                    </div>
                    <div className={styles.bottom_center}>
                        <Image
                            src={bottomCenterUrl}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className={styles.bottom_right_top}>
                        <Image
                            src={bottomRightTopUrl}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className={styles.bottom_right_bottom}>
                        <div className={styles.box}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}