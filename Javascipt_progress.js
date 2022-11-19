const prompt = require("prompt-sync")({ sigint: true });
const x = {
    a: function fib() {
        n = parseInt(prompt("Enter the number of fib terms : "))
        let a = 0
        let b = 1
        for (let i = 0; i < n; i++) {
            // console.log(a)
            process.stdout.write(a.toString() + " ")
            c = a + b
            a = b
            b = c
        }
        console.log()
    },
    b: function tri() {
        n = parseInt(prompt("Enter the number of rows : "))
        console.log("For triangle :\n1. Same Character throughout\n2. Increment by one\n3. Decrement by one")
        let ch = parseInt(prompt())
        if (ch == 2 || ch == 3) {
            console.log("1. Every next element\n2. Every next row")
            ch_ = prompt()
        }
        let t = prompt("Enter a character : ")
        console.log("Your triangle has been generated!")
        switch (ch) {
            case 1:
                for (let i = 1; i <= n; i++) {
                    for (let j = 0; j < i; j++) {
                        process.stdout.write(t + " ")
                    }
                    console.log();
                }
                break;
            case 2:
                if (ch_ == 1) {
                    for (let i = 1; i <= n; i++) {
                        for (let j = 0; j < i; j++) {
                            process.stdout.write(t + " ")
                            t = String.fromCharCode(t.charCodeAt(0) + 1)
                        }
                        console.log()
                    }
                } else {
                    for (let i = 1; i <= n; i++) {
                        for (let j = 0; j < i; j++) {
                            process.stdout.write(t + " ")
                        }
                        t = String.fromCharCode(t.charCodeAt(0) + 1)
                        console.log()
                    }
                }
                break;
            case 3:
                if (ch_ == 1) {
                    for (let i = 1; i <= n; i++) {
                        for (let j = 0; j < i; j++) {
                            process.stdout.write(t + " ")
                            t = String.fromCharCode(t.charCodeAt(0) - 1)
                        }
                        console.log()
                    }
                } else {
                    for (let i = 1; i <= n; i++) {
                        for (let j = 0; j < i; j++) {
                            process.stdout.write(t + " ")
                        }
                        t = String.fromCharCode(t.charCodeAt(0) - 1)
                        console.log()
                    }
                    break;
                }
        }
    }
}
console.log("Welcome to the menu!")
do {
    console.log("The available features are :-\n1. Fibonacci Sequence\n2. Triangle generator")
    ch = parseInt(prompt("Enter your choice : "))
    switch (ch) {
        case 1:
            x.a()
            break
        case 2:
            x.b()
            break
    }
    cont = prompt("Do you want to continue? (Enter y to continue) : ")
} while (cont == 'y')
console.log("Thank You for using this menu!")