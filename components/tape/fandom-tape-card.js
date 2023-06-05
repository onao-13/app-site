import Image from "next/image";
import styles from '../../styles/components/tape/popular-fandoms/card/fandom-tape-card.module.css';

export default function FandomTapeCard({ name, iconUrl }) {
    return (
        <div className={styles.tape_card}>
            <Image 
                src={iconUrl}
                width={360}
                height={360}
                alt=""
            />
            <div className={styles.tape_name}>{name}</div>
        </div>
        // <div className={"tape_box"} style={{width: '0px', height: '0px'}}>
        // </div>
    );
}