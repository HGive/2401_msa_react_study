import React , {useEffect,useState} from "react";

function Hg (){
    // <---- 자바스크립트 영역 ---->
    const handleClick = ()=>{
        alert("clicked")
    }
    return (
        /* <---- HTML/JSX 영역  ---->*/
        <div
            style={{
                height: '100vh',
                display: ' flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

                <p>내가만든 컴포넌트!!</p>
                <button onClick={handleClick}>클릭</button>

        </div>
    );
}

export default Hg;