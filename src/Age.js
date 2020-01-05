import React, { useState } from "react";

function Age() {
    const [age, setAge] = useState(16);
    return (
        <div>
            <p>I am {age} years old, thanks!</p>
            <button
                onClick={() => {
                    setAge(age + 1);
                }}
            >
                incream my age!
            </button>
        </div>
    );
}

export default Age;
