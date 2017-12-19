import BaseAdapter from './BaseAdapter';

class Chrome extends BaseAdapter {
    constructor() {
        super();

    }
    getContraints() {
        return super.getContraints();
    }


    constraints = {
        offerToReceiveAudio : true,
        offerToReceiveVideo : true
    };

    getClassName() {
        return Chrome.name;
    }

}

export default Chrome;
