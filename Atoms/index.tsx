import {atom} from 'recoil';
// import lightThemeOptions from '../styles/theme/optionalTheme';

// const { darkTheme } = lightThemeOptions;
const productInital = [{id:0,title:"empty",price:0,description:"empty",images:[""],category:{id:0,name:"",image:""},count:0}];

const DarkModeSwicher = atom({
    key:"DarkModeSwicher",
    default:true
});

const Products = atom({
    key: 'Products',
    default: productInital,
});

// const Products = selector({
//     key: 'Products',
//     get: ({get}) => get(Product),
//     set: ({set,get}) => {
//         const produc = get(Product);
//         set(
//             Product,
//             produc.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)
//             )
//         }
//     });
    // produc.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)

export { DarkModeSwicher ,Products };