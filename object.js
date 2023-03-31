const phoneBook = {
    list: {
        "John": 123456789, "Jane Doe": 987654321, "Jim Smith": 111111111
    }, log() {
        console.log("Вот список телефонов")
        console.log(this.list) // в этом случае this.list === phoneBook.list
    }, add(name, number) {
        this.list[name] = number
        console.log("Номер - добавлен")
    }, delite(name) {
        delete this.list[name]
        console.log("Номер - удален")
    }
}
phoneBook.add("Natasha", 89223332223)
phoneBook.add('Sergey', 2321334123)
phoneBook.delite("Sergey");
console.log('John' in phoneBook.list);
console.log('Alex' in phoneBook.list);

for (const name in phoneBook.list) {
    console.log(name + ' - ' + phoneBook.list[name]);
}
