import { Link } from 'react-router-dom';
import '../App.css';
import myImage from '../assets/images/img_03.jpg'
import { ReactComponent as Ico } from  '../assets/images/ico_main.svg'

// src/pages/Image.js
function Image() {
  return (
  <div style={{ background:'#9CCC65', textAlign:'center', paddingBottom:'40px'}}>
    <ul>
      <li style={{padding:'20px 0'}}><h4>이미지 소개(퍼블릭) 입니다</h4></li>
      <li title='이미지삽입'><img src={process.env.PUBLIC_URL + '/images/img_01.jpg'} alt="이미지삽입" width={'200px'} height={'380px'}/></li>
      <li style={{padding:'20px 0'}}><h4>썸네일(import) 입니다</h4></li>
      <li title='썸네일링크'><Link to='https://www.naver.com/' target='_blank'><img src={myImage} alt="썸네일 임포트" width={'160px'} height={'160px'}/></Link></li>
      <li style={{padding:'20px 0'}}><h4>외부링크 입니다</h4></li>
      <li title='외부링크'><Link to='http://rebold.kr' target='_blank'><img src="http://rebold.kr/image/Front14/Front_13_1.jpg" alt="외부이미지연결" width={'20%'} height={'20%'}/></Link></li>
      <li style={{padding:'20px 0'}}><h4>이미지 css 입니다.</h4></li>
      <li title='검색' className="ico_search"></li>
      <li><a href='Form' title='페이지이동'><span className="btn_closeX">닫기</span></a></li>
      <li style={{padding:'20px 0'}}><h4>이미지 svg 적용 입니다.</h4></li>
      <li title='SVG삽입'><img src={process.env.PUBLIC_URL + '/images/ico_main.svg'} alt="SVG삽입"/></li>
      <li title='SVG삽입2'><Ico style={{margin:'20px 0'}}/></li>
    </ul>
    </div>
  );
}
export default Image;
