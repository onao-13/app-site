import styles from "../../styles/components/header/header.module.css";
import SigninButton from "../button/signin-button";
import Search from "../input/search";
import AuthDialog from '../dialog/auth/auth-dialog';
import { useState } from 'react';

export default function Header() {
    let [isOpen, setOpen] = useState(false);

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.icon}>
                    
                </div>
                <div className={styles.menu}>
                    <a href="">Все</a>
                    <a href="">Игры</a>
                    <a href="">О сайте</a>
                    <a href="">Фандомы</a>
                    <a href="">Гайды</a>
                </div>
                <Search />
                <SigninButton openAuthWindow={() => setOpen(true)} />
            </header>
            <AuthDialog 
                isOpen={isOpen}
                close={() =>  setOpen(false)}
            />
        </div>
    );
}