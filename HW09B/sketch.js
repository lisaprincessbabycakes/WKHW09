let mCamera;
let tracker;

function setup() {
  createCanvas(640, 480); 
  mCamera = createCapture(VIDEO);
  mCamera.size(640, 480); // Set video to the same size as canvas
  mCamera.hide();

  // Initialize tracker 
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(mCamera.elt);
}

function draw() {
  background(255);
  image(mCamera, 0, 0, 640, 480);

  // Get the current tracking positions
  let positions = tracker.getCurrentPosition();

  // Check if tracking data is available
  if (positions && positions.length > 0) {
    // Draw nose
    noStroke();
    fill(255, 125, 185);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("🐽", positions[62][0], positions[62][1]);

    // Draw cheeks
    fill(255);
    textSize(50);
    textAlign(RIGHT, CENTER);
    text("🎀", positions[35][0], positions[35][1]);

    textAlign(LEFT, CENTER);
    text("🎀", positions[39][0], positions[39][1]);

    // Draw pointy teeth 
    textSize(10);
    textAlign(CENTER, CENTER);
    text("🤍", positions[61][0], positions[61][1]);

    text("🤍", positions[59][0], positions[59][1]);
  } else {
    //  a message if tracking data is not available
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Tracking failed or face not detected!", width / 2, height / 2);
  }
}

function mousePressed() {
  print(mCamera.width, mCamera.height);
}
