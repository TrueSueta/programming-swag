{
    let count = 0, d, x;
    x = parseInt(prompt("Введите натуральное число"));
    while(x != 0){
        d = x % 10;
        if(d % 2 != 0) {
            count++;
        }
        x = Math.floor(x / 10);
    }
    alert("колличество нечетных цифр " + count);
}