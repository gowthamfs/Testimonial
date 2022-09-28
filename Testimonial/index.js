const imgEl = document.querySelector('img')
const para = document.querySelector('.para')
const userName = document.querySelector('.name')

const testimonials = [
    {photoUrl:"https://images.moneycontrol.com/static-mcnews/2021/12/RTX8EAZ.jpg" ,
    name:'Ratan Tata',
    text:'“Ups and downs in life are very important to keep us going because a straight line, even in an ECG. means we are not alive.”'},
     {name:'Ratan Tata',
     photoUrl:"https://images.moneycontrol.com/static-mcnews/2021/12/RTX1LLEN.jpg" ,
     text:'“Business need to go beyond the interest of their companies to the communities they serve.”'},
     {name:'Ratan Tata',
     photoUrl:"https://images.moneycontrol.com/static-mcnews/2019/04/Ratan-Tata.jpg" ,
     text:'“Take the stones people throw at you. And use them to build a monument.”'}
]

let index = 0;

function updateTest(){
    const {photoUrl,name, text} = testimonials[index];
    imgEl.src = photoUrl;
    userName.innerText = name;
    para.innerText = text;
    index++;
    if(index === testimonials.length){
        index = 0;
    }
    setTimeout(updateTest, 2000)
}
updateTest()

