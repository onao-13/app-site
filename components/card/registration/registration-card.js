import styles from '../../../styles/components/card/registration/registration-card.module.scss';
import UserRegistrationCard from './user-registration-card';
import AuthDialog from '../../dialog/auth/auth-dialog';
import { useState } from 'react';

export default function RegistrationCard() {
    let [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div className={styles.registration_card}>
                <div className={styles.background}>
                    <div className={styles.title}>Прикоснитесь к любимым фандомам уже сейчас</div>
                    <UserRegistrationCard openAuthWindow={() => setOpen(true)} />
                </div>
            </div>
            <AuthDialog
                isOpen={isOpen}
                close={() => setOpen(false)}
            />
        </div>
    );
}