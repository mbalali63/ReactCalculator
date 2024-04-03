# ReactCalculator

## Introduction

 This project is for practicing and improving my skill in UI design using React. 
 
 


## Project WBS
1. <input type="checkbox" checked/> Prepare the project plan
2. <input type="checkbox" checked/> Wireframe in figma
    <ul>
        <input type="checkbox" checked/> Mobile Frame <br>
        <input type="checkbox"/> <del>Desktop Frame</del>
    </ul>
3. <input type="checkbox" checked/> Select Color Scheme
4. <input type="checkbox" checked/> Design colorful in figma
5. <input type="checkbox" checked/> List Components
6. <input type="checkbox" checked/> List Functionalities
7. <input type="checkbox" checked/> Write algorithms
8. <input type="checkbox" checked/> List Usestates 
9. <input type="checkbox" checked/> List Component props and callBacks
10. <input type="checkbox" checked/> Create components
11. <input type="checkbox" checked/> Implement Visual Design
12. <input type="checkbox" checked/> Implement functionalities
13. <input type="checkbox"/> Test the App
14. <input type="checkbox"/> Finalize and Publish




## Notes:
1. The layout is designed only for small android. In the other words, the desktop view will also have the same dimensions.

2. I want to create multiple color themes, and make it possible for the user to select

