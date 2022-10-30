// Get DOM Elements
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn = document.getElementById('sort');
const sumBtn = document.getElementById('sum');

let data = [];

async function getRandomUser(){
     const res = await fetch ('fsdfsdfsdf')
     const data = await res.json();
     //console.log(data);

     const user = data.results(0); 
     

     const newUser = {
        name:`${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
     }
     addData(newUser);
};
function addData(newUser){
    data.push(newUser);
}

getRandomUser();

