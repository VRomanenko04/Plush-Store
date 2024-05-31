import React from 'react';
import styles from './LinkButton.module.scss';
import Link from 'next/link';


type Props = {
    link: string
    editionalClass?: string
    btnText: string
}

const LinkButton = ({ link, editionalClass, btnText }: Props) => {
    const btnStyles = `${styles.btn} ${editionalClass}`;

    return (
        <Link href={link} className={btnStyles}>{btnText}</Link>
    )
}

export default LinkButton;