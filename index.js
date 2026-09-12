console.log('Create By  : Awin \nUpload     : 03.09.2024 \nRemodel    : 21.09.2024')
console.log('Fix Bug \nCIMB AM PM Fix  : 10.09.2024 \nC-Name Bank     : 22.09.2024')
console.log('New Update \nRhb C-Name bank  : 10.09.2024 \nButton Hover     : 10.09.2024 \nBG Color         : 10.09.2024 \nShadow Button    : 10.09.2024  \n\nInput Change     : 21.09.2024 \nButton Hide      : 21.09.2024 \nDrop Down        : 21.09.2024 \nResit HLB        : 21.09.2024 \n\nResit PBB        : 08.03.2025 \nPng Game         : 08.03.2025 \nFont HLB         : 08.03.2025 \nUpdate Resit RHB : 17.07.2026')

// Button
const bottoncreatallcimb = document.getElementById('creatcimb')

// Id Input
const inputrefcimb = document.getElementById('cimb-input-ref')
const refeditcimb = document.getElementById('cimb-ref-edit')

const inputdatetimecimb = document.getElementById('cimb-input-datetime')
const datetimeeditcimb = document.getElementById('cimb-datetime-edit')

const inputamountcimb = document.getElementById('cimb-input-amount')
const amounteditcimb = document.getElementById('cimb-amount-edit')

const handleInput = (e) => {
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
    min = min < 10 ? '0' + min : min;

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

function hideCIMB() {
    document.getElementById('hideCIMB').style.display = "none";
    setTimeout(function show() {
        document.getElementById('hideCIMB').style.display = "";
    }, 5000)
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

function hideMBB() {
    document.getElementById('hideMBB').style.display = "none";
    setTimeout(function show() {
        document.getElementById('hideMBB').style.display = "";
    }, 5000)
}

// >>>>>>>>>> RHB CHANGE <<<<<<<<<<
let rhbdatetime = document.getElementById('rhb-datetime')
let inputrhbdatetime = document.getElementById('rhb-input-datetime')


let amountrhb = document.getElementById('amount-rhb')
let inputrhb = document.getElementById('rhb-input-amount')

let reffrhb = document.getElementById('reff-rhb');
let inputreffrhb = document.getElementById('rhb-input-reff');

let namebank = document.getElementById('name-bank')
let inputnamebank = document.getElementById('rhb-input-list-bank')

function onrhb() {
    amountrhb.innerHTML = inputrhb.value;
    namebank.innerHTML = inputnamebank.value;
    reffrhb.value = inputreffrhb.value;
    rhbdatetime.innerHTML = inputrhbdatetime.value;


    const reff = document.getElementById("reff-rhb");

    if (autoRandom) {

        const prefix = document.getElementById("reff-prefix").value.trim();

        if (prefix === "") {
            alert("ISI NOMOR REFF DEPAN, DI KOTAK KECIL");
            document.getElementById("reff-prefix").focus();
            return;
        }

        reff.value = generateReference(prefix);

    } else {

        reff.value = document.getElementById("rhb-input-reff").value;

    }

}

let Keywords = [
    'AGRO Bank', 'Alliance Bank Malaysia Berhad', 'RHB', 'AMBank', 'Affin Bank Berhad', 'Bank Islam Malaysia Berhad', 'Bank Kerjasama Rakyat Malaysia', 'Bank Muamalat Malaysia Berhad', 'Bank Simpanan Nasional', 'BigPay', 'Boost Bank', 'Boost eWallet', 'CIMB', 'Citibank Berhad', 'GXBank', 'Hong Leong Bank Berhad', 'Maybank', 'HSBC Bank', 'MBSB Bank Berhad', 'OCBC Bank Malaysia Berhad', 'Public Bank', 'Shopee', 'Touch N Go Digital', 'United Overseas Bank Berhad',
];
const listBoxRhb = document.getElementById('list-box-rhb');
const Rhbinputbox = document.getElementById('rhb-input-list-bank');
function onkey() {
    const Rhbinputbox = document.getElementById('rhb-input-list-bank');
    let resultRHB = [];
    let input = Rhbinputbox.value;
    if (input.length) {
        resultRHB = Keywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(resultRHB)
    }
    displayRHB(resultRHB);
    if (!resultRHB.length) {
        listBoxRhb.innerHTML = '';
    }
}

function displayRHB(resultRHB) {
    const content = resultRHB.map((listRHB) => {
        return "<li onclick=selectInputRHB(this)>" + listRHB + "</li>";
    });
    listBoxRhb.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInputRHB(listRHB) {
    Rhbinputbox.value = listRHB.innerHTML
    listBoxRhb.innerHTML = '';
}

function hideRHB() {
    document.getElementById('hideRHB').style.display = "none";
    setTimeout(function show() {
        document.getElementById('hideRHB').style.display = "";
    }, 5000)
}

function rhbnowdatetime() {
    let fulldate = new Date();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let day = days[fulldate.getDay()];
    let dd = fulldate.getDate();
    let mmm = months[fulldate.getMonth()];
    let yyyy = fulldate.getFullYear();
    let hou = fulldate.getHours();
    let min = fulldate.getMinutes();
    let ampm = hou >= 12 ? "PM" : "AM";

    hou = hou % 12;
    hou = hou ? hou : 12;

    if (hou < 10) hou = "0" + hou;
    if (min < 10) min = "0" + min;
    if (dd < 10) dd = "0" + dd;

    document.getElementById("rhb-input-datetime").value = `${hou}:${min}${ampm} ${day}, ${dd} ${mmm} ${yyyy} MYT`;
}


const types = [
    "DuitNow Transfer",
    "Open 3rd Party Transfer",
    "Favourite 3rd Party Transfer",
    "OPEN Interbank",
    "3rd Party Transfer",
    "Favourite DuitNow Transfer"
];

let currentIndex = 0;

const typeText = document.getElementById("typeText");
const buttonT = document.getElementById("changeTypeBtn");

buttonT.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= types.length) {
        currentIndex = 0;
    }
    typeText.innerText = types[currentIndex];
});



