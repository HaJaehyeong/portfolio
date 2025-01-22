'use server';
import emailjs from 'emailjs-com';

/* NOTE(hajae):
 * 처음 설계는 아래와 같이 사용하려 했으나 email.js 라이브러리 자체가
 * browser 환경에서 동작하도록 설계된 라이브러리이므로
 * 실행 환경이 브라우저가 아닌 Node.js에서 실행할 수 없으므로 사용하지 않음
 */

export const sendEmail = async (formData: FormData): Promise<void> => {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Missing EmailJS configuration');
  }

  const params = {
    from_name: formData.get('from_name') as string,
    from_email: formData.get('from_email') as string,
    message: formData.get('message') as string,

    to_name: 'Ha Jaheyeong',
    to_email: 'hajae305@gmail.com',
  };

  console.log('params: ', params);

  await emailjs.send(serviceId, templateId, params, publicKey).then(
    (response) => {
      console.log('Email sent successfully: ', response);
    },
    (error) => {
      console.error('Error sending email: ', error);
      throw new Error('Failed to send email');
    }
  );
};
