import React from 'react';

function Saludar(props) {
    console.log(props.data);
    return (
        <div>
            <h1>Hola {props.data} tiene {props.anios} años</h1>
        </div>
    );
}

export default Saludar;