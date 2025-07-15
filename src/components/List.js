import '../App.css';

function List(props) {
    return (
        <div className='basic_box, list'>
            <h4>{props.title}</h4>
            <p>
                <ul>
                    <li>{props.day}</li>
                </ul>
            </p>
        </div>
    )
}

function Modal() {
    return (
        <> < div className='modal' > <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
        </>
    )
}
function Button() {
    return (<> < div style={
        {
            display: 'flex',
            background: '#ffff00',
            alignItems: 'center',
            justifyContent: 'center'
        }
    } > <button className="btn_blue">Home</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="btn_green">About</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="btn_pink">View</button>
    </div>

    </>)
}

export default List; // 기본(default) export
export { Modal }; // 이름 붙은(named) export
export { Button };
