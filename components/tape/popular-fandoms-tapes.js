import anime from "animejs";
import styles from '../../styles/components/tape/popular-fandoms/popular-fandoms-tapes.module.scss';
import FandomTapeCard from "./fandom-tape-card";
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";

export default function PopularFandomsTapes() {
    // useEffect(() => {
    //     anime({
    //         targets: '.tape_box',
    //         translateX: 1200,
    //         translateY: [0, -200],
    //         easing: 'easeInOutExpo',
    //         // loop: true,
    //     });
    // })
    
    return (
        <div className={styles.tapes}>
            <div className={styles.top_tape}>
                <Marquee
                    direction="right"
                    speed={100}
                >
                    <div className={styles.gap}>
                        <FandomTapeCard
                            name={"test"}
                        />
                        <FandomTapeCard
                            name={"test"}
                        />
                        <FandomTapeCard
                            name={"test"}
                        />
                        <FandomTapeCard
                            name={"test"}
                        />
                    </div>
                </Marquee>
            </div>
            <div className={styles.bottom_tape}>
                <Marquee
                    direction="left"
                    speed={100}
                    id={2}
                >
                    <div className={styles.gap}>
                        <FandomTapeCard
                            name={"test"}
                        />
                        <FandomTapeCard
                            name={"test"}
                        />
                        <FandomTapeCard
                            name={"test"}
                        />
                        <FandomTapeCard
                            name={"test"}
                        />
                    </div>
                </Marquee>
            </div>
        </div>
    );
}