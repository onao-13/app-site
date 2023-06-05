import styles from '../../styles/components/button/signin/signin-button.module.css';
import Image from 'next/image';


export default function SigninButton({ openAuthWindow }) {
    return (
        <div>
            <button className={styles.signin} onClick={openAuthWindow}>
                <span>
                    <Image 
                        src="icon/user-icon.svg"
                        width={45}
                        height={45}
                        alt=''
                    />
                </span>
                <p>Войти</p>
            </button>
        </div>
    )
}