// src/components/Nav.js
function Nav() {
    return (
        <>
            < div style={
                {
                    display: 'flex',
                    height: '60px',
                    background: '#ffff00',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            } > <button className="btn_blue" onClick={() => {
                window.location.href = '/Board'
            }}>Board</button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="btn_green" onClick={() => {
                    window.location.href = '/Image'
                }}>Image</button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="btn_pink" onClick={() => {
                    window.location.href = '/Form'
                }}>Form</button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="btn_black" onClick={() => {
                    window.location.href = '/Onebon'
                }}>연습본</button>
            </div>
        </>
    )
}


export default Nav;

