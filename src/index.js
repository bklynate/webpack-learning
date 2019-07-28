import nav from './nav';
import { top, bottom, footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import css from './footer.css';
import buttonCss from './button.css';
import makeImage from './image';
import image from './webpack-logo.jpg';

console.log(image);

const webpackImage = makeImage(image);
const button = makeButton('Nathaniel Is Learning!');
button.style = makeColorStyle('crimson');
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(webpackImage);

console.log(nav(), top, bottom, makeColorStyle('cyan'));
