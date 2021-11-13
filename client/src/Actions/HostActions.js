import Reflux from "reflux";
import {HostService} from 'Services/HostService'

export const HostActions = Reflux.createActions([
    {'checkHost': {children: ['completed', 'failed']}},
    {'setServiceTypeChoice': {async:false}},
    ]
);

HostActions.checkHost.listen( function(urlBackend, urlToCheck, serviceTypeToCheck) {
     HostService.checkHostName(urlBackend, urlToCheck, serviceTypeToCheck)
        .then( resolve => {
            this.completed(resolve);
        })
        .catch(
            reject => {
                this.failed("Check host error")
            }
        );
});
