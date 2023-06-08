import styles from  '../../styles/components/input/search.module.scss';
import Image from 'next/image';
import Script from "next/script";

// TODO: ADD SENDING TEXT TO SERVER API
export default function Search(text) {
    return (
        <div className={styles.search}>
            <Image
                priority
                src="/search.svg"
                width={24}
                height={24}
                alt=""
                className={styles.icon}
            ></Image>
            <input type="text" className={styles.input} 
                placeholder={"Найди свой фандом!"}>
            </input>
        </div>
    );
}