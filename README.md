# Welcome to the Masjid-Al-Rayyan mobile app
This is the repository for the mobile app for Masjid-Al-Rayyan. It is written in React Native for Android and iOS. 
## Setup
In order to get the app running on your computer, make sure that you are using an up to date version of a compatible operating system like **Windows** or **MacOS**.

If you would like to view or edit the code for the app, it is desirable to have a code editor. An excellent one is **Visual Studio Code**. It can be downloaded at the following link: https://code.visualstudio.com/download

If you would like to view the app on your computer through an emulator, download **Android Studio**. This can be done at the following link: https://developer.android.com/studio

You will need to download **Node.js** for your computer in order to run certain commands. This can be done at the following link: https://nodejs.org/en/download/. 
While installing make sure to add Node to your PATH variable so that you can access commands from the terminal. You can find instructions online for how to do that if you missed it. Additionally, make sure that the **npm package manager** is installed with Node. These should be default options, but keep an eye out.

Finally, download the **Expo Go** app for your mobile phone, either iOS or Android. This app will allow you to have a live view of the app as it exists on mobile. 

Once all downloads are completely finished, you can download the zip code file from GitHub, or use Git or GitHub Desktop to clone the repo on your computer.

Navigate to the folder containing the repo and open it. You should see "assets" and "components" folders along with some files. 

Open a new terminal window from this file location. This can usually be done with an option from the operating system, but if necessary navigate from root. 

Type the command ``` npm install ``` in the terminal and press enter. This will install all the dependencies for the project using the package.json file that is included in the repo.

Type the command ``` npm start``` in the terminal and press enter. This will start the project and enable Expo to start working. If the code has run properly, you should see a QR code in the terminal and some instructions for commands that can be used.

If you would like to view the app on mobile, open the **Expo Go** app and click the button that says "Scan QR code". Make sure that your camera is on. Scan the QR code with your phone, and the Expo app should automatically take you to a new window that displays the app. 

If you would like to view the app through an emulator like **Android Studio**, follow the steps described at this link: https://docs.expo.dev/workflow/android-studio-emulator/.

## Adding New Screens
In order to add new new screens to the app,  you will need to follow the basic template described here. 

The first step to making a new screen is creating a new JavaScript file in the "screens" folder. 

In order to use the structure and functionality of React, copy the following line into the top of your file:
``` import  React  from  'react'; ```

If you would like to ```import``` components from other files/modules into your file, use the structure ```import { Component, Component, Component } from 'file/module';```
```Component``` in this case would be replaced by the name of the component, and ```file/module``` would be replaced by the relative location of the file (i.e. if it's in the same directory and named ```example.js```, then the relative location would be ```./example.js```).

As we are using functional components, the next thing is to add the default function. This would be ```export function ComponentName () {}```. In the curly braces 

