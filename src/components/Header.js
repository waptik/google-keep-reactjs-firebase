import React from 'react';
import logo from './Logo';
import Title from './Title';

import '../assets/styles/App.css';

function Header(props) {
    return (
        <div>
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
        </div>
    );
}

export default Header;
