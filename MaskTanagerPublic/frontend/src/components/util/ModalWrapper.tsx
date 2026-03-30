import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClickModal: () => void;
}

export const ModalWrapper = ({ children, onClickModal, isOpen }: Props) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div 
                className='ModalWrapper'
                key='modal'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}    
                transition={{duration: 1}}
            >
                <motion.div className='ModalCover' onClick={onClickModal}></motion.div>
                <motion.div className="ModalContainer">
                    {children}
                </motion.div>    
            </motion.div>
        )}
    </AnimatePresence>
);