let autoRandomReff = false;

const toggleBtn = document.getElementById("toggleReff");

toggleBtn.onclick = function () {
    autoRandomReff = !autoRandomReff;

    this.textContent = autoRandomReff ? "ON" : "OFF";
    this.classList.toggle("active", autoRandomReff);
};

function generateRandom17Digit() {
    let number = "";

    number += Math.floor(Math.random() * 9) + 1;

    for (let i = 1; i < 17; i++) {
        number += Math.floor(Math.random() * 10);
    }

    return number;
}



let autoRandom = false;

const toggle = document.getElementById("toggleReff");
const prefix = document.getElementById("reff-prefix");

toggle.onclick = function () {

    autoRandom = !autoRandom;

    if (autoRandom) {

        this.innerHTML = "ON";
        this.classList.add("active");

        prefix.classList.add("show");

    } else {

        this.innerHTML = "OFF";
        this.classList.remove("active");

        prefix.classList.remove("show");
        prefix.value = "";

    }

};


const tableInput = document.getElementById("rhb-input-reff");

toggle.onclick = function () {

    autoRandom = !autoRandom;

    if (autoRandom) {

        this.textContent = "ON";
        this.classList.add("active");

        prefix.classList.add("show");

        tableInput.placeholder = "Random Reff Active";

    } else {

        this.textContent = "OFF";
        this.classList.remove("active");

        prefix.classList.remove("show");
        prefix.value = "";
        prefix.style.width = "0px";

        tableInput.placeholder = "Number Reff";

    }

};



function generateReference(prefix = "") {

    prefix = prefix.replace(/\D/g, ""); // hanya angka

    if (prefix.length > 17) {
        prefix = prefix.substring(0, 17);
    }

    let result = prefix;

    const randomLength = 17 - prefix.length;

    for (let i = 0; i < randomLength; i++) {
        result += Math.floor(Math.random() * 10);
    }

    return result;
}

const prefixInput = document.getElementById("reff-prefix");

function resizePrefixInput() {

    if (!prefixInput.classList.contains("show")) return;

    const minWidth = 45;
    const maxWidth = 250;

    const newWidth = Math.min(
        maxWidth,
        Math.max(minWidth, (prefixInput.value.length + 1) * 20)
    );

    prefixInput.style.width = newWidth + "px";
}

prefixInput.addEventListener("input", resizePrefixInput);


// >>>>>>>>>> HLB CHANGE <<<<<<<<<<
let datetimehlb = document.getElementById('date-time-hlb');
let hlbinputdatetime = document.getElementById('hlb-input-datetime');

let amounthlb1 = document.getElementById('amount-hlb-1');
let amounthlb2 = document.getElementById('amount-hlb-2');
let hlbinputamount = document.getElementById('hlb-input-amount');

let namebankhlb = document.getElementById('name-bank-hlb');
let hlbinputnamebank = document.getElementById('hlb-input-namebank');

