import React from 'react';
import styles from './Popup.module.scss';


type Props = {
    isOpen: boolean
    children: React.ReactNode
}


const Popup = ({ isOpen, children }: Props) => {
    const modalClass = `${styles.modal} ${isOpen && styles.modal_open}`
    const backgroundClass = `${styles.background} ${isOpen && styles.background_open}`

    return (
        <div className={backgroundClass}>
            <div className={modalClass}>
                {children}
            </div>
        </div>
    )
}

export default Popup;