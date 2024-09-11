console.log('Create By  : Awin \nUpload     : 03.09.2024')
console.log('Fix Bug \nCIMB AM PM Fix  : 10.09.2024')
console.log('Update New \nRhb C-Name bank  : 10.09.2024 \nButton Hover     : 10.09.2024 \nBG Color         : 10.09.2024 \nShadow Button    : 10.09.2024')

// Button
const bottoncreatallcimb = document.getElementById('creatcimb')

// Id Input
const inputrefcimb = document.getElementById('cimb-input-ref')
const refeditcimb = document.getElementById('cimb-ref-edit')

const inputdatetimecimb = document.getElementById('cimb-input-datetime')
const datetimeeditcimb = document.getElementById('cimb-datetime-edit')

const inputamountcimb = document.getElementById('cimb-input-amount')
const amounteditcimb = document.getElementById('cimb-amount-edit')

const handleInput=(e) => {
    e.target.value = new Intl.NumberFormat('en-US').format(
        Number(e.target.value.replaceAll(",", "")),
        );
        }

// >>>>>>>>>> CIMB CHANGE <<<<<<<<<<
function cimbclick() {
    refeditcimb.innerHTML = inputrefcimb.value
    datetimeeditcimb.innerHTML = inputdatetimecimb.value
    amounteditcimb.innerHTML = inputamountcimb.value
    }
    bottoncreatallcimb.addEventListener('click', cimbclick)

function cimbnowdatetime() {

    let fulldate = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dd = fulldate.getDate();
    let mmm = months[fulldate.getMonth()];
    let yyyy = fulldate.getFullYear();
    let hou = fulldate.getHours();
    let min = fulldate.getMinutes();
    let sec = fulldate.getSeconds();
    let ampm = hou >= 12 ? 'pm' : 'am';

    

    hou = hou % 12;
    hou = hou ? hou : 12;
    min = min < 10 ? '0'+min : min;

    if (dd.toString().length == 1) {
        dd = '0' + dd;
    }

    if (mmm.toString().length == 1) {
        mmm = '0' + mmm;
    }

    if (hou.toString().length == 1) {
        hou = '0' + hou;
    }

    if (min.toString().length == 1) {
        min = '0' + min;
    }

    if (sec.toString().length == 1) {
        sec = '0' + sec;
    }
    document.getElementById('cimb-input-datetime').value = dd + " " + mmm + " " + yyyy + ", " + hou + ":" + min + ":" + sec + " " + ampm;

    }

// >>>>>>>>>> MBB CHANGE <<<<<<<<<<
const inputrefmbb = document.getElementById('mbb-input-ref')
const refeditmbb = document.getElementById('mbb-ref-edit')

const inputdatetimembb = document.getElementById('mbb-input-datetime')
const datetimeeditmbb = document.getElementById('mbb-datetime-edit')

const inputamountmbb = document.getElementById('mbb-input-amount')
const amounteditmbb = document.getElementById('mbb-amount-edit')

function onmbb() {
    refeditmbb.innerHTML = inputrefmbb.value;
    datetimeeditmbb.innerHTML = inputdatetimembb.value;
    amounteditmbb.innerHTML = inputamountmbb.value;
}

function mbbnowdatetime() {
    let fulldate = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dd = fulldate.getDate();
    let mmm = months[fulldate.getMonth()];
    let yyyy = fulldate.getFullYear();
    let hou = fulldate.getHours();
    let min = fulldate.getMinutes();
    let sec = fulldate.getSeconds();

    if (dd.toString().length == 1) {
        dd = '0' + dd;
    }

    if (mmm.toString().length == 1) {
        mmm = '0' + mmm;
    }

    if (hou.toString().length == 1) {
        hou = '0' + hou;
    }

    if (min.toString().length == 1) {
        min = '0' + min;
    }

    if (sec.toString().length == 1) {
        sec = '0' + sec;
    }
    document.getElementById('mbb-input-datetime').value = dd + " " + mmm + " " + yyyy + " " + hou + ":" + min + ":" + sec;

    }

    // >>>>>>>>>> RHB CHANGE <<<<<<<<<<
    let amountrhb = document.getElementById('amount-rhb')
    let inputrhb = document.getElementById('rhb-input-amount')

    let inputnamebank = document.getElementById('rhb-input-ref')
    let namebank = document.getElementById('name-bank')

    function onrhb() {
        amountrhb.innerHTML = inputrhb.value;
        namebank.innerHTML = inputnamebank.value;
    }