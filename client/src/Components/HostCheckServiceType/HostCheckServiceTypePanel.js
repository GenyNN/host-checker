import React from 'react';
import Reflux from 'reflux';
import {HostActions} from 'Actions/HostActions'
import {HostStore} from 'Stores/HostStore';
import config from 'config'

export class HostCheckServiceTypePanel extends Reflux.Component {

    constructor(props) {
        super(props);
        this.state = {hostname: null};
        this.store = HostStore;
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleClick = async(e) => {
        let hosts = config.hostServers;
        let urlToCheck = this.state.hostname;
        let serviceTypeToCheck = e.target.name;
        if (!urlToCheck) {
            alert("host name should be not empty");
            return;
        }

        for (let i = 0; i < hosts.length; i++) {
            await HostActions.checkHost(hosts[i], urlToCheck, serviceTypeToCheck);
        }

        HostActions.setServiceTypeChoice(serviceTypeToCheck);
    }

    render() {
        return(
                <div className="hostcheckservicetype__content">
                    <div className="hostcheckservicetype__inputfields">
                        <label className="hostname__input"
                               htmlFor="hostname">Hostname</label>
                        <input className="hostname__value"
                               type="text" name="hostname" onChange={(e) => this.handleChange(e)}/>
                        <div className="clear__class"></div>
                    </div>
                    <div className="hostcheckservicetype__buttons">
                        <div className="check__ping">
                            <button name="ping" onClick = {(e) => this.handleClick(e)}>Ping</button>
                        </div>
                        <div className="check__http">
                            <button name="http" onClick = {(e) => this.handleClick(e)}>HTTP</button>
                        </div>
                        <div className="check__tcp">
                            <button name="tcp" onClick = {(e) => this.handleClick(e)}>TCP</button>
                        </div>
                        <div className="clear__class"></div>
                    </div>
                </div>
        );
    }
}