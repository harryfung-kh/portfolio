import React from 'react';
import './Greeting.css';
import Glass from '../../Global/Glassmorphism';
import Button from '../../Global/Button';
import Glitch from '../../Global/Glitch';
import BackgroundMask from '../../Global/BackgroundMask';

function Greeting() {

    return (
        <div id="greeting" className="">
            <div className="background_minion"></div>
            <Glitch>Hello, World</Glitch>
            <Glass id="outer_circle" className="greeting_circle" glassColor="pink">
                <Glass id="inner_circle" className="greeting_circle" glassColor="pink">
                    <p>Enter</p>
                    <Button parameter={{ width: 180 }}>
                        Here!
                    </Button>
                </Glass>
            </Glass>
            <BackgroundMask width={'100vw'} height={'100vh'} />
        </div>
    );
}

export default Greeting;