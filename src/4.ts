class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random();
    };

    getSignature(): number {
        return this.signature;
    } 
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean;
    public key: Key;
    private tenants: Person[] = [];
    constructor(key: Key) {
        this.key = key;
        this.door = false;
    }
    comeIn(person: Person):void {
        if (this.door) {
             this.tenants.push(person);
        }
       
    }
    abstract openDoor(key: Key): void; 
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
     };
    openDoor(key: Key) {
        if (this.key === key) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};