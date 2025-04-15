/* Task 1 */
{
    let x, y, ym, min
    x = parseInt(prompt("введите расстояние в километрах"));
    y = parseInt(prompt("введите расстояние в футах"));
    ym = y/3280,84
    if (x>ym) {
        min = y
    } else {
        min = x
    }
    if (min = y) {
        alert(y + " футов меньше")
    } else {
        alert(x + " километров меньше")
    }
}

/* Task 2 */
{
    let x, x1, x2;
    x = parseInt(prompt("Введите двузначное число"));
    x2 = x % 10;
    x1 = Math.floor(x/10)%10;
    alert("A");
    if (x1==4||x2==4||x1==7||x2==7) {
        alert("В число " + x + " входит число 4 или 7");
    } else {
        alert("В число " + x + " не входят числа 4 или 7");
    }
    alert("Б")
    if (x1==3||x2==3||x1==6||x2==6||x1==9||x2==9) {
        alert("В число " + x + " входит число 3, 6 или 9");
    } else {
        alert("В число " + x + " не входят числа 3, 6 или 9");
    }
}

/* Task 3 */
{
    let a, b, c;
    alert("a")
    a = 0
    for (let i = 1; i <= 1000; i++){
        a += i
    }
    alert("Среднее арифметическое от 1000 = " + a/1000)

    alert("б")
    a = 100
    b = parseInt(prompt("Введите число b"))
    for (let i = 1; i <= b; i++){
        a += i
    }
    alert("Среднее арифметическое от 100 до b = " + a/(b-a))

    alert("в")
    a = parseInt(prompt("Введите число a"))
    b = 200
    for (let i = 1; i <= b; i++){
        a += i
    }
    alert("Среднее арифметическое от a до 200 = " + a/(b-a))

    alert("г")
    a = parseInt(prompt("Введите число a"))
    b = parseInt(prompt("Введите число b"))
    for (let i = 1; i <= b; i++){
        a += i
    }
    alert("Среднее арифметическое от a до 200 = " + a/(b-a))
}

{
    let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, sa
    a1 = parseInt(prompt("Введите число 1"))
    a2 = parseInt(prompt("Введите число 2"))
    a3 = parseInt(prompt("Введите число 3"))
    a4 = parseInt(prompt("Введите число 4"))
    a5 = parseInt(prompt("Введите число 5"))
    a6 = parseInt(prompt("Введите число 6"))
    a7 = parseInt(prompt("Введите число 7"))
    a8 = parseInt(prompt("Введите число 8"))
    a9 = parseInt(prompt("Введите число 9"))
    a10 = parseInt(prompt("Введите число 10"))
    sa = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10)/10
    alert("Среднее арифметическое равно " + sa)
}