import { argv, exit, stderr, stdout } from 'node:process';

const a = (argv[2]);
const b = (argv[3]);
const c = (argv[4]);

// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);

if (typeof a==="undefined" || typeof b==="undefined" || typeof c==="undefined") {
    stdout.write("Для корректной работы программы необходимо ввести значения для коэффициентов a,b и c квадратного уравнения, без запятых через пробел в соответствующем порядке в следующем виде (например): 2.5 3 4\n");
    exit(1);
}
if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(c))) {
    stderr.write("Ошибка введенных данных. Данные не являются числами\n");
    exit(2);
}
else {
    const result = b*b-4*a*c;
    if (result < 0) {
        stderr.write("В уравнение с введенными коэффициентами нет корней\n");
        exit(3);
    }
    else {
        if (result >= 0) {
            const x1=(-b+Math.sqrt(result))/(2*a);
            const x2=(-b-Math.sqrt(result))/(2*a);
            if (x1===x2) {
                stderr.write(`Квадратное уравнение имеет один корень\n X=${x1}\n`);
                exit(0);
            }
            else {
                stderr.write(`Квадратное уравнение имеет два корня\n X1=${x1}\n X2=${x2}\n`);
                exit(0);
            }
        }
    }
}

