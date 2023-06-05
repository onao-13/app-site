import Modal from 'react-modal';
import styles from '../../../styles/components/dialog/auth/auth-dialog.module.css';
import { useEffect, useState } from 'react';
import SignIn from './signin';
import SignUp from './signup';

export default function AuthDialog({ isOpen, close }) {
    let [isLoginPage, changedPage] = useState(true)

    useEffect(() => {
        if (isOpen === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={close}
            className={styles.auth_dialog}
            style={{
                overlay: {
                    backgroundColor: "transparent",
                    zIndex: 100
                }
            }}
            closeTimeoutMS={400}
        >
            <div className={styles.box}>
                {isLoginPage === true ? 
                    <SignIn changeScreen={() => changedPage(false)} /> 
                    : <SignUp changeScreen={() => changedPage(true)} />}
            </div>
            {/* <button onClick={close}>Закрыть</button> */}
        </Modal>
    );
}