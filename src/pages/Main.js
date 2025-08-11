// src/pages/Main.js

import React, { useRef, useState, useEffect} from 'react';
import UserContext from '../components/UserContext';
import UserProfile from '../components/UserProfile';


function Main() {
    const [count, setCount] = useState(0);      // <--- state로 변경
    const [count2, setCount2] = useState(0);

      const plus = () => {
          setCount(count + 1);                   // <--- state 변경
          setCount2(count2 + 1);
          console.log(count);
      }
      // 렌더링 될때마다 실행
      useEffect(() => {
          console.log('렌더링');
      }
      )

      const inputRef = useRef(); // 인풋에 포커싱
          // 사용자 ID를 포함한 사용자 객체 예시
    const user = { id: '사용자4567' };

  return (
    <div>
        <UserContext.Provider value={user}>
                    <UserProfile />
                </UserContext.Provider>
< div style={{ padding: "40px 0 0 40px", fontWeight: "bold", color: "#D50000", fontSize: "18px" }} >
                {count}
            </div>
            < div style={{ padding: "40px 0 0 20px", fontWeight: "bold", color: "#304FFE", fontSize: "18px" }} >
                상태 : {count2}
            </div>
            < button onClick={plus} style={{ margin: "10px 0 0 20px" }} > 증가
            </button>
            <div style={{ padding: "40px 0 0 20px" }}>
                <input ref={inputRef} style={{ margin: "0 8px 0 0" }} />
                <button onClick={() => inputRef.current.focus()}>검색하기</button>
            </div>

    </div>
  );

}

export default Main;
