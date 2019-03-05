import React from 'react';
import logo from './Logo';
import Title from './Title';
import ForkMe from './ForkMe';

import '../assets/styles/App.css';

function Header(props) {
    return (
        <div>

            <header>
                <ForkMe />
                <Title pageTitle={props.title} />
                <h1>Google Keep Clone by waptik</h1>
                
                <div className="logos">
                    <span className="logo keep">
                        { logo("k") }
                    </span>

                    <span className="plus"> + </span>

                    <span className="logo react">
                        { logo("r") }
                    </span>

                    <span className="plus"> + </span>

                    <span className="logo firebase">
                        { logo("f") }
                    </span>
                </div>
            </header>
        </div>
    );
}

export default Header;
