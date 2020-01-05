import React, { useState } from "react";

function Name() {
    const [name, setName] = useState("zhangqi");
    return (
        <div>
            <p>My name is {name}, thanks!</p>
            <button
                onClick={() => {
                    setName(name === "zhangqi" ? "Roy" : "zhangqi");
                }}
            >
                click me to change my name
            </button>
        </div>
    );
}

export default Name;
