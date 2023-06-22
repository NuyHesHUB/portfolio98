# PROJECT 04 포트폴리오 페이지 (PORTFOLIO98)

> ## **프로젝트명**

- 저의 소개와 진행 프로젝트를 보실 수 있는 포트폴리오 페이지 (👨🏻‍💻 1인 프로젝트)

<br/>

> ## **프로젝트 미리보기**

<img src="https://github.com/NuyHesHUB/project01_suwon/assets/115362203/8f33f819-ddc4-4e9c-95ef-a3d7989a0f17" alt="page"/>

<br/>
<br/>

> ## **프로젝트 링크**
 
- 배포링크 : <https://nuyheshub.github.io/project04_Portfolio98/>
- 시연영상 : <https://www.youtube.com/watch?v=sRMSiOL2yT8>

<br/>

> ## **프로젝트의 설명**

- 이 프로젝트를 시작한 동기는 React를 학습하고 실전 프로젝트를 경험하기 위해서였습니다. 또한, 윈도우98의 고전적인 컨셉을 적용한 웹 페이지를 만들어보고, 해당 페이지에서 각 폴더를 누르면 오픈되는 이벤트와 페이지 라우팅을 구현하기 위해서였습니다. 과거의 컴퓨터 인터페이스를 재현하고 사용자 경험을 제공함으로써 향수와 창의성을 자극하고자 했습니다.
- 이 프로젝트를 통해 React의 기본 개념과 컴포넌트 기반의 개발 방식을 익혔습니다. Redux를 사용하여 상태 관리와 이벤트 처리를 구현하고, React Router를 사용하여 페이지 라우팅을 구현하는 방법을 배웠습니다. 또한, 스타일 컴포넌트를 사용하여 컴포넌트별로 스타일을 작성하고 관리하는 방법을 익혔습니다.<br/><br/>
**특징** <br/>
1) 윈도우98의 전형적인 UI 요소들을 재현하고 있습니다. 사용자들에게는 그들이 익숙한 과거의 인터페이스를 떠올리게 하여 향수를 자극하고, 새로운 사용자들에게는 과거의 UI 디자인을 경험해보는 기회를 제공합니다. <br/>
2) 각 폴더를 클릭하면 해당 폴더의 내용이 전체화면으로 열리는 기능을 구현했습니다. 이는 실제 폴더를 여는 동작을 모방하여 사용자들에게 더욱 직관적이고 현실적인 경험을 제공합니다.<br/>
3) 창 닫기 버튼이 있어 사용자가 필요 없는 창을 닫을 수 있습니다. 이는 윈도우98의 창 닫기 동작을 모방하여 사용자들에게 더욱 자연스러운 인터페이스를 제공합니다.<br/>
4) react-pdf 라이브러리를 사용하여 이력서 PDF를 뷰어 형태로 제공하는 기능을 추가했습니다. 사용자들은 이력서를 웹 페이지에서 바로 확인할 수 있으며, 필요한 경우 다운로드할 수도 있습니다.<br/><br/>
**어려웠던 점** <br/>
- Redux는 상태를 한 곳에 집중적으로 관리하는 개념이기 때문에, 액션과 리듀서를 적절하게 활용하여 상태를 업데이트하는 방식을 이해해야 했습니다. 액션은 상태 변화에 대한 정보를 담고, 리듀서는 이를 기반으로 상태를 어떻게 업데이트할지 정의합니다. 이 과정에서 상태 변화의 흐름을 파악하고, 상태를 올바르게 관리하기 위한 로직을 구현하는 것이 중요했습니다.
폴더의 열림과 닫힘 상태를 관리하는 부분은 특히 복잡하였습니다. 여러 개의 폴더가 있고, 각각의 폴더는 독립적으로 열리거나 닫힐 수 있어야 했습니다. 이를 위해 Redux의 상태 구조와 액션, 리듀서를 적절하게 조합하여 각 폴더의 상태를 업데이트하는 로직을 설계해야 했습니다. 상태의 중첩과 상호의존성이 발생할 수 있는데, 이를 잘 관리하기 위해 Redux의 기본 원리와 패턴을 숙지해야 했습니다.
<br/>

> ## **프로젝트 기간**

- 10주

<br/>

> ## **프로젝트 주요기능**

- <strong>윈도우98</strong>의 고전적인 컨셉을 적용한 웹 페이지
- <strong>KEY</strong>입력 함수를 만들어 <strong>BIOS</strong>에서 키 입력 시 <strong>로딩</strong> , <strong>홈</strong>화면 구현
- <strong>reducer</strong> state 관리로 초기 <strong>튜토리얼</strong>이 뜨는 기능 , 각 <strong>폴더</strong>의 창크기 <strong>최소화</strong>, <strong>최대화</strong>, <strong>닫기</strong> 기능 구현
- <strong>action</strong>과 <strong>함수 호출</strong>로 이벤트 기능 구현
- <strong>react-player</strong>와 <strong>react-pdf</strong>를 사용하여 유튜브 영상 , pdf 뷰어 기능

<br/>

> ## **프로젝트 기술스택**

### ✔️ Front-end

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">


<br/>

### ✔️ Library
<img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/react_pdf-black?style=for-the-badge&logo=0&logoColor=white"><img src="https://img.shields.io/badge/react_player-gray?style=for-the-badge&logo=0&logoColor=white">

<br/>

### ✔️ 기타 기술
- gh-pages
- photoshop

<hr/>