function onhlb() {
    datetimehlb.innerHTML = hlbinputdatetime.value;
    amounthlb1.innerHTML = hlbinputamount.value;
    amounthlb2.innerHTML = hlbinputamount.value;
    namebankhlb.innerHTML = hlbinputnamebank.value;
}

function hideHLB() {
    document.getElementById('hideHLB').style.display = "none";
    setTimeout(function show() {
        document.getElementById('hideHLB').style.display = "";
    }, 5000)
}

function hlbnowdatetime() {
    let fulldate = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dd = fulldate.getDate();
    let mmm = months[fulldate.getMonth()];
    let yyyy = fulldate.getFullYear();
    let hou = fulldate.getHours();
    let min = fulldate.getMinutes();
    let sec = fulldate.getSeconds();
    let ampm = hou >= 12 ? 'PM' : 'AM';

    hou = hou % 12;
    hou = hou ? hou : 12;
    min = min < 10 ? '0' + min : min;

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

    document.getElementById('hlb-input-datetime').value = dd + " " + mmm + " " + yyyy + " " + hou + ":" + min + "" + ampm;

}

let Keywordshlb = [
    'AEON BANK', 'AFFIN BANK BERHAD', 'AGROBANK', 'ALLIANCE BANK MALAYSIA BERHAD', 'AMBANK/AMFINANCE BERHAD', 'BANK ISLAM MALAYSIA BERHAD', 'BANK KERJASAMA RAKYAT MALAYSIA BERHAD', 'BANK MUAMALAT MALAYSIA BERHAD', 'BANK SIMPANAN NASIONAL BERHAD', 'BIGPAY EWALLET', 'BOOST BANK', 'CIMB BANK BERHAD', 'CITIBANK', 'GXBank', 'HSBC BANK MALAYSIA BERHAD', 'MAYBANK BERHAD', 'MBSB BANK BERHAD', 'OCBC BANK (M) BHD/OCBC AL-AMIN BANK BHD', 'PUBLIC BANK/PUBLIC FINANCE BERHAD', 'RHB BANK BERHAD', 'UNITED OVERSEAS BANK (MALAYSIA) BERHAD', "TOUCH 'n GO",
];
const listBoxhlb = document.getElementById('list-box-hlb');
const hlbinputbox = document.getElementById('hlb-input-namebank');
function onkeyhlb() {
    const hlbinputbox = document.getElementById('hlb-input-namebank');
    let resultHLB = [];
    let input = hlbinputbox.value;
    if (input.length) {
        resultHLB = Keywordshlb.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(resultHLB)
    }
    displayHLB(resultHLB);
    if (!resultHLB.length) {
        listBoxhlb.innerHTML = '';
    }
}

function displayHLB(resultHLB) {
    const content = resultHLB.map((listHLB) => {
        return "<li onclick=selectInputHlb(this)>" + listHLB + "</li>";
    });
    listBoxhlb.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInputHlb(listHLB) {
    hlbinputbox.value = listHLB.innerHTML
    listBoxhlb.innerHTML = '';
}


document.addEventListener("DOMContentLoaded", function () {

    const typesrhb = [
        "RHB Smart Account",
        "Savings Account-i",
        "RHB MaxSave",
    ];

    let currentIndex = 0;

    const typeTextrhb1 = document.getElementById("typeTextrhb");
    const buttonTrhb = document.getElementById("changeTypeBtnRhb");

    buttonTrhb.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex >= typesrhb.length) {
            currentIndex = 0;
        }

        typeTextrhb1.value = typesrhb[currentIndex];
    });

});




// >>>>>>>>>> PBB CHANGE <<<<<<<<<<
let datetimepbb = document.getElementById('date-time-pbb');
let pbbinputdatetime = document.getElementById('pbb-input-datetime');

let amountpbb = document.getElementById('amount-pbb');
let pbbinputamount = document.getElementById('pbb-input-amount');

let namebankpbb = document.getElementById('name-bank-pbb');
let pbbinputnamebank = document.getElementById('pbb-input-namebank');

function onpbb() {
    datetimepbb.innerHTML = pbbinputdatetime.value;
    amountpbb.innerHTML = pbbinputamount.value;
    namebankpbb.innerHTML = pbbinputnamebank.value;
}

function pbbnowdatetime() {
    let fulldate = new Date();
    let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
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
    document.getElementById('pbb-input-datetime').value = dd + "-" + mmm + "-" + yyyy + " " + hou + ":" + min + ":" + sec;
}



