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
