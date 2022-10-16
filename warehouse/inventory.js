const btntimePopup = document.querySelector('.btn-time')
const modal = document.querySelector('.time-popup')

const btnChooseDate = document.querySelector('.choose-date')
const modalCalendar = document.querySelector('.calendar-popup')

const thisMonth = document.querySelector('#thisMonth')
const otherChoices = document.querySelector('#otherChoices')



function toggleModal() {
	   modal.classList.toggle('hide');
    modalCalendar.classList.add("hide");


}

function toggleModalCalendar() {
	modalCalendar.classList.toggle('hide')
    modal.classList.add("hide");


}



btntimePopup.addEventListener('click', toggleModal)
btnChooseDate.addEventListener('click', toggleModalCalendar)
thisMonth.addEventListener('click', toggleModal)
otherChoices.addEventListener('click', toggleModalCalendar)

$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
  })

