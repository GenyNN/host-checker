import React from 'react';
import Reflux from 'reflux';
import {HostCheckServiceTypePanel} from 'Components/HostCheckServiceType/HostCheckServiceTypePanel'
import {HostCheckTablePanel} from 'Components/HostCheckTable/HostCheckTablePanel'

export class MainPage extends Reflux.Component {

    render(){
        return(
            <div className="mainpage__content">
                <HostCheckServiceTypePanel/>
                <HostCheckTablePanel/>
            </div>
        );
    }
}