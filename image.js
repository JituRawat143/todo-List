const input1 = document.querySelector('#inp1')
const input2 = document.querySelector('#inp2')
const showtodo1 = document.querySelector('.list1');
const showtodo2 = document.querySelector('.list2');
const handelClick1 =()=>{
    showtodo1.innerHTML += `<li>${input1.value}</li>`

    input1.value='';
}
const handelClick2 =()=>{
    showtodo2.innerHTML += `<li>${input2.value}</li>`

    input2.value='';
}