import p5 from "p5";
(<any>window).p5 = p5; // a hack to get p5.sound working in p5 > 0.9.0
// import "p5/lib/addons/p5.dom"; // this does not work due to dependency errors

import "../styles.scss";
import "./sketch";

