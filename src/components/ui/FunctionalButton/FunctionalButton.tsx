import React from 'react';
import styles from './FunctionalButton.module.scss';

type Props = {
    event: () => void
    editionalClass?: string
    btnText: string
}

const FunctionalButton = ({ event, btnText, editionalClass }: Props) => {
    const btnClass = `${styles.btn} ${editionalClass}`

    return (
        <button onClick={event} className={btnClass}>{btnText}</button>
    )
}

export default FunctionalButton;