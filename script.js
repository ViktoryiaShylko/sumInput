function sumInput(){
    let numbers = [];
    while(true){
        let elem = prompt("Enter the number",'');
        if(elem === ''|| isNaN(elem) || elem === null) break; /*null- нажатие отмены; isNaN - проверка на число; '' - проверка на пустую строку*/
        numbers.push(+elem);
    }
    numbers.sort((a,b)=>a-b);
    console.log(numbers);
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    return sum;
}
console.log(`Сумма введенных значений: ${sumInput()}`);