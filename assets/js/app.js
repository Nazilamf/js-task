 

 function Sum() {
    var a = parseFloat(document.getElementById('input_A').value)
    var b = parseFloat(document.getElementById('input_B').value)
    var sum = a+b
    alert(sum)

   document.getElementById("answer").innerHTML=sum
 }

 
 
 function Dif() {
    var a = parseFloat(document.getElementById('input_A').value)
    var b = parseFloat(document.getElementById('input_B').value)
    var dif = a-b
    alert(dif)
     document.getElementById("answer").innerHTML=dif
 }



 
 function Multip() {
    var a = parseFloat(document.getElementById('input_A').value)
    var b = parseFloat(document.getElementById('input_B').value)
    var multip = a*b
    alert(multip)

    document.getElementById("answer").innerHTML=multip
 }

 
 
 function Div() {
    var a = parseFloat(document.getElementById('input_A').value)
    var b = parseFloat(document.getElementById('input_B').value)
    var div = a/b
    alert(div)

    document.getElementById("answer").innerHTML=div
 }

 