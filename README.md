<strong>👉22/06/14 SHA[1813747]</strong>

API KEY를 노출시키는 이슈로 인하여 재업로드.

해당 이슈는 config.js파일에서 key를 가져오고 config.js를 .gitignore에 추가하는 방식으로 해결.

<strong>👉22/06/14 SHA[1de3fec]</strong>

vw, vh, %를 이용하여 반응형 웹페이지로 구현하는 중.

현재 가상 데이터를 이용하여 화면에 렌더링 시킴.

Youtube API Quota 할당량 초기화 되면 첫 페이지 구현 예정.

<strong>👉22/06/14 SHA[06e8c8c]</strong>

API를 이용해 체널 및 동영상 정보를 받아 첫 페이지에 정보를 렌더링하는 작업을 완성한듯 하나

fetch에서 정보를 받지 못하는 버그가 발생 중.

<strong>👉22/06/14 SHA[13a55b6]</strong>

App컴포넌트에 windowWidth state를 추가함.

해당 state를 이용해 start 페이지의 title이 동적으로 길이를 계산하여 렌더링하게 됨.

debounce함수를 이용해 마지막 이벤트리스너가 호출되고 500밀리세컨드 이후에 setWindowWidth 함수를 호출해서 windowWidth state를 변경하는 것으로 API 호출 횟수를 줄임.

<strong>👉22/06/16 SHA[24fef19]</strong>

첫 페이지에서 원하는 동영상을 클릭 시 해당 영상이 렌더링되는 스트림페이지 구현.

동영상, 동영상 정보, 체널 정보, 플레이리스트까지 구현 완료.

플레이리스트는 첫 페이지에서 fetch 받은 동영상리스트 배열을 재활용했고,

동영상리스트 길이가 짧아 성능상 이슈는 없겠지만 unshift등 메소드를 사용하지 않고

현재 재생 중인 동영상을 동영상리스트에서 filter메소드로 제거하고

해당 배열과 재생 중인 영상을 별도로 렌더링하였음.

조건문을 너무 자주 이용해서 component를 렌더링하는 것 같음.

component를 더욱 세분화해서 재활용성을 높일 필요를 느낌.

<strong>👉22/06/17 SHA[d3f351a]</strong>

렌더링 페이지 댓글창 기능 구현 및 플레이리스트 클릭 시 해당 영상에 대한 랜더링페이지가 랜더링되게 기능 구현.

useEffect의 dependency에 videoid을 넣어 videoid가 변경될 때 videoid에 대한 댓글 정보를 fetch하게 구현했는데,

처음에는 잘 받아왔으나 인터넷속도 문제인지 SHA[06e8c8c]와 같은 버그가 생김.

조건문을 이용해서 useEffect가 넣어주는 state를 조건으로 해당 컴포넌트를 랜더링하게 로직을 구현해서 해결.

(useEffect는 컴포넌트 렌더링 이후에 수행되니 undefined의 prop을 컴포넌트에 넣어서 그런거 같음)

<strong>👉22/06/17 SHA[c98ea70]</strong>

전반적인 기능 구현 완료.

동영상 검색, 클릭된 동영상 기반으로 스트림페이지 랜더링, 댓글 및 플레이리스트 랜더링.

관련되지 않는 components가 랜더링이 되는 것이 보임.

어떻게 해결 가능할까 고민 중.

<strong>👉22/06/17 SHA[0facfba]</strong>

첫 페이지 left-side 아이콘에 해당 아이콘을 클릭 시 아이콘이 의미하는 직업영상을 모달창으로 뜨는 기능 구현.

useEffect을 이용해 컴포넌트 랜더링 후 body.style.overflow : hidden을 추가해서 스크롤을 막도록 했고,

modal-wrapper에 모달창을 닫는 click 이벤트를 추가하여 버튼 혹 모달창 영상 이외 부분을 클릭 시

모달창이 닫히도록 기능을 구현하였음.
