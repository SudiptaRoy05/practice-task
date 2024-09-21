const selectedSeatEl = document.getElementById('selectedSeat');
const totalBookedEl = document.getElementById('totalBooked');
const availableSeatEl = document.getElementById('availableSeat');
const totalPriceEl = document.getElementById('totalPrice');
const cuponFieldEl = document.getElementById('cuponField');
const cuponBtnEl = document.getElementById('cuponBtn');
const defaultTextEl = document.getElementById('defaultText');

let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event) {

    if (selectedSeat.includes(event.innerText)) {
        return alert('seat already booked')
    }else if(selectedSeat.length < 4){

   

        event.classList.add('primary');
        event.classList.add('text-white');

        selectedSeat.push(event.innerText);
        totalBookedEl.innerText = selectedSeat.length;

        // decreas availableSeat 
        const availableSeatValue = parseInt(availableSeatEl.innerText
        );

        const newAvailavleSeat = availableSeatValue - 1;
        availableSeatEl.innerText = newAvailavleSeat;

        defaultTextEl.classList.add('hidden');


        // price update 
        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);

        // active coupon button 
        if (selectedSeat.length > 3) {
            cuponFieldEl.removeAttribute('disabled');
            cuponBtnEl.removeAttribute('disabled')
        }


        selectedSeatEl.innerHTML += `<tr id="selectedSeat" class="bg-base-200">
                                  <th></th>
                                  <td>${event.innerText}</td>
                                  <td>Economy</td>
                                  <td>550</td>
                                </tr>`


    }else{
        return alert('maximum seat booked');
    }
}

