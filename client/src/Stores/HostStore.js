import Reflux from 'reflux';
import {HostActions} from 'Actions/HostActions'
import config from 'config'
export class HostStore extends Reflux.Store {

    constructor() {
        super();
        this.totalHostSize = config.hostServers.length;
        this.state = {hostCheckResults: [], serviceTypeChoice: null, curHostSize:0};
        this.listenables = HostActions;
    }

    onCheckHostCompleted = (data) => {
        let hosts = this.state.hostCheckResults;
        if (this.state.curHostSize === this.totalHostSize) {
            this.setState({curHostSize: 0});
            hosts = [];
        }
        hosts.push(data);
        this.setState({hostCheckResults: hosts});
        this.setState({curHostSize: this.state.curHostSize+1});
    }

    onSetServiceTypeChoice = (serviceTypeChoice) => {
        this.setState({serviceTypeChoice: serviceTypeChoice});
    }

    onCheckHostFailed = (message) => {
        alert("ERROR_"+message);
    }
}
