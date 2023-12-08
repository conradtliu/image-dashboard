# Image-Dashboard ReadME

This Image Dashboard was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Details About the Project

### Images
Some sample images have been provided to setup this project. They are located in the sample_images directory.

### Functionality
This application allows users to upload images and temporaryily store them used a (mocked) API. Functionality includes
-The ability to upload images / store images (local storage) 
-The ability to search for images by name
-The ability to update image names
-The ability to delete images from the view

### User Interface / User Experience
Users should be able to upload images through the Upload Button, all other formats are disallowed.
The image dashboard displays all images in cards, if a user selects a card, the full image will be displayed in a pop-up modal. Users also have the option to delete the image when hovering over the image card in the list.
The list is paged to currently only display 9 images at a time.
When looking for specific images, the user can input the name of the desired image(s) and valid results will be displayed.

### Approximate Time To Finish

This took me a few hours to finish (~12). By utilizing Create-React-App, I was able to create an interactive web-application that utilizes a mock ImageAPI. I also leveraged MaterialUI for some basic styling which was new to me, but helped further refine the look of the application.

### Extensions of Current Code
This was a solution created to ensure that the front-end was working with a mocked API. If I had more time, I would have liked to build out a real API with all the mocked features. This would have been a more robust API where the calls would actually be able to fetch / store images in some server and allowed for slightly more optimized calls (improved pagination). But, in this demo app, the mocked-timeouts are sufficient. Some additional client-side capabilities and further styling would have been nice to include.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
