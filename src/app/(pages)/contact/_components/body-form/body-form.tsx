'use client';
import CtaButton from '@/ui/cta-button/cta-button';
import styles from './body-form.module.scss';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast, { ToastOptions, Toaster } from 'react-hot-toast';

const ContactMeBodyForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const toastOptions: ToastOptions = {
    duration: 5000,
    position: 'bottom-right',
    style: {
      border: '1px solid var(--secondary-gray)',
      color: 'var(--secondary-gray)',
      backgroundColor: 'var(--primary-black-3)',
    },
  };

  // NOTE(hajae): server side에서 action을 사용하려 했으나 email js자체가 browser 환경에서 동작하도록 설계된 라이브러리이므로
  // 실행 환경이 브라우저가 아닌 Node.js에서 실행할 수 없으므로 이와같이 작성
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration');
      }
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (_) => {
          toast.success('Email sent successfully!!', toastOptions);
          form.current?.reset();
        },
        (error) => {
          toast.error('Sorry,, Error sending email..', toastOptions);
          console.error('Error sending email: ', error.message);
        }
      );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles['form']}>
      <div className={styles['form__item']}>
        <label htmlFor="">_name</label>
        <input type="text" name="from_name" required />
      </div>
      <div className={styles['form__item']}>
        <label htmlFor="">_email</label>
        <input type="email" name="from_email" required />
      </div>
      <div className={styles['form__item']}>
        <label htmlFor="">_message</label>
        <textarea name="message" required />
      </div>
      <div>
        <CtaButton value="submit-message" submit />
      </div>
      <Toaster />
    </form>
  );
};

export default ContactMeBodyForm;