let Keywordspbb = [
    'AEON Bank', 'Affin Bank Berhad', 'Al Rajhi Banking And Investment Corporation', 'Alliance Bank Malaysia Berhad', 'AmBank (M) Berhad', 'BNP Paribas (Malaysia) Berhad', 'Bank Islam Malaysia Berhad', 'Bank Kerjasama Rakyat Malaysia Berhad', 'Bank Muamalat (Malaysia) Berhad', 'Bank Of America Malaysia Berhad', 'Bank Pertanian Malaysia Berhad (Agrobank)Bank', 'Simpanan Nasional Berhad', 'Bank of China (Malaysia) Berhad', 'BigPay', 'Boost Bank', 'Boost eWallet', 'CIMB Bank Berhad', 'China Construction Bank (Malaysia) Berhad', 'Citibank Berhad', 'Deutsche Bank (Malaysia) Berhad', 'Finexus Cards Sdn. Bhd.', 'GXBank', 'HSBC Bank Malaysia Berhad', 'Industrial And Commercial Bank of China (ICBC)', 'Hong Leong Bank Berhad', 'JP Morgan Chase Bank Berhad', 'Kuwait Finance House (Malaysia) Berhad', 'MBSB Bank', 'MUFG Bank (Malaysia) Bhd', 'Maybank Berhad', 'Mizuho Bank (Malaysia) Berhad', 'OCBC Bank (Malaysia) Berhad', 'RHB Bank Berhad', 'ShopeePay', 'Standard Chartered Bank (Malaysia) Berhad', 'Sumitomo Mitsui Banking Corporation', 'Touch n Go eWallet', 'United Overseas Bank (Malaysia) Berhad',
];
const listBoxpbb = document.getElementById('list-box-pbb');
const pbbinputbox = document.getElementById('pbb-input-namebank');
function onkeypbb() {
    const pbbinputbox = document.getElementById('pbb-input-namebank');
    let resultPBB = [];
    let input = pbbinputbox.value;
    if (input.length) {
        resultPBB = Keywordspbb.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(resultPBB)
    }
    displayPBB(resultPBB);
    if (!resultPBB.length) {
        listBoxpbb.innerHTML = '';
    }
}

