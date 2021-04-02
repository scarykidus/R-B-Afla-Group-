let licenseForm = document.querySelector('.license-form');
let totalValue = licenseForm.querySelector('[name=total-value]');
let totalValueText = licenseForm.querySelector('.total__value');
let selectedPlan = licenseForm.querySelector('.selected-plan__value');
let licenseFormButton = licenseForm.querySelector('.license-form__button');
let licenseFormInputRadios = licenseForm.querySelectorAll('.license-form__input-radio');
let licenseFormSelect = licenseForm.querySelector('select');

licenseFormSelect.onchange = function() {
    for (let licenseFormInputRadio of licenseFormInputRadios) {
        if (licenseFormInputRadio.checked) {
            totalValue.value = licenseFormSelect.value * licenseFormInputRadio.value;
            totalValueText.textContent = totalValue.value;
        }
    }
}

for (let licenseFormInputRadio of licenseFormInputRadios) {
    licenseFormInputRadio.onchange = function() {
        if (licenseFormInputRadio.checked) {
            totalValue.value = licenseFormSelect.value * licenseFormInputRadio.value;
            totalValueText.textContent = totalValue.value;
        }
    }
}

licenseForm.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('license-form__input-radio')) {
        let array = Array.from(licenseFormInputRadios);
        let target = evt.target;
        let index = array.indexOf(target);

        array.forEach(function(item, i, arr) {
            if (i === index) {
                selectedPlan.textContent = i + 1;
            }
        });
    }
});