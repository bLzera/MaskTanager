import { useState } from 'react';

type Props = {
    children: React.ReactNode;
    onClickModal: () => void;
}

export const ModalWrapper = ({ children, onClickModal }: Props) => (
    <div className='ModalWrapper'>
        <div className='ModalCover' onClick={onClickModal}></div>
        <div className="ModalContainer">
            {children}
        </div>    
    </div>
);