/* NOTE(hajae): Parallel Routes + Intercepting Routes를 사용했었으나
 * next export(output: export)로 정적페이지를 생성할때 generateStaticParams를 인식하지 못하는 버그가 있음
 * 따라서 해당 패턴이 아닌 modal을 표시하도록 수정예정
 */
const DetailDefault: React.FC = () => {
  return <></>;
};

export default DetailDefault;
