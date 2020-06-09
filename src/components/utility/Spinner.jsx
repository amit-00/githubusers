import React, {Fragment} from 'react';
import spinner from './spinner.gif';


function Spinner() {
    return (
        <Fragment>
            <img style={{width:'300px', margin:'auto', display:'block'}} src={spinner} alt="loading..."/>
        </Fragment>
    )
}



export default Spinner;
