let FontSize = 1.5

const makeBigger = () => {
   FontSize += 0.3;
   changeFont();
   alert('make bigger!');
};

const makeSmaller = () => {
   FontSize -= 0.5;
   changeFont();
   alert('make smaller!');
};


const changeFont = () => {
   document.querySelector('.content').style.fontSize = `${FontSize}em`;
   document.querySelector('.content1').style.fontSize = `${FontSize}em`;
}


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

