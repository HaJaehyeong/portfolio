'use client';
import { RiCloseLine } from '@remixicon/react';
import styles from './modal.module.scss';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles['modal']}>
      <section className={styles['modal__body']}>
        <RiCloseLine className={styles['modal__body__close']} onClick={() => router.back()} />
        {children}
      </section>
    </div>
  );
};

export default Modal;
