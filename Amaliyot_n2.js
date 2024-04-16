class Person {
    constructor(firstname, lastname) {
        this.name = firstname || ''
        this.surname = lastname || '' 
    }

    get fullname() {
        return `${this.name} ${this.surname}`
    }

    set fullname(full) {
        const arr = full.split(' ')
        if (arr.length === 1) {
            this.name = arr[0]
        } else {
            this.name = arr[0]
            this.surname = arr.slice(1).join(' ')
        }
    }
}

const person = new Person()
console.log(person.fullname = 'Otabek Xushvaqtov')
console.log(person.fullname)
