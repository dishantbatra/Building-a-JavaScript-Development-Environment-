import numeral from 'numeral';
import './index.css';
 //debugger;
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this course`);
