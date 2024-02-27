# SignWise : Duolingo for sign language
![logo]([\MacBook Pro 14_ - 2.png](https://github.com/csendranshi/FemmeHacks24/blob/main/MacBook%20Pro%2014_%20-%202.png))

## Inspiration

What's more annoying than not being able to express yourself? Nobody being able to understand what you're expressing.

Our motivation to initiate this project stems from the countless individuals lacking knowledge and familiarity with the sign languages which makes it difficult to create an inclusive and diverse space. Recognizing the limitations of traditional ASL learning methods which are extremely boring and mundane, we endeavored to develop an inclusive project accessible to all. We've made it super user friendly for even kids!

## What it does

Our project employs machine learning technology to accurately recognize the hand signs users perform, serving as a validation step to ensure they correctly follow the tutorials provided on our website.

We take in the user gesture from the website and send it over to the backend. The backend framework then reaches out to the CV model and detects the alphabet. The model send back the recognized alphabet to the fronted and ultimately to the user. This is achievemt is near real-time.

## How we built it

We used python language to develop our Computer Vision model and used ReactJS and Python flask for developing the web app. Additionally we built the prototype in Figma.

## Challenges we ran into

Mastering machine learning proved to be challenging, particularly grasping the complexities of matrices and determining the most suitable packages to utilize. In the beginning, I had zero experience training a model, and today proved to be a big testament to our determination as a team. A significant obstacle we encountered revolved around deploying our model—how could we seamlessly integrate it into a website?

## Accomplishments that we're proud of

We take pride in our achievement of successfully training the model to accurately detect the alphabet letter being signed. Additionally, we're proud of developing out own proprietary dataset, developing a visually intuitive model, and completing the project within the designated timeframe.

## What we learned

This project has been an incredible learning experience for me. I had never trained a model or collected data (pictures) to create a visual model before. Through this project, I gained valuable insights into training models and learned the process of converting an h5 file to a json format for seamless integration into a website.

## What's next for SignWise

We envision to expand to more than just alphabets and include enhanced learning courses

References:
1. https://towardsdatascience.com/sign-language-recognition-with-advanced-computer-vision-7b74f20f3442
2. https://github.com/mg343/Sign-Language-Detection
