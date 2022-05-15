## 미완성

### 원티드 개인과제 - Grip

### 개발 스택
- React
- TypeScript
- SASS 
- React-router
- Recoil
- Axios

### 개발 진행 상황
React Router를 사용해서 search탭과 favorite탭을 생성 검색결과를 서버에서 받아온데로 10개의 데이터를 리스트로 출력
무한 스크롤 구현을 window.addEventListener로 구현 debounce를 주었으나 받아올때 앱이 부자연 스럽게 받아짐, 하트 버튼 누르면 modal창을 출력 

### 미구현
- 각 movieItem에서 localstorage에 즐겨찾기 데이터를 저장하여 favorite텝에서 출력 
- recoil을 제대로 못쓴 것들 
- 무한 스크롤 에러 수정 
- axios 데이터에 대한 페이지 반응 추가 
- etc.... 

### 총평
import 에러에 자꾸 막혀서 lodash가 깔리지 않거나 process.env 파일이 불러와지지 않는등 각종 에러에 시달림...