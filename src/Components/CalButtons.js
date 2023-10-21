import React, { useState } from 'react';
import './CalButtons.css'

const CalButtons = () => {
    const [data, setData] = useState("");
    const calBtns = [];
    let array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "%"];
    array.forEach(element => {
        if (element === "%") {
            calBtns.push(
                <button onClick={x => {
                    setData(data / 100)
                }}
                    key={element}>
                    {element}

                </button>
            )
        } else {
            calBtns.push(
                <button onClick={x => {
                    setData(data + x.target.value)
                }}
                    value={element}
                    key={element}>
                    {element}

                </button>
            )
        }
    });

    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='showInput'>{data} </div>
                <div className='digits flex'>{calBtns}</div>
                <div className='modifiers subgrid'>
                    {/* <button onClick={() => setData(data.substring(0,data.length - 1))}>
             */}
                    <button onClick={() => {
                        if (typeof data === 'string') {
                            setData(data.substring(0, data.length - 1));
                        }
                    }}>
                        C
                    </button>
                    <button onClick={() => setData("")}>AC</button>
                </div>
                <div className='operations subgrid'>
                    <button onClick={x => setData(data + x.target.value)} value="/">÷</button>
                    <button onClick={x => setData(data + x.target.value)} value="*">x</button>
                    <button onClick={x => setData(data + x.target.value)} value="-">-</button>
                    <button onClick={x => setData(data + x.target.value)} value="+">+</button>
                    <button onClick={x => {
                        try {
                            setData(
                                String(eval(data)).length > 3 &&
                                    String(eval(data)).includes(".")
                                    ? String(eval(data).toFixed(4)) : String(eval(data))
                            )
                        }
                        catch (err) {
                            console.log(err)
                        }
                    }}
                        value="=">=</button>
                </div>
            </div>
        </div>
    );
};

export default CalButtons;