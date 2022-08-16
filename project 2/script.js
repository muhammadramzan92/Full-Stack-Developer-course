const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occopied)')
const count = document.getElementById('count');
const total =document.getElementById('total');
const movieSelect = document.getElementById('movie')

let  ticketPrice= +movieSelect.value;

function Updatecount(){
    const selectedSeats= document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);
    const selectedSeatscount= selectedSeats.length;
    count.innerText=selectedSeatscount;
    total.innerText= ticketPrice*selectedSeatscount;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


 console.log(total);
   

}
localStorage.setItem('name','Adil');


container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !(e.target.classList.contains('occupied')))
    {
        e.target.classList.toggle('selected');
        Updatecount();
    }
})

movieSelect.addEventListener('change',e =>{
    ticketPrice= +e.target.value;
    Updatecount();
    
})