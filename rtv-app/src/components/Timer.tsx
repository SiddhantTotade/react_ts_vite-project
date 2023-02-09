import React from 'react'

const Timer: React.FC = () => {
    let seconds: number = 5;

    const makeIteration = (): void => {
        console.clear();
        if (seconds > 0) {
            console.log(seconds);
            setTimeout(makeIteration, 1000); // 1 second waiting
        }
        seconds -= 1;
    };

    setTimeout(makeIteration, 1000);

    return (
        <div className="App">
            <h2>{seconds}</h2>
        </div>
    )
}

export default Timer