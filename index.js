console.log('Create By  : Awin \nUpload     : 03.09.2024 \nRemodel    : 21.09.2024')
console.log('Fix Bug \nCIMB AM PM Fix  : 10.09.2024')
console.log('Update New \nRhb C-Name bank  : 10.09.2024 \nButton Hover     : 10.09.2024 \nBG Color         : 10.09.2024 \nShadow Button    : 10.09.2024  \nInput Change     : 21.09.2024 \nButton Hide      : 21.09.2024 \nDrop Down        : 21.09.2024 \nResit HLB        : 21.09.2024')

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

    function hideCIMB() {
        document.getElementById('hideCIMB').style.display = "none";
        setTimeout(function show() {
            document.getElementById('hideCIMB').style.display = "";
        },5000)
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
        },5000)
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

    let Keywords = [
        'AGRO Bank','Alliance Bank Malaysia Berhad','AMBank','Affin Bank Berhad','Bank Islam Malaysia Berhad','Bank Kerjasama Rakyat Malaysia','Bank Muamalat Malaysia Berhad','Bank Simpanan Nasional','BigPay','Boost Bank','Boost eWallet','CIMB','Citibank Berhad','GXBank','Hong Leong Bank Berhad','Maybank','HSBC Bank','MBSB Bank Berhad','OCBC Bank Malaysia Berhad','Public Bank','Shopee','Touch N Go Digital','United Overseas Bank Berhad',
    ];
    
    const listBox = document.querySelector('.list-box');
    const inputbox = document.getElementById('rhb-input-ref');
    
    function onkey(){
        const inputbox = document.getElementById('rhb-input-ref');
        let result = [];
        let input = inputbox.value;
        if(input.length){
            result = Keywords.filter((keyword)=> {
               return keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result)
        }
        display(result);
        if(!result.length){
            listBox.innerHTML = '';
        }
    }
    
    function display(result){
        const content = result.map((list)=> {
            return "<li onclick=selectInput(this)>" + list + "</li>";
        });
        listBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }
    
    function selectInput(list) {
        inputbox.value = list.innerHTML
        listBox.innerHTML = '';
    }

    function hideRHB() {
        document.getElementById('hideRHB').style.display = "none";
        setTimeout(function show() {
            document.getElementById('hideRHB').style.display = "";
        },5000)
    }




   // >>>>>>>>>> HLB CHANGE <<<<<<<<<<
   let datetimehlb = document.getElementById('date-time-hlb');
   let hlbinputdatetime = document.getElementById('hlb-input-datetime');

   let amounthlb1= document.getElementById('amount-hlb-1');
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
    },5000)
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

    document.getElementById('hlb-input-datetime').value = dd + " " + mmm + " " + yyyy + " " + hou + ":" + min + "" + ampm;

    }




    let Keywordshlb = [
        'AEON BANK','AFFIN BANK BERHAD','AGROBANK','ALLIANCE BANK MALAYSIA BERHAD','AMBANK/AMFINANCE BERHAD','BANK ISLAM MALAYSIA BERHAD','BANK KERJASAMA RAKYAT MALAYSIA BERHAD','BANK MUAMALAT MALAYSIA BERHAD','BANK SIMPANAN NASIONAL BERHAD','BIGPAY EWALLET','BOOST BANK','CIMB BANK BERHAD','CITIBANK','GXBank','HSBC BANK MALAYSIA BERHAD','MAYBANK BERHAD','MBSB BANK BERHAD','OCBC BANK (M) BHD/OCBC AL-AMIN BANK BHD','PUBLIC BANK/PUBLIC FINANCE BERHAD','RHB BANK BERHAD','UNITED OVERSEAS BANK (MALAYSIA) BERHAD',"TOUCH 'n GO",
    ];
    
    const listBoxhlb = document.getElementById('list-box-hlb');
    const hlbinputbox = document.getElementById('hlb-input-namebank');
    
    function onkeyhlb(){
        const hlbinputbox = document.getElementById('hlb-input-namebank');
        let result = [];
        let input = hlbinputbox.value;
        if(input.length){
            result = Keywordshlb.filter((keyword)=> {
               return keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result)
        }
        display(result);
        if(!result.length){
            listBoxhlb.innerHTML = '';
        }
    }
    
    function display(result){
        const content = result.map((list)=> {
            return "<li onclick=selectInput(this)>" + list + "</li>";
        });
        listBoxhlb.innerHTML = "<ul>" + content.join('') + "</ul>";
    }
    
    function selectInput(list) {
        hlbinputbox.value = list.innerHTML
        listBoxhlb.innerHTML = '';
    }
   