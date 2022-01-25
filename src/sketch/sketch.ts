import p5 from 'p5';
import "p5/lib/addons/p5.sound";
// import clm from 'clmtrackr'; // Face tracking library
// import ml5 from 'ml5'; // Machine learning library

const sketch = function (p: p5) {
    // a hack to get loadSound working
    const loadSound = (path: string) => ((p as any) as p5.SoundFile).loadSound(path);

    let sound: p5.SoundFile;
    
    // P5 will call this function to preload any assets (sounds, sprites, etc)
    p.preload = async () => {
        sound = loadSound("assets/ding.mp3")
    };
    
    // P5 will call this method after preload is finished
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.fill(0, 0, 100, 5);
        p.stroke("white");
        p.textAlign(p.CENTER);
        p.textSize(34);
        p.text("Use your mouse to draw something strange :)", p.windowWidth / 2, 150);
        sound.play();
    };
    
    // P5 will run this function whenever window is resized
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    // P5 will call this method with animation frame defined with frameRate 
        p.draw = () => {
        p.noStroke();
        const radius = 100;
        if (p.mouseIsPressed) {
            p.circle(p.mouseX, p.mouseY, radius);
        }
    }
}
new p5(sketch);