import React, {Fragment} from 'react';
import spinner from './spinner.gif';


function Spinner() {
    return (
        <Fragment>
            <img style={{width:'200px', margin:'auto', display:'block'}} src={spinner} alt="loading..."/>
        </Fragment>
    )
}

const style = {
    width: '200px',
    height: '200px',
    margin: 'auto',
    display: 'block'
}



export default Spinner;
