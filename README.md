# HW09 Template
# HW09A
I found this process both challenging and rewarding because working with color manipulation and sliders in p5.js required me to think carefully about how each element interacts with the others, which taught me a lot about both functionality and aesthetics in programming.

the first trial was looking in trying to follow the tutorial fomr the class website - the problem that came up was that the color slider ended up changing the whole image instead of the individual color blocks.  
 
[Screenshot-2024-11-10-at-1-36-00-PM.png](https://postimg.cc/2qQ5QVWb)

one of the challenging aspects was ensuring that the sliders updated the colors seamlessly without causing unexpected behavior. I encountered some issues where the sliders wouldn’t reflect changes immediately. Debugging these interactions taught me about the importance of efficient code structure and organization, especially when dealing with real-time updates.

In my second attempt: I was able to seperate change the color blocks (red, blue, and yellow) and change them to any color I wanted, while keeping black and white parts unchanged. 


[![Screenshot-2024-11-10-at-2-08-07-PM.png](https://i.postimg.cc/wTjy7z4Z/Screenshot-2024-11-10-at-2-08-07-PM.png)](https://postimg.cc/yW2YbMHy)


this is the background pattern I wanted to use that will peak through from the transparencies of the color block. 


[![5c063332762d1a7bcaf73ecc07d64b46.jpg](https://i.postimg.cc/htH9jsJw/5c063332762d1a7bcaf73ecc07d64b46.jpg)](https://postimg.cc/qNxtD8xX)

And in my third iteration, i applied a hue shift with sliders by converting RGB to HSB for hue, saturation and brightness. The hue is adjusted by adding the slider value (hueShift), then wrapped within the 0–255 range. The adjusted color is then converted back to RGB and assigned back to the pixel.

[Screenshot-2024-11-10-at-2-15-00-PM.png](https://postimg.cc/dZ7wMTZ0)

# HW09B 

for the coding process of the face-tracking project, i found examples of other face-tracking filters on p5js for reference. I found the process quite challenging since i was struggling with building on top of the facemesh. By looking at the reference examples i found online, I learned that i had to ensure that each library (p5.js, clmtracker, and optionally m15.js) was coreccly loaded. Otherwise certain fucntions like tracker.init() wouldn't work without a properly initialized library. 

- i also realized that alignment issues often stemmed from mismatched canvas and video dimensions - therefore it is cruicial to make sure that the video and the canvas are both the same size so that it would make it eaiser to place objects precisely on the face. 

Accessing and using specific points (like those for the nose or mouth) taught me how to work with structured data from the tracker. I found it interesting to identify points on the face and associate them with custom graphics. This part of the process showed me the value of understanding how data points correspond to visual representations.

Adding visual elements like emojis on specific facial landmarks was a fun and creative way to blend art with technology. It also reinforced how coding can be a medium for artistic expression, where small tweaks to size, position, or graphics can make a big difference in the final output.

There was a lot of trial and error involved, especially in fine-tuning the exact points and thresholds for facial interactions. I learned that iteration is crucial; each small adjustment brought the project closer to the intended outcome.