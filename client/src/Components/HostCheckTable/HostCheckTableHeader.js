import React from 'react';

export const HostCheckTableHeader = () => {
    return(
        <div className="hostchecktable__header">
            <div className="hostchecktable__header__hostname">
                Location(Host name)
            </div>
            <div className="hostchecktable__header__statusresult">
                Result
            </div>
            <div className="clear__class"></div>
        </div>
    );
}