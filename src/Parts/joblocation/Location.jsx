import React, { useState, useRef } from 'react';
import {Link} from "react-router-dom"
import './Location.css';


const Carousel = () => {
    const arr = [{ city: "Mumbai1", jobCount: 1200 }, { city: "Mumbai2", jobCount: 1200 }, { city: "Mumbai3", jobCount: 1200 }, { city: "Mumbai4", jobCount: 1200 }, { city: "Mumbai5", jobCount: 1200 }, { city: "Mumbai6", jobCount: 1200 }, { city: "Mumbai7", jobCount: 1200 }, { city: "Mumbai8", jobCount: 1200 }, { city: "Mumbai9", jobCount: 1200 }, { city: "Mumbai10", jobCount: 1200 }, { city: "Mumbai11", jobCount: 1200 }, { city: "Mumbai12", jobCount: 1200 }, { city: "Mumbai13", jobCount: 1200 }, { city: "Mumbai14", jobCount: 1200 }, { city: "Mumbai15", jobCount: 1200 }, { city: "Mumbai16", jobCount: 1200 }];
    const [cards, setCards] = useState(arr);
    const boxRef = useRef(null);

    const handleLeftClick = () => {
        const box = boxRef.current;
        box.style.justifyContent = "flex-end"
        box.style.transform = "translate(-100%)"
        for (let i = 0; i < 4; i++) {
            cards.push(cards.shift())
        }
        setCards([...cards])
    };

    const handleRightClick = () => {

        const box = boxRef.current;
        box.style.justifyContent = "flex-end"
        box.style.transform = "translate(100%)"
        for (let i = 0; i < 4; i++) {
            cards.unshift(cards.pop())
        }
        setCards([...cards])
    };

    const handleScroll = () => {
        const box = boxRef.current;
        box.style.transition = "none"
        box.style.transform = "translate(0)"
        setTimeout(() => {
            box.style.transition = "all 0.3s ease-in"
        })
    }

    return (
        <div className="carousel-container">
            <h1>Where You Want To Work</h1>
                <div className="carousel-inner" ref={boxRef} onTransitionEnd={handleScroll}>
                    {cards.map((card, i) => (
                        <Link to="/jobs" key={i} className="card"><div  >
                            <h3>{card.city}</h3>
                            <p>{card.jobCount}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            <button className="left-button scroll-btn" onClick={handleLeftClick}>{'<'}</button>
            <button className="right-button scroll-btn" onClick={handleRightClick}>{'>'}</button>
        </div>
    );
};

export default Carousel;
