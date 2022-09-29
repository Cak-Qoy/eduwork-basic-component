import React from 'react';

const FunctionalComponent = ({price}) => {
    return (
        <div>
            <h2>Gitar Yamaha Seri A</h2>
            <p>Seri A Yamaha membawa performa akustik Anda ke level berikutnya dengan nada yang dinamis dan diperkuat secara alami; suara akustik yang halus, kuat, dan permainan yang luar biasa.</p>
            <p>Rp. {price}</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    price: 100000
}
export default FunctionalComponent;