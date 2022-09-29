import React, { Component } from 'react';
import Logo from './assets/images/gitar.jpg';

class CardImage extends Component {
    render() {
        return (
            <div>
                <img src={Logo} alt=""/>
            </div>
        );
    }
}

export default CardImage;