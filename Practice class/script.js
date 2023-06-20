class Storage {
    constructor(key= ['names'],value = ['value']) {
        this.key = value;
        this.value = value;
    }
    set (key,value){
        localStorage.setItem(key,value)
        console.log('key set')
    }
    get (key){

        console.log("your value - " + localStorage.getItem(key))
    }

    clear (key){
        localStorage.removeItem(key)
        console.log(`key ${key} - clear`)
    }
    isEmpty(key){
        return !!(localStorage.getItem(key) === null || undefined);
        // localStorage.getItem(key)?? true
    }
}
const names = new Storage('name','Nastya');

// names.set('123','321')
names.set()
// names.set('lalala','321')
// names.get('123')
// console.log(names.isEmpty('123'))

