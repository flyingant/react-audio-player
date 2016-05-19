import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TinyAudioPlayer from './src/TinyAudioPlayer';

ReactDOM.render(<TinyAudioPlayer
    name='Metallica - Enter Sandman'
    source='https://upload.wikimedia.org/wikipedia/en/3/39/Metallica_-_Enter_Sandman.ogg'
    />, document.getElementById('root'));