import React from 'react';
import styles from './OrderPopup.module.scss';
import Popup from '../Popup';
import FunctionalButton from '@/components/ui/FunctionalButton/FunctionalButton';
import LinkButton from '@/components/ui/LinkButton/LinkButton';

type Props = {
    isOpen: boolean
    setisOpen: React.Dispatch<React.SetStateAction<boolean>>
    itemTitle: string
}

const OrderPopup = ({ isOpen, itemTitle, setisOpen}: Props) => {
    return (
        <Popup isOpen={isOpen}>
            <div className={styles.modal_container}>
                <h6>Товар додано до корзини</h6>
                <p>"{itemTitle}" додано до корзини</p>
                <div className={styles.btns}>
                    <FunctionalButton editionalClass={styles.continue_btn} event={() => setisOpen(false)} btnText='Продовжити покупки'/>
                    <LinkButton editionalClass={styles.order_btn} link='##' btnText='Оформити зараз'/>
                </div>
            </div>
        </Popup>
    )
}

export default OrderPopup;