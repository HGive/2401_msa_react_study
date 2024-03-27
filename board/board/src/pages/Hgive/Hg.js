import React, {useCallback, useState} from "react";
import HeavyComponent from "./HeavyComponent";

function Hg() {
    const navStyleObj = {
        backgroundColor: "yellow",
        marginBottom: "30px",
    };

    const footerStyleObj = {
        backgroundColor: "green",
        marginTop: "30px",
    };

    return (
        <>
            <nav style={navStyleObj}>네비게이션 바</nav>
            <HeavyComponent/>
            <footer style={footerStyleObj}>푸터 영역이에요</footer>
        </>
    );
}

export default Hg;