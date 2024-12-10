import styles from './modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className={styles.modalBackground}>
      <section className={styles.modalWrapper}>
        Close modal
        {children}
      </section>
    </div>
  );
};

export default Modal;
