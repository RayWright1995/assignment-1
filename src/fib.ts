// util function that computes the fibonacci numbers
export default function fibonacci(n) {
    if (n < 0) {
        var x = -1;
        return x;
    }
    else if (n == 0) {
        var y = 0;
        return 0;
    }
    else if (n == 1) {
        var z = 1;
        return 1;

    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

