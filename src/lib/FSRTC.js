import ErrorFSRTC from './errors/ErrorFSRT';
import Adapters from './adapters';
import {CHROME, FIREFOX, ANDROID, IE, IOS, OPERA, SAFARI} from './constants/browserName'
/**
 * FREESWITCH RTC Class
 */
class FSRTC {
    /**
     *
     * @type {{SDP: null, profile: {}, candidateList: Array}}
     */
    mediaData = {
        SDP: null,
        profile: {},
        candidateList: []
    };
    /**
     *
     * @type {boolean}
     */
    audioEnabled = true;
    /**
     *
     * @type {boolean}
     */
    videoEnabled = true;
    /**
     *
     * @type {
     *     {
     *          useVideo: null,
     *          useStereo: boolean,
     *          userData: null,
     *          localVideo: null,
     *          screenShare: boolean,
     *          useCamera: string,
     *          iceServers: boolean,
     *          videoParams: {},
     *          audioParams: {},
     *          callbacks: {
     *              onICEComplete: FSRTC.options.callbacks.onICEComplete,
     *              onICE: FSRTC.options.callbacks.onICE,
     *              onOfferSDP: FSRTC.options.callbacks.onOfferSDP
     *          }
     *      }
     * }
     */
    options = {
        useVideo : null,
        useStereo : false,
        userData : null,
        localVideo : null,
        screenShare : false,
        useCamera : "any",
        iceServers : false,
        videoParams : {},
        audioParams : {},
        callbacks : {
            onICEComplete :  function() {},
            onICE :  function() {},
            onOfferSDP :  function() {}
        },
    };

    constructor(options = {}, browserDetect = null) {
        if(browserDetect === null) throw new ErrorFSRTC('No detect browser name');
        console.log('browserDetect',browserDetect);
        /**
         *
         */
        const adapter = this.getAdapter(browserDetect);
        /**
         *
         * @type {*|constraints|{audio, video}}
         */
        this.options = {...this.options, ...options, ...adapter.constraints};

        console.log(this.options, adapter, browserDetect);
    }

    getAdapter(adapterObj) {
        switch (adapterObj.name) {
            case adapterObj.name === CHROME : return Adapters.Chrome;break;
            case adapterObj.name === FIREFOX : return Adapters.Mozilla;break;
            case adapterObj.name === IE : return Adapters.InternetExplorer;break;
            default : return Adapters.BaseAdapter;break;
        }
    }
}

export default FSRTC;
