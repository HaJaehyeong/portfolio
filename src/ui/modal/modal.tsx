'use client';
import { RiCloseLine } from '@remixicon/react';
import styles from './modal.module.scss';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  // NOTE(hajae): 이벤트 버블링 방지
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles['modal']} onClick={() => router.back()}>
      <section className={styles['modal__body']} onClick={stopPropagation}>
        <RiCloseLine className={styles['modal__body__close']} onClick={() => router.back()} />
        {children}
      </section>
    </div>
  );
};

export default Modal;
