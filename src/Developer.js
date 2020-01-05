import React, { useState } from "react";

function Developer() {
    const [sex] = useState("男");
    const [age] = useState(16);
    const [job] = useState("fe dev");
    return (
        <div>
            <p>张琦 今年 {age} 岁</p>
            <p>张琦 是个 {sex} 人</p>
            <p>张琦 的工作是 {job}</p>
        </div>
    );
}

export default Developer;
