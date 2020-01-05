import React, { useState } from "react";
import Name from "./Name";
import Age from "./Age";
import Developer from "./Developer";
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>hello hooks!</h2>
            <div>
                <p>You clicked {count} times</p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    click me
                </button>
                <Name />
                <Age />
                <Developer />
            </div>
        </div>
    );
}

export default App;
