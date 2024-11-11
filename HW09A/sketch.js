let mImg;
let pImg;
let colorSlider;

function preload() {
  mImg = loadImage("../assets/mondriaan.jpg");
  pImg = loadImage("../assets/fruit.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  // resize both images
  mImg.resize(600, 0);
  pImg.resize(600, 0);

  mImg.loadPixels();

  // Slider to adjust the hues of the background pattern
  let sliderX = mImg.width + 20; // reposition slide 
  createP("slide me !!!!! 😈 ").position(sliderX, 20);
  colorSlider = createSlider(0, 255, 128); // Range for color adjustment
  colorSlider.position(sliderX, 50);
  colorSlider.style("width", "200px");

  // adjust mImg pixels to change yellow, red, blue areas and make white transparent
  for (let idx = 0; idx < mImg.pixels.length; idx += 4) {
    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];

    // yellow pixels
    let pixelIsYellow = abs(redVal - greenVal) < 60 && redVal > 2 * blueVal && redVal > 150;

    //red pixels
    let pixelIsRed = redVal > 100 && greenVal < 130 && blueVal < 240;

    //  blue pixels
    let pixelIsBlue = redVal < 100 && greenVal < 200 && blueVal > 80;

    //  white pixels
    let pixelIsWhite = redVal > 0 && greenVal > 0 && blueVal > 100;

    if (pixelIsYellow) {
      // change yellow pixels to Pink
      mImg.pixels[idx + 0] = 255; // Red - pink
      mImg.pixels[idx + 1] = 105; // Green - pink
      mImg.pixels[idx + 2] = 180; // Blue - pink
      mImg.pixels[idx + 3] = 200; // opaque
    } else if (pixelIsRed) {
      // change red pixels to purple
      mImg.pixels[idx + 0] = 128; // Red - purple
      mImg.pixels[idx + 1] = 0;   // Green - purple
      mImg.pixels[idx + 2] = 128; // Blue - purple
      mImg.pixels[idx + 3] = 190; //  opaque
    } else if (pixelIsBlue) {
      // change blue pixels to lime green
      mImg.pixels[idx + 0] = 0;   // Red - lime green
      mImg.pixels[idx + 1] = 255; // Green - lime green
      mImg.pixels[idx + 2] = 0;   // Blue - lime green
      mImg.pixels[idx + 3] = 210; // opaque
    } else if (pixelIsWhite) {
      // make white pixels transparent
      mImg.pixels[idx + 3] = 0; // completely transparent
    }
  }

  mImg.updatePixels();
}

function draw() {
  // slider value - color hue range
  let hueShift = colorSlider.value();

  //  hue adjustment to the pattern image 
  let mPattern = createImage(pImg.width, pImg.height);
  mPattern.copy(pImg, 0, 0, pImg.width, pImg.height, 0, 0, pImg.width, pImg.height);
  mPattern.loadPixels();

  for (let idx = 0; idx < mPattern.pixels.length; idx += 4) {
    let r = mPattern.pixels[idx];
    let g = mPattern.pixels[idx + 1];
    let b = mPattern.pixels[idx + 2];

    // Convert RGB to HSB for hue adjustment
    colorMode(HSB, 255);
    let hsbColor = color(r, g, b);
    let h = hue(hsbColor) + hueShift;
    let s = saturation(hsbColor);
    let bVal = brightness(hsbColor);

    // wrap hue within the range of 0-255
    h = h % 255;

    // convert HSB back to RGB
    let rgbColor = color(h, s, bVal);
    colorMode(RGB, 255);
    mPattern.pixels[idx] = red(rgbColor);
    mPattern.pixels[idx + 1] = green(rgbColor);
    mPattern.pixels[idx + 2] = blue(rgbColor);
  }

  mPattern.updatePixels();

  image(mPattern, 0, 0);

  image(mImg, 0, 0);
}
