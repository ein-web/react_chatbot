import React, { useState } from "react";
import ListItem from '../components/ListItem';
import '../App.css';

function Onebon() {
	const [likes, setLikes] = useState(0);

	return (
		<div>
			<ListItem
				imageSrc={process.env.PUBLIC_URL + '/images/img_01.jpg'}
				title="제주4·3기록물 유네스코 세계기록유산 등재 기념행사 개최"
				date="2025.07.09"
				likes={likes}
				onLike={() => setLikes(likes + 1)}
				linkUrl="#"
			/>
			<ListItem
				imageSrc={process.env.PUBLIC_URL + '/images/img_02.jpg'}
				title="KGM, 액티언 하이브리드 출시기념 무상 차량점검 서비스"
				date="2025.06.23"
				likes={likes}
				onLike={() => setLikes(likes + 1)}
				linkUrl="https://www.naver.com/"
			/>
			<ListItem
				imageSrc={process.env.PUBLIC_URL + '/images/img_03.jpg'}
				title="네안데르탈인도 반한 깊은 맛"
				date="2025.6.17"
				likes={likes}
				onLike={() => setLikes(likes + 1)}
				linkUrl="https://www.nate.com/"
			/>
		</div>

	);
}

export default Onebon;
