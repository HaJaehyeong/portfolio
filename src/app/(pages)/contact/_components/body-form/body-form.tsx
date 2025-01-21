'use client';
import CtaButton from '@/ui/cta-button/cta-button';
import styles from './body-form.module.scss';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMeBodyForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration');
      }

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (response) => {
          console.log('Email sent successfully: ', response);
        },
        (error) => {
          console.error('Error sending email: ', error);
          throw new Error('Failed to send email');
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
    </form>
  );
};

export default ContactMeBodyForm;
