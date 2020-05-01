const makeBigger = () => {

   document.querySelector('.content').style.fontSize='3em';
   document.querySelector('.content').style.backgroundColor='hotpink';

};

const makeSmaller = () => {

   document.querySelector('.content').style.fontSize='1.4em';
   document.querySelector('.content').style.backgroundColor='white';

};



document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a1').oncontextmenu = makeSmaller;
document.querySelector('.a2').onclick = makeSmaller;
// */
