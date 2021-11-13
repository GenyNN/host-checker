import React from 'react';
import Reflux from 'reflux';
import {HostStore} from 'Stores/HostStore';
import {HostCheckTableRow} from 'Components/HostCheckTable/HostCheckTableRow';
import {HostCheckTableHeader} from 'Components/HostCheckTable/HostCheckTableHeader';

export class HostCheckTablePanel extends Reflux.Component {

    constructor(props) {
        super(props);
        this.store = HostStore;
    }

    render() {
        let rows = this.state.hostCheckResults.map((item, index) => {
            return <HostCheckTableRow key={item.hostName+index} hostName={item.hostName} result={item.result} />
        });

        return(
            <div>
                <div>
                    {this.state.serviceTypeChoice}
                </div>
                <div>
                    <HostCheckTableHeader/>
                </div>
                <div>
                    {rows}
                </div>
            </div>
        );
    }
}