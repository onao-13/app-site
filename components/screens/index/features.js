import styles from '../../../styles/screens/index/features/features.module.css';
import Image from 'next/image';

export default function PlatformFeatures() {
    return (
        <div className={styles.features_platform}>
            <div className={styles.image}>
                <Image 
                    src={""}
                    width={0}    
                    height={0}
                    alt=""
                    sizes="100vw"
                    style={{width: '100%', height: '450px'}}
                />
            </div>
            <div className={styles.features}>
                <ul>
                    <li>
                        <Image 
                            src={"/list/icon-cross.svg"}
                            width={24}
                            height={24}
                            alt=""
                        />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac posuere felis. Integer a risus nisl. Nulla viverra interdum mi, vitae congue massa. Aenean vestibulum ultricies lobortis. Donec sodales nec eros sit amet congue. Nullam ultricies mollis nulla a facilisis. Phasellus id iaculis purus. In eget dolor eu nulla placerat mattis.
                    </li>
                    <li>
                        <Image
                            src={"list/icon-rectangle.svg"}
                            width={24}
                            height={24}
                            alt=""
                        />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac posuere felis. Integer a risus nisl. Nulla viverra interdum mi, vitae congue massa. Aenean vestibulum ultricies lobortis. Donec sodales nec eros sit amet congue. Nullam ultricies mollis nulla a facilisis. Phasellus id iaculis purus. In eget dolor eu nulla placerat mattis.
                    </li>
                    <li>
                        <Image
                            src={"list/icon-polygon.svg"}
                            width={24}
                            height={24}
                            alt=""
                        />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac posuere felis. Integer a risus nisl. Nulla viverra interdum mi, vitae congue massa. Aenean vestibulum ultricies lobortis. Donec sodales nec eros sit amet congue. Nullam ultricies mollis nulla a facilisis. Phasellus id iaculis purus. In eget dolor eu nulla placerat mattis.
                    </li>
                </ul>
            </div>
        </div>
    );
}