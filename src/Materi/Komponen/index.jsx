import React from 'react';
import CardImage from './pembahasan/CardImage';
import ClassComponent from './pembahasan/Qty';
import FunctionalComponent from './pembahasan/Price';

export default class Komponen extends React.Component {
    render() {
        return (
            <div>
                <CardImage />
                <FunctionalComponent price={7270000}/>
                <ClassComponent nama='Abdul Qoyyum' />
            </div>
        )
    }
}