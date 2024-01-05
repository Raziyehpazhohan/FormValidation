// input substring && focus input.............
let n = 0
let s = 0
let p = 0

// _inp = document.querySelectorAll('.inpcart>input')
let _one = document.getElementById('one')
_inp = document.querySelectorAll('section>input')
let _h = document.querySelector('.numbercart>h6')
let x = document.getElementById('smallcart')
let _cvv = document.getElementById('cvv')
let _mydatecart = document.getElementById('mydatecart')
let _mypass = document.getElementById('_pass')
function mycart(self,n){ 
    if(((self.value).length) >= 4){
        self.value = (self.value).substring(0 , 4)
        n++
        if(n < 4){
            _inp[n].focus()
        }else{
            _cvv.focus()  
        }
    }
}
function mycvv(self){
if(((self.value).length) >= 3){
    self.value = (self.value).substring(0 , 3)
    document.getElementById('mydatecart').focus() 
}
}
_inpdate = document.querySelectorAll('.inpdate>input')
function mydate(self , s) {
if(((self.value).length) >= 2){
    self.value = (self.value).substring(0 , 2)
    s++
    if(s < 2){
     _inpdate[s].focus()
    }else{
    document.getElementById('_pass').focus()
}
}   
}
function mypass(self){
    if(((self.value).length) > 8){
        self.value = (self.value).substring(0 , 8)
        document.getElementById('_mycode').focus()
    }
}
function mycode(self){
    if(((self.value).length) > 5){
        self.value = (self.value).substring(0 , 5)
    }
}

// Text Write in Title.......
setInterval(() => {
let x1 = setInterval(_txttitle , 400)
const _writetxt = ['AceCoinPay']
let i = 1

// _txttitle()
function _txttitle(){
    let _writetxt01 = _writetxt[0]
    if(i <= _writetxt01.length){
        document.getElementById('writetxt').innerHTML = _writetxt01.substring(0 , i)
        i++
    }else{
        clearInterval(x1)
      setTimeout(() => {
        x2 = setInterval(() => {
                if(i > 0){
            document.getElementById('writetxt').innerHTML = _writetxt01.substring(0 , i)
            i--
            }else{
            document.getElementById('writetxt').innerHTML = ' '
            clearInterval(x2)
            }
            } , 200);
      } , 400);
    }
    console.log(_writetxt01)
}
} , 7200);

// Math Random In Code.........
document.getElementById('myrand').addEventListener('click' , function(){
    const x1 = ['v' ,'x' ,'h' ,'z' ,'d' ,'s' ,'m' ,'p' , 'n', 'r', 'b', 'w', 'l', 'y', 'q', 't', 'k', 'c']
    const x2 = ['u', 'i', 'e', 'o', 'a']
    const x3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let txtrand = ''
    txtrand += x1[parseInt(Math.random() * (x1.length))]
    txtrand += x3[parseInt(Math.random() * (x3.length))]
    txtrand += x2[parseInt(Math.random() * (x2.length))]
    txtrand += x3[parseInt(Math.random() * (x3.length))]
    txtrand += x1[parseInt(Math.random() * (x1.length))]
    document.getElementById('mytxtcode').innerHTML = txtrand
})

// Number type of Buttoms In CVV And Password.........
function _shownumber01(){
    document.getElementById('numberslice01').style.display = 'flex'
    document.getElementById('clickshownumberslice01').style.display = 'none'
    document.getElementById('clickclosenumberslice01').style.display = 'block'
}
function _closenumber01(){
    document.getElementById('numberslice01').style.display = 'none'
    document.getElementById('clickshownumberslice01').style.display = 'block'
    document.getElementById('clickclosenumberslice01').style.display = 'none'
}
function _shownumber02(){
    document.getElementById('numberslice02').style.display = 'flex'
    document.getElementById('clickshownumberslice02').style.display = 'none'
    document.getElementById('clickclosenumberslice02').style.display= 'block'
}
function _closenumber02(){
    document.getElementById('numberslice02').style.display = 'none'
    document.getElementById('clickshownumberslice02').style.display = 'block'
    document.getElementById('clickclosenumberslice02').style.display = 'none'
}
function btnNumber(e){
    if((_mypass.value).length > 7){
        e.preventDefault;
        // _mypass.value =""
    }else{
        _mypass.value += e.innerText;

    }
}
function btnNumber01(e){
    if((_cvv.value).length > 2){
        e.preventDefault;
        // _mypass.value =""
    }else{
        _cvv.value += e.innerText;

    }
}

