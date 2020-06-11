import React, {Fragment} from 'react';
import spinner from './spinner.gif';


function Spinner() {
    return (
        <Fragment>
            <img style={style} src={spinner} alt="loading..."/>
        </Fragment>
    )
}

const style = {
    width: '100px',
    height: '100px',
    margin: 'auto',
    display: 'block'
}



export default Spinner;
