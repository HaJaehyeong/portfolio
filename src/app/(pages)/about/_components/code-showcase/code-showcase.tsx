import CodeBox from '@/components/codebox/codebox';
import styles from './code-showcase.module.scss';
import AboutCodeShowcaseCodeBox from '../code-showcase-codebox/code-showcase-codebox';

const AboutCodeShowcase: React.FC = () => {
  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.title}>{'// Code snippet showcase:'}</div>
      <AboutCodeShowcaseCodeBox detail="최근 1년간 바로팩토리 및 정부 R&D과제를 Next.js Framework를 이용해 개발을 진행했습니다.">
        <CodeBox
          code={`type AdminLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
          
const AdminLayout: React.FC<AdminLayoutProps> = async ({ children }) => {
  const token = await getCookieValue('token');
          
  return (
    <StoreProvider token={token}>
      {/* 생략 */}
    </StoreProvider>
  );
};
          
export default AdminLayout;`}
        />
      </AboutCodeShowcaseCodeBox>
      <AboutCodeShowcaseCodeBox detail="일본에서는 퍼블리셔라는 포지션이 없었기 때문에 퍼블리싱도 프론트엔드 개발자가 담당 했었습니다. 또한, 한국에서 Next.js로 개발할 때도 동일하게 사내 퍼블리셔가 없었기 때문에 퍼블리싱까지 담당한 경험이 있습니다.">
        <CodeBox
          code={`.header-title {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__title {
    color: var(--text-primary);
    font-size: 34px;
    font-weight: 700;
  }

  &__sub-title {
    color: var(--text-secondary);
    font-size: 14px;
  }
}`}
        />
      </AboutCodeShowcaseCodeBox>
    </div>
  );
};

export default AboutCodeShowcase;