function displayPBB(resultPBB) {
    const content = resultPBB.map((listPBB) => {
        return "<li onclick=selectInputPBB(this)>" + listPBB + "</li>";
    });
    listBoxpbb.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInputPBB(listPBB) {
    pbbinputbox.value = listPBB.innerHTML
    listBoxpbb.innerHTML = '';
}



// RYT
let rytTime = document.getElementById('ryt-time')
let rytinputdatetime = document.getElementById('ryt-input-datetime')

let rytAmount = document.getElementById('amount-ryt')
let rytinputamount = document.getElementById('ryt-input-amount')


function onryt() {
    rytTime.innerHTML = rytinputdatetime.value;
    rytAmount.innerHTML = rytinputamount.value;
}

function rytnowdatetime() {
    let fulldate = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dd = fulldate.getDate();
    let mmm = months[fulldate.getMonth()];
    let yyyy = fulldate.getFullYear();
    let hou = fulldate.getHours();
    let min = fulldate.getMinutes();
    let ampm = hou >= 12 ? 'PM' : 'AM';

    hou = hou % 12;
    hou = hou ? hou : 12;
    min = min < 10 ? '0' + min : min;


    if (dd.toString().length == 1) {
        dd = '0' + dd;
    }

    if (mmm.toString().length == 1) {
        mmm = '0' + mmm;
    }

    if (hou.toString().length == 1) {
        hou = '' + hou;
    }

    if (min.toString().length == 1) {
        min = '0' + min;
    }

    document.getElementById('ryt-input-datetime').value = dd + " " + mmm + " " + yyyy + ", " + hou + ":" + min + " " + ampm;
}


let gxTime = document.getElementById('gx-time')
let gxinputdatetime = document.getElementById('gx-input-datetime')

let gxAmount = document.getElementById('amount-gx')
let gxinputamount = document.getElementById('gx-input-amount')


function ongx() {
    gxTime.innerHTML = gxinputdatetime.value;
    gxAmount.innerHTML = gxinputamount.value;

}

function gxnowdatetime() {

    let fulldate = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dd = fulldate.getDate();
    let mmm = months[fulldate.getMonth()];
    let yyyy = fulldate.getFullYear();
    let hou = fulldate.getHours();
    let min = fulldate.getMinutes();
    let ampm = hou >= 12 ? 'PM' : 'AM';

    hou = hou % 12;
    hou = hou ? hou : 12;
    min = min < 10 ? '0' + min : min;


    if (dd.toString().length == 1) {
        dd = '0' + dd;
    }

    if (mmm.toString().length == 1) {
        mmm = '0' + mmm;
    }

    if (hou.toString().length == 1) {
        hou = '' + hou;
    }

    if (min.toString().length == 1) {
        min = '0' + min;
    }

    document.getElementById('gx-input-datetime').value = dd + " " + mmm + " " + yyyy + ", " + hou + ":" + min + " " + ampm;
}


function generateTransactionID() {
    const bytes = new Uint8Array(5);
    crypto.getRandomValues(bytes);
    return Array.from(bytes)
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

const trxDisplay = document.getElementById("trxID");
const button = document.getElementById("createBtn");

button.addEventListener("click", function () {
    trxDisplay.innerText = generateTransactionID();
});



// BSN

let amountbsn = document.getElementById('amount-bsn');
let bsninputamount = document.getElementById('bsn-input-amount');

let namebankbsn = document.getElementById('name-bank-bsn');
let bsninputnamebank = document.getElementById('bsn-input-namebank');

function onbsn() {
    amountbsn.innerHTML = bsninputamount.value;
    namebankbsn.innerHTML = bsninputnamebank.value;
}

const Keywordsbsn = [
    "Please Select",
    "AEON Bank",
    "Affin Bank Berhad",
    "Alliance Bank Malaysia Berhad",
    "Al Rajhi Banking & Investment Corporation",
    "Ambank (M) Berhad",
    "Bank Islam Malaysia Berhad",
    "Bank Kerjasama Rakyat Malaysia Berhad",
    "Bank Muamalat (Malaysia) Bhd",
    "Bank of America (Malaysia) Berhad",
    "Bank of China (Malaysia) Berhad",
    "Bank Pertanian Malaysia Berhad (Agrobank)",
    "BigPay Malaysia Sdn Bhd",
    "BNP Paribas (Malaysia) Berhad",
    "Boost Bank",
    "Boost eWallet",
    "China Construction Bank (Malaysia) Berhad",
    "CIMB Bank Berhad",
    "Citibank Berhad",
    "Co-opbank Pertama",
    "Deutsche Bank (Malaysia) Berhad",
    "Fass Payment Solutions Sdn Bhd",
    "Finexus Cards Sdn Bhd",
    "GXBank",
    "Hong Leong Bank Berhad",
    "HSBC Bank Malaysia Berhad",
    "Industrial & Commercial Bank of China (ICBC)",
    "Instapay",
    "JP Morgan Chase Bank Berhad",
    "KAF Digital Bank",
    "Kuwait Finance House (Malaysia) Berhad",
    "Maybank Berhad",
    "MBSB Bank Berhad",
    "MCash",
    "Mizuho Bank (Malaysia) Berhad",
    "MUFG Bank (Malaysia) Berhad",
    "OCBC Bank (Malaysia) Berhad",
    "Paydibs Sdn Bhd",
    "Public Bank Berhad",
    "RHB Bank Berhad",
    "Ryt Bank",
    "Setel Ventures Sdn Bhd",
    "ShopeePay Malaysia Sdn Bhd",
    "Standard Chartered Bank (Malaysia) Berhad",
    "Sumitomo Mitsui Banking Corporation (M) Berhad",
    "Touch n Go Digital",
    "United Overseas Bank (Malaysia) Berhad",
    "WanPay",
    "Wise"
];
const listBoxbsn = document.getElementById('list-box-bsn');
const bsninputbox = document.getElementById('bsn-input-namebank');
function onkeybsn() {
    const bsninputbox = document.getElementById('bsn-input-namebank');
    let resultbsn = [];
    let input = bsninputbox.value;
    if (input.length) {
        resultbsn = Keywordsbsn.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(resultbsn)
    }
    displaybsn(resultbsn);
    if (!resultbsn.length) {
        listBoxbsn.innerHTML = '';
    }
}

function displaybsn(resultbsn) {
    const content = resultbsn.map((listbsn) => {
        return "<li onclick=selectInputbsn(this)>" + listbsn + "</li>";
    });
    listBoxbsn.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInputbsn(listbsn) {
    bsninputbox.value = listbsn.innerHTML
    listBoxbsn.innerHTML = '';
}
