const selectedSeatEl = document.getElementById('selectedSeat');
const totalBookedEl = document.getElementById('totalBooked');
const availableSeatEl = document.getElementById('availableSeat');
const totalPriceEl = document.getElementById('totalPrice');
const cuponFieldEl = document.getElementById('cuponField');
const cuponBtnEl = document.getElementById('cuponBtn');
const defaultTextEl = document.getElementById('defaultText');
const grandTotalEl = document.getElementById('grandTotal');
const cuponAreaEl = document.getElementById('cuponArea');
const phoneNumEl = document.getElementById('phoneNum');
const nextBtnEl = document.getElementById('nextBtn');
const inpAreaEl = document.getElementsByClassName('inpArea')
// const modalAreaEl = document.getElementById('modalArea');


let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event) {

    if (selectedSeat.includes(event.innerText)) {
        return alert('seat already booked')
    } else if (selectedSeat.length < 4) {



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





    } else {
        return alert('maximum seat booked');
    }
}


let cuponSave = 0;
document.getElementById('cuponBtn').addEventListener('click', function () {

    const cpnInpValue = document.getElementById('cuponField').value;

    console.log(cpnInpValue);
    if (cpnInpValue !== 'CUPON50' && cpnInpValue !== 'Couple 20') {
        return alert("Cupon is not valid")
    } else {
        if (cpnInpValue === 'CUPON50') {
            cuponSave = totalPrice * .15;

        } else if (cpnInpValue === 'Couple 20') {
            cuponSave = totalPrice * .20;
        }

    }

    cuponFieldEl.classList.add('hidden');
    cuponBtnEl.classList.add('hidden');
    cuponAreaEl.innerHTML = `<div class="flex justify-between text-lg font-semibold pt-5">
                        <p>Discount Price :</p>
                        <p>-BDT: ${cuponSave}</p>
                    </div>`


    const grandTotalValue = totalPrice - cuponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2);

})


phoneNumEl.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    if (inputValue.length >= 11) {
        nextBtnEl.removeAttribute('disabled')
    }

})

document.getElementById('btnContinue').addEventListener('click', function () {
    window.location.reload();
})