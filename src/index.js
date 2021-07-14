import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
*/

/*
LOS 9 SONIDOS CON SU URL

BassDrum(bombo) - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/61[kb]bass-kickers-2.wav.mp3
Snare(redoblante) - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3
HiHatClosed - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/15[kb]chh.wav.mp3
HiHatOpen - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/36[kb]darkohh.wav.mp3
CrashCymbal - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/91[kb]curecrash.wav.mp3
RideCymbal - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/97[kb]curiouscym2.wav.mp3
HighTom - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3
MediumTom - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3
FloorTom(chancha) - https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3
*/

const soundBank = [
{
    keyCode: 81,
    keyTrigger: 'Q',
    desc: 'High-Tom',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    desc: 'Medium-Tom',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    desc: 'Crash-Cymbal',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/91[kb]curecrash.wav.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    desc: 'Floor-Tom',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/90[kb]loetom.wav.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    desc: 'HighHat-Open',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/36[kb]darkohh.wav.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    desc: 'Ride-Cymbal',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/97[kb]curiouscym2.wav.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    desc: 'Bass-Drum',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/61[kb]bass-kickers-2.wav.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    desc: 'HighHat-Closed',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/15[kb]chh.wav.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    desc: 'Snare',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3'
}];

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audioHandler = React.createRef();
        this.onDrumPadClick = this.onDrumPadClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onDrumPadClick() {
        const text = this.props.padItem.desc.replace(/-/g," ");
        const audio = this.audioHandler.current;

        this.props.updateDisplayText(text);
        audio.currentTime = 0;
        audio.play();
    }

    onKeyDown(e) {
        if (e.keyCode === this.props.padItem.keyCode){
            this.onDrumPadClick();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    render() {
        const padItem = this.props.padItem;

        return(
            <div className="drum-pad" id={padItem.desc} onClick={this.onDrumPadClick} >
                <audio className="clip" id={padItem.keyTrigger} src={padItem.url} ref={this.audioHandler} />
                {padItem.keyTrigger}    
            </div>
        )

    }


}



class App extends React.Component {
    constructor(props){
        super(props);
        //kinda weird but maybe i dont need an additional state since
        //i didnt implement:
        //1) multiple sound banks
        //2) volume control
        this.state = {
            displayText: ' '
        };
        //maybe not needed
        this.updateDisplayText = this.updateDisplayText.bind(this);
    }
    
    updateDisplayText(text) {
        this.setState({
            displayText: text
        });
    }


    render(){
        //some js

        //this will be rendered
        return(
            <div className="container" id="drum-machine">
                <div>
                    <h1 className="title">Drum Machine</h1>
                </div>
                <div className="drum-display" id="display">
                    <h1>{this.state.displayText}</h1>
                </div>
                <div className="drum-pads">
                    {
                        soundBank.map((item,idx) => {
                            return <DrumPad
                                key={idx}
                                padItem={item}
                                updateDisplayText={this.updateDisplayText}
                            />                          
                        })  
                    }
                </div>
                <div id="footer" className="footer">by <a className="link" 
                href="https://codepen.io/villagrat/">&#64;villagrat</a>
                </div>
            </div>
        );

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);