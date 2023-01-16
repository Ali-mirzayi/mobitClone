import {atom} from 'recoil';
const productInital = [{id:0,title:"empty",price:0,description:"empty",images:[""],category:{id:0,name:"",image:""},count:0}];

const DarkModeSwicher = atom({
    key:"DarkModeSwicher",
    default:true
});

const Products = atom({
    key: 'Products',
    default: productInital,
});

export { DarkModeSwicher ,Products };