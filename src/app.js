import 'chart.js';
import './charts/helpers/chart.helper';
import { generateGlobalCasesContainer, generateCountriesList, generateCountiesList } from './assets/modules/List/GenerateList';
import { generateCountriesTable } from './assets/modules/Table/GenerateTable';
import { generateSearchInput } from './assets/modules/Search/LiveSearch';
import { generateLastUpdateDate } from './assets/modules/Additional_content/LastUpdateDate';
import { generateTitle } from './assets/modules/Additional_content/Title';
import { generateFooter } from './assets/modules/Additional_content/footer';
import './style.css';
import generateMap from './map/map';
import initKeyboard from './keyboard/script';
import appendFullScreenIco from './charts/chartFullScreen';

initKeyboard();
generateMap('.map-container');


let arr1 = [1,2,2,3];
let arr2 = [2,2,4,5];

let i = 0;
arr1.forEach((el,el2)=> {
    arr2.forEach((el,el2) => {
        if(arr1[el2] === arr2[el2]) {
            arr2.slice(el)
        } return i++
}); 
});
console.log(i)
let qwe = {
    a:10
}
let qwert = {
    a:10
}
console.log(qwe.a === qwert.a)