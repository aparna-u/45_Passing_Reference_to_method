import React from 'react';

const person = (props) => {
    return (<div>
         
         <p onClick={props.Click}> Name : {props.name}</p>
         
         <p> {props.children}</p>
    
    </div>
    )}

export default person;