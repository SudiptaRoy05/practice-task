
function getValuesById(id) {
    const iDvalue = document.getElementById(id);
    return iDvalue;
}


let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {

    if(selectedSeat.includes(event.innerText)){
        return alert('Seat is already booked');
    }
    else if(selectedSeat.length > 3){
        return alert("Maximum seat Selected");
    }else{
        event.classList.add('primary');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);

    const totalBookedEl = getValuesById('totalBooked');
    totalBookedEl.innerText = selectedSeat.length;

    const availableSeatEl = getValuesById('availableSeat');
    const newAvailable = parseInt(availableSeatEl.innerText) - 1;
    availableSeatEl.innerText = newAvailable;


    const totalPriceEl = getValuesById('totalPrice'); 
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice;


    const cuponFieldEl = getValuesById('cuponField');
    const cuponBtnEl = getValuesById('cuponBtn');
    if(selectedSeat.length >= 4){
        cuponFieldEl.removeAttribute('disabled');
        cuponBtnEl.removeAttribute('disabled');
    }




    const selectedSeatEl = getValuesById('selectedSeat');
    selectedSeatEl.innerHTML += `<tr class="bg-base-200">
                                  <th></th>
                                  <td>${event.innerText}</td>
                                  <td>Economy</td>
                                  <td>550</td>
                                </tr> `





    }

}

let cuponDiscount = 0;
const cuponFieldEl = getValuesById('cuponField');
const cuponBtnEl = getValuesById('cuponBtn');

cuponBtnEl.addEventListener('click', function(){
    const cuponFieldEl = getValuesById('cuponField').value;

    if(cuponFieldEl !== 'CUPON50' && cuponFieldEl !== 'Couple 20'){
        return alert('Invalid Cupon Code');
    }

    if(cuponFieldEl === 'CUPON50'){
        cuponDiscount = totalPrice * .15; 
    }
    else if(cuponFieldEl === 'Couple 20'){
        cuponDiscount = totalPrice * .20;
    }

    cuponFieldEl.classList.add('hidden');
    cuponBtnEl.classList.add('hidden');


    const grandTotalEl = getValuesById('grandTotal');
    grandTotalEl.innerText = totalPrice - cuponDiscount;

})