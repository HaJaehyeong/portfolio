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

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

# License Agreement

All rights of the design are reserved for Yanka Darelva
