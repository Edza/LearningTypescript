//Hello, coders!An important part of programming is being able to apply your programs,
//so your challenge for today is to create a calculator application that has use in your life.
//It might be an interest calculator, or it might be something that you can use in the classroom.
//For example, if you were in physics class, you might want to make a F = M * A calc.
//EXTRA CREDIT: make the calculator have multiple functions!Not only should it be able
// to calculate F = M * A, but also A = F / M, and M = F / A!


interface Calculator {
    add(x: number, y: number): number;
    multiply(x: number, y: number): number;
}

class MyCalculator implements Calculator {
    add(x: number, y: number) {
        return x + y;
    }
    multiply(x: number, y: number) {
        return x * y;
    }
}

window.onload = () => {
    var calc = new MyCalculator();
    alert(calc.add(2, 2));
    alert(calc.multiply(2, 3));
};