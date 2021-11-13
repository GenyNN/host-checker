import React from 'react';

export const HostCheckTableRow = (props) => {
    let res = "OK";
    if (!props.result)
        res = "Error";
    return(
        <div>
            <div className="hostchecktable__row__hostname">
                {props.hostName}
            </div>
            <div className="hostchecktable__row__statusresult">
                {res}
            </div>
            <div className="clear__class"></div>
        </div>
    );
}