import fetch from "node-fetch";

export function promise() {
    // Пример 1
    let promise: Promise<any> = new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve("готово!"), 1000);
        } else {
           reject(new Error("error"));
        }
    }).then(console.log);

    // Пример 2
    Promise.all([
        fetch('http://numbersapi.com/45'),
        fetch('http://numbersapi.com/45'),
        fetch('http://numbersapi.com/45')
    ]).then(
      result => "ссылки работают!",
      error => "Ошибка: " + error.message
    ).then(console.log);
}

