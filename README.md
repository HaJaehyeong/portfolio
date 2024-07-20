> 해당 Design 및 Style Guide는 Figma에 Ynaka Darelova님이 만들어 공개중인 디자인을 이용했습니다.

# 공용 컴포넌트 사용법

## IconBox (아이콘 박스)

![icon box component design](/src/public/readmeImages/iconbox-preview.png)

### 설명

해당 Figma 디자인으로만 봤을 때, 사용 기술의 표기를 위해 사용되는 컴포넌트처럼 보임. 따라서

1. 파라미터로 기술 이름을 넘겨줬을 때 거기에 맞는 배경색과 아이콘을 표시를 할지
2. 아이콘, 배경색상 아이콘 사이즈 등을 받아서 범용성 있게 사용할 수 있도록 할지

고민을 하였지만 해당 프로젝트에서는 사용 기술 표기용으로 보였기 때문에 <strong>1번</strong> 으로 진행

#### 호출

```tsx
<IconBox icon=${아이콘코드명} />
<IconBox icon="react" />
<IconBox icon="html5" />
<IconBox icon="vue" />
<IconBox icon="css" />
```

#### 결과

![icon box print result](/src/public/readmeImages/iconbox-result.png)

#### 현재 호출 가능한 아이콘 코드명

```tsx
const TechnologyCode = {
  react: 'react',
  html5: 'html5',
  vue: 'vue',
  css: 'css',
  flutter: 'flutter',
  angular: 'angular',
  variant5: 'variant5',
  nextjs: 'nextjs',
};
type TechnologyCode = (typeof TechnologyCode)[keyof typeof TechnologyCode];
```

<br/><br/><br/>

## TechnologyLogo (기술 로고)

![technology logo component design](/src/public/readmeImages/technology-preview.png)

### 설명

IconBox와 동일

#### 호출

```tsx
<TechnologyLogo icon="react" />
<TechnologyLogo icon="html5" />
<TechnologyLogo icon="angular" size={50} />
```

#### 결과

![technology logo print result](/src/public/readmeImages/technology-result.png)

#### 현재 호출 가능한 아이콘 코드명

IconBox와 동일

<br/><br/><br/>

## HeaderText

<img src="/src/public/readmeImages/headertext-preview.png" alt="header text component design" height="300">

### 설명

header에 추가될 tab component

#### 호출

```tsx
// NOTE(hajae): tabs -> string[]
{
  tabs.map((tab, index) => (
    <HeaderText key={tab + index} text={tab} isSelected={tab === activeTab} handleClick={() => setActiveTab(tab)} />
  ));
}
```

#### 결과

<img src="/src/public/readmeImages/headertext-result.png" alt="header text print result" height="100">

<br/><br/><br/>

## Checkbox

<img src="/src/public/readmeImages/checkbox-preview.png" alt="checkbox component design" height="300">

### 설명

체크박스이다... <br/> 스타일을 글로벌로 적용해놨기 때문에 해당 컴포넌트가 아니라 `<input type='checkbox' ...`를 이용해도
된다.

#### 호출

```tsx
const [checked, setChecked] = useState(false);

return (
  // NOTE(hajae): 예시, div의 style도 결과 화면을 보여주기 위한 임시 style이다.
  <div onClick={() => setChecked(!checked)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Checkbox checked={checked} />
    <Checkbox checked={false} />
    <Checkbox checked={true} />
    <Checkbox checked />
    <Checkbox />
  </div>
);
```

#### 결과

<img src="/src/public/readmeImages/checkbox-result.png" alt="checkbox print result" height="200">

(첫번째는 포커스된 checkbox)

<br/><br/><br/>

## Star

<img src="/src/public/readmeImages/star-preview.png" alt="star component design" height="150">

### 설명

빈 별, 채워진 별을 출력하는 컴포넌트

#### 호출

```tsx
// NOTE(hajae): default fill: false, size: 18
<Star />
<Star fill />
<Star fill size={22} />
```

#### 결과

![star print result](/src/public/readmeImages/star-result.png)

<br/><br/><br/>

## TechnologiesRow

<img src="/src/public/readmeImages/technologiesrow-preview.png" alt="technologiesRow component design" height="200">

### 설명

체크박스, 기술 아이콘, 기술 명을 표시하는 Row

#### 호출

```tsx
// NOTE(hajae): Enums.Technology.values는 현재 표기가능한 모든 tech 객체가 들어있다.
// TechCodesType -> 'react' | 'html5' | 'vue' | 'css' | 'flutter' | 'angular' | 'variant5' | 'nextjs';
<>
  {Enums.Technology.values.map((tech) => (
    <TechnologiesRow tech={tech.code as TechCodesType} checked />
  ))}
</>
```

#### 결과

<img src="/src/public/readmeImages/technologiesrow-result.png" alt="technologiesRow print result" height="300">

<br/><br/><br/>

## SocialMedia

<img src="/src/public/readmeImages/socialmedia-preview.png" alt="SocialMedia component design" height="150">

### 설명

소셜미디어의 로고를 표시 <br/> (제가 사용하는 것만 추가... `github`, `blog`, `insta`)

#### 호출

```tsx
<SocialMedia value="github" />
<SocialMedia value="blog" size={28} />
<SocialMedia value="insta" size={30} />
```

#### 결과

![SocialMedia print result](/src/public/readmeImages/socialmedia-result.png)

<br/><br/><br/>

## Comments

<img src="/src/public/readmeImages/comments-preview.png" alt="SocialMedia component design" height="150">

### 설명

매우 간단하게 타이틀과 Body 텍스트를 표시할 수 있는 Component

#### 호출

```tsx
<Comments title="Developer note" body="Text here." />
```

#### 결과

<img src="/src/public/readmeImages/comments-result.png" alt="SocialMedia component design" height="150">

<br/><br/><br/>

## Header

![Header component design](/src/public/readmeImages/header-preview.png)

### 설명

Header를 작성하면서 아래와 같은 이유로 CSR을 이용하기로 했다. <br/> (초기 컴포넌트 작업으로 추후 변경될 가능성은 있으나
현재는 대부분의 컴포넌트 모두 CSR로 작성 예정)

- Tab 이동시 화면이 번쩍하는 새로고침을 없애기 위해
- 그렇게 크게 무겁지 않을 프로젝트
- 구글검색엔진(SEO)에 노출될 필요가 없는 프로젝트

#### 호출

```tsx
<Header name="Jaehyeong-Ha 🤪" />
```

#### 결과

![Header component design](/src/public/readmeImages/header-result.png)

<br/><br/><br/>

## Footer

![footer component design](/src/public/readmeImages/footer-preview.png)

### 설명

Footer 컴포넌트는 자동적으로 아래쪽에 셋팅이 되지 않으므로 화면 사이즈를 비교하고 아래에 셋팅을 해줘야한다. 물론 중간중
간 컴포넌트가 필요에 의해 바뀔 수 있음.. 추후 수정하도록 하겠습니다.

#### 호출

```tsx
<Footer />
```

#### 결과

![Footer component design](/src/public/readmeImages/footer-result.png)

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

# License Agreement

All rights of the design are reserved for Yanka Darelva
