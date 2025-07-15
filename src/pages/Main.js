import List, { Modal } from '../components/List';

// src/pages/Main.js
function Main() {
  return (
    <div style={{ background: '#B3E5FC' }}>
      <h1>첫 화면 메인입니다</h1>
      <List title="맛집추천" day="2월 17일 발행" />
      <List title="여자코트 추천" day="1월 30일 발행" />
      <List title="파이썬 독학학" day="12월 18일 발행" />
      <Modal />
    </div>
  );

}

export default Main;