## Color Themes:

 The color themes are selected from the website [Colors](https://coolors.co). These are my themes:
 <ul>
    <li><a href = "https://coolors.co/4c5b5c-ff715b-f9cb40-bced09-2f52e0" target="_blank">Theme 1</a></li>
    <li><a href = "https://coolors.co/133c55-386fa4-59a5d8-84d2f6-91e5f6" target="_blank">Theme 2</a></li>
    <li><a href = "https://coolors.co/dcdcdd-c5c3c6-46494c-4c5c68-1985a1" target="_blank">Theme 3</a></li>
 </ul>


## List of Components
<ol>
    <li>App</li>
    <li>
        Header
        <ul>
            <li>Title</li>
            <li>ThemeSelector</li>
        </ul>
    </li>
    <li>Screen</li>
    <li>
        KeyPad
        <ul>
            <li>NumberBtn</li>
            <li>OperatorType1Btn</li>
            <li>OperatorType2Btn</li>
            <li>DotBtn</li>
            <li>ClearBtn</li>
            <li>EqualBtn</li>
        </ul>
    </li>
    <li>Footer</li>
</ol>
 

## List of Functionalities
<ol>
    <li>Type 1 Operation</li>
    <li>Type 2 Operation</li>
    <li>Screen update</li>
    <li>keyboard input</li>
    <li>Theme update</li>
</ol>



## Algorithms

This app will work using 4 main useStates:
<ul>
    <li>lastNumber</li>
    <li>currentNumber</li>
    <li>lastOpr</li>
    <li>currentOpr</li>
</ul>
And the following utility useStates:
<ul>
    <li>dotIsOff: dotIsOff = 1 if dot is not triggered, and is 0 if it is triggered.</li>
    <li>n: n is the number of digits after dot</li>
</ul>

These will be initiaed with the following values:
<table>
    <tr>
        <th>useState</th>
        <th>initial value</th>
        <th>Symbol</th>
    </tr>
    <tr>
        <td>lastNumber</td>    
        <td>0</td>
        <td>L</td>
    </tr>
    <tr>
        <td>currentNumber</td>
        <td>0</td>
        <td>C</td>
    </tr>
    <tr>
        <td>lastOpr</td>
        <td>+</td>
        <td>@</td>
    </tr>
    <tr>
        <td>currentOpr</td>
        <td>+</td>
        <td>$</td>
    </tr>
    <tr>
        <td>dotIsOff</td>
        <td>1</td>
        <td>-</td>
    </tr>
    <tr>
        <td>n</td>
        <td>0</td>
        <td>-</td>
    </tr>
    
</table>

The app operation could be in any of the following states:
<table>
    <tr>
        <th>Item No.</th>
        <th>Name</th>
        <th>Algorithm</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Digit button Triggered</td>
        <td>
            <ol>
                <li>C = (10C + lastDigit)*dotIsOff + (C + lastDigit/n)*(1-dotIsOff) </li>
                <li>n = (n+1)*(1-dotIsOff)</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td>2</td>
        <td>type 1 operator button Triggered</td>
        <td>
            <ol>
                <li>C = function(C) </li>
                <li>@ = +</li>
                <li>L = 0</li>
                <li>dotIsOff = 1</li>
                <li>n=0</li>
            </ol>
            <sub>function is the triggered type 1 operator</sub>
        </td>
    </tr>
    <tr>
        <td>3</td>
        <td>type 2 operator button triggerd</td>
        <td>
            <ol>
                <li>L = L @ C</li>
                <li>C = 0</li>
                <li>@ = $ </li>
                <li>dotIsOff = 1</li>
                <li>n=0</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td>4</td>
        <td>Equal button triggered</td>
        <td>
            <ol>
                <li>C = L @ C</li>
                <li>@ = +</li>
                <li>L = 0</li>
                <li>dotIsOff = 1</li>
                <li>n=0</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td>5</td>
        <td>dot button triggered</td>
        <td>
            <ol>
                <li>dotIsOff = 0</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td>6</td>
        <td>C button is triggered</td>
        <td>
            <ol>
                <li>C = 0</li>
                <li>L = 0</li>
                <li>@ = +</li>
                <li>$ = +</li>
                <li>dotIsOff = 1</li>
                <li>n = 0 </li>
            </ol>
        </td>
    </tr>
</table>






## List of UseStates

<ol>
    <li>lastNumber</li>
    <li>currentNumber</li>
    <li>lastOpr</li>
    <li>currentOpr</li>
    <li>dotIsOff</li>
    <li>n</li>
    <li>screenText</li>
    <li>theme</li>
</ol>


## List of Component Props and callBacks


<table>
    <tr>
        <th>Component</th>
        <th>Props</th>
        <th>callback</th>
        <th>Parent</th>
    </tr>
    <tr>
        <td>Screen</td>
        <td>screenText</td>
        <td>-</td>
        <td>App</td>
    </tr>
    <tr>
        <td>NumberBtn</td>
        <td>value</td>
        <td>addDigit()</td>
        <td>KeyPad</td>
    </tr>
    <tr>
        <td>OperatorType1Btn</td>
        <td>Operator</td>
        <td>OprType1()</td>
        <td>KeyPad</td>
    </tr>
    <tr>
        <td>OperatorType2Btn</td>
        <td>Operator</td>
        <td>OprType2()</td>
        <td>KeyPad</td>
    </tr>
    <tr>
        <td>DotBtn</td>
        <td>-</td>
        <td>dotPressed()</td>
        <td>KeyPad</td>
    </tr>
    <tr>
        <td>ClearBtn</td>
        <td>-</td>
        <td>CPressed()</td>
        <td>KeyPad</td>
    </tr>
    <tr>
        <td>EqualBtn</td>
        <td>-</td>
        <td>EqualPressed()</td>
        <td>KeyPad</td>
    </tr>
    <tr>
        <td>Header</td>
        <td>-</td>
        <td>ThemeSelect()</td>
        <td>App</td>
    </tr>
    <tr>
        <td>ThemeSelector</td>
        <td>-</td>
        <td>ThemeSelect()</td>
        <td>Header</td>
    </tr>
    <tr>
        <td>KeyPad</td>
        <td>-</td>
        <td>addDigit(), OprType1(), OprType2(), dotPressed(), CPressed(), EqualPressed()</td>
        <td>App</td>
    </tr>
</table>


## CSS Variable Names Convention

AAA-GG-T-th[X]


<table>
    <tr>
        <th>X</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Is related to theme 1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Is related to theme 2</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Is related to theme 3</td>
    </tr>
</table>

<table>
    <tr>
        <th>AAA</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>bg</td>
        <td>Background</td>
    </tr>
    <tr>
        <td>num</td>
        <td>Numerical buttons</td>
    </tr>
    <tr>
        <td>opr</td>
        <td>Operational Buttons</td>
    </tr>
    <tr>
        <td>ftr</td>
        <td>Footer</td>
    </tr>
</table>

<table>
    <tr>
        <th>GG</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>R</td>
        <td>Right color of gradient</td>
    </tr>
    <tr>
        <td>L</td>
        <td>Left color of gradient</td>
    </tr>
</table>

<table>
    <tr>
        <th>T</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>C</td>
        <td>Color</td>
    </tr>
    <tr>
        <td>O</td>
        <td>Opacity</td>
    </tr>
</table>




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
