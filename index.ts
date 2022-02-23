import URLReader from './framework/url/readURL';
import BaseView from './framework/BaseView/BaseView';
import * as PIXI from 'pixi.js';
import * as Phaser from 'phaser';
import { Howl, Howler } from 'howler';
const configData = require('./config.json');
const loader = PIXI.Loader.shared;
var EventEmitter = require('eventemitter3');
var events = require('events');
var eventEmit = new events.EventEmitter();

const sprites = {};
const backGroundImage = null;

function init(): void {
    // const urlReader = new URLReader();
    // loader.add('baseGameBG','assets/images/basegameBG.jpg')
    // .add('reelBG','assets/images/reel.png');
    const baseView = new BaseView();
    baseView.addBackGround();

    // addEventListener();
    // setUpStage();
    //  preload();
}

// function addEventListener(): void {
//     const baseView = new BaseView();
//     window.addEventListener('resize', handleResize);
// }

// function handleResize() {
//     eventEmit.emit("window_resized");
    
// }

function preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('TEN', 'assets/images/Symbol_static/10.png');
    this.load.image('ACE', 'assets/images/Symbol_static/A.png');
    this.load.image('DRAGON', 'assets/images/Symbol_static/dragon.png');
    this.load.image('FISH', 'assets/images/Symbol_static/fish.png');
    this.load.image('JACK', 'assets/images/Symbol_static/J.png');
    this.load.image('KING', 'assets/images/Symbol_static/K.png');
    this.load.image('LAMP', 'assets/images/Symbol_static/lamp.png');
    this.load.image('PALANQUIN', 'assets/images/Symbol_static/palanquin.png');
    this.load.image('POT', 'assets/images/Symbol_static/pot.png');
    this.load.image('QUEEN', 'assets/images/Symbol_static/Q.png');
    this.load.image('WILD', 'assets/images/Symbol_static/Wild.png');
    this.load.image('REEL_BG', 'assets/images/reel.png');
    this.load.image('BASEGAME_BG', 'assets/images/basegameBG.jpg');
}

function setUpStage(): void {
    let app = new PIXI.Application({
        width: configData.width,
        height: configData.height,
        resizeTo: window
    });

    const backGround = PIXI.Sprite.from('assets/images/basegameBG.jpg');
    backGround.width = app.screen.width;
    backGround.height = app.screen.height;
    
    app.stage.addChild(backGround);
    document.body.appendChild(app.view);
    addBackgroundImage();
}


function addBackgroundImage() {
    // let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    // let backgroundImage = new PIXI.Sprite.from();
    // backgroundImage.src = 'assets/images/basegameBG.jpg';
    // let ctx = canvas.getContext('2d');
    // ctx.drawImage(backgroundImage,0,0);
}

init();