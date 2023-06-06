import { useEffect } from 'react';
import styles from '../../../styles/components/dialog/auth/signin/signin.module.css';
import Link from 'next/link';
import { signIn } from '../../../api/auth/auth';

export default function SignIn({ changeScreen }) {
    return (
        <div className={styles.signin}>
            <div className={styles.left}>
                <p className={styles.title}>Вход</p>
                <form>
                    <div className={styles.input}>
                        <span>Почта</span>
                        <input id="email"></input>
                    </div>
                    <div className={styles.input}>
                        <span>Пароль</span>
                        <input id="password"></input>
                    </div>
                    <Link href="" className={styles.forgot_password}>
                        Не помнишь пароль?
                    </Link>
                    {/* <p className={styles.forgot_password}></p> */}
                    <button onClick={() => {
                        sendSigninData()
                    }
                    }>Войти</button>
                </form>
                <button 
                    className={styles.not_account}
                    onClick={changeScreen}
                >
                    У меня нет аккаунта
                </button>
            </div>
            <div className={styles.right}>
            </div>
        </div>
    );
}

function sendSigninData() {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    async () => signIn(email, password);
    // console.log("Email: " + email + ", Password: " + password);
}

