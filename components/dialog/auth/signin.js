import { useEffect } from 'react';
import styles from '../../../styles/components/dialog/auth/signin/signin.module.scss';
import Link from 'next/link';
import { signIn } from '../../../api/auth/auth';
import { getActiveJwtToken } from '../../../store/token-store';
import { useRouter } from 'next/router';

export default function SignIn({ changeScreen }) {
    let router = useRouter();

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
                </form>
                <button onClick={async () => {
                    let res = await sendSigninData();

                    if (res) {
                    
                        router.push('/user/home');
                    } else {
                        
                    }
                }
                }>Войти</button>
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

    return signIn(email, password);
}

