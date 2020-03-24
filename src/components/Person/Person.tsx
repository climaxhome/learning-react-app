import React from 'react';

type personProps = {
    name: string;
    age: number;
    children?: string;
};

// interface personProps {
//     name: string;
//     age: string;
//     children?: string;
// };

const person = (props : personProps) => {
    return(
        <div>
            <p>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;