// FormValidation..........
function _myvalidation(){
    let flag = 0
    const data = []
    for(i=0 ; i<_inp.length ; i++){
        _inp[i].style.backgroundColor = ''
            data.push(_inp[i].value)
            if(
                (data[i].search(/<script/i)) >= 0 ||
                data[i] == null ||
                data[i] == '' ||
                data[i].length == 0 ||
                (data[i].search(/\s/)) == 0 
            ){
               _inp[i].style.backgroundColor = 'red'
                flag++
            }
        }
            
        
    if(
        data[0].length < 4 ||
        data[0].search(/[a-z]/) >= 0 ||
       (data[0].search(/[~!@#$%^&*()_+|/*-]/)) >= 0 
        ){
            _inp[0].style.backgroundColor = 'red'
        }
        if(
        data[1].length < 4 ||
        data[1].search(/[a-z]/) >= 0 ||
        (data[1].search(/[~!@#$%^&*()_+|/*-]/)) >= 0 
        ){
        _inp[1].style.backgroundColor = 'red'
        }
        if(
        data[2].length < 4 ||
        data[2].search(/[a-z]/) >= 0 ||
        (data[2].search(/[~!@#$%^&*()_+|/*-]/)) >= 0 
        ){
        _inp[2].style.backgroundColor = 'red'
        }
        if(
        data[3].length < 4 ||
        data[3].search(/[a-z]/) >= 0 ||
        (data[3].search(/[~!@#$%^&*()_+|/*-]/)) >= 0 
        ){
        _inp[3].style.backgroundColor = 'red'
        }
        if(
        data[4].length < 3 ||
        data[4].search(/[a-z]/) >= 0 ||
        (data[4].search(/[~!@#$%^&*()_+|/*-]/)) >= 0 
        ){
        _inp[4].style.backgroundColor = 'red'
        }
        if(
        data[5].length < 2 ||
        data[5].search(/[a-z]/) >= 0 ||
        (data[5].search(/[~!@#$%^&*()_+|/*-]/))>= 0 
        ){
        _inp[5].style.backgroundColor = 'red'
        }
        if(
        data[6].length < 2 ||
        data[6].search(/[a-z]/) >= 0 ||
        (data[6].search(/[~!@#$%^&*()_+|/*-]/))>= 0 
        ){
        _inp[6].style.backgroundColor = 'red'
        }
        if(
        data[7].length < 8 ||
        data[7].search(/[a-z]/) >= 0 ||
        (data[7].search(/[~!@#$%^&*()_+|/*-]/))>= 0 
        ){
        _inp[7].style.backgroundColor = 'red'
        }
        if(
        data[8].length < 5 || 
        (data[8].search(/[~!@#$%^&*()_+|/*-]/)) >= 0 ||
        (data[8].charAt(0).search(/[0-9]/)) >= 0 || 
        (data[8].charAt(1).search(/[a-z]/)) >= 0 ||
        (data[8].charAt(2).search(/[0-9]/)) >= 0 ||
        (data[8].charAt(3).search(/[a-z]/)) >= 0 ||
        (data[8].charAt(4).search(/[0-9]/)) >= 0
        
        ){
        _inp[8].style.backgroundColor = 'red'
        }
        
}

// timer........
let _mypaycard = document.getElementById('mypaycard')
let _myout = document.getElementById('mytimeout')
document.getElementById('timer').innerHTML =
  001 + ":" + 05;
startTimer();
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m =  timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s == 59){m = m - 1}
  if(m < 0){
    _mypaycard.style.display = 'none'
    _myout.style.display = 'flex'
  }
 
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer , 1000);
} 
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}

function closeIntroduction(){
    document.getElementById('introduction').style.display = 'none'
}