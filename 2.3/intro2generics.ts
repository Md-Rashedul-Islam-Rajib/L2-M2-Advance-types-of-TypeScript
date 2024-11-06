{

    // generic

    type GeneralArray<T> = Array<T>;

    const stringArray: GeneralArray<string> = ['a', 'b', 'c'];
    const numberArray: GeneralArray<number> = [1, 2, 3, 4];
    const booleanArray: GeneralArray<boolean> = [true, false]; //this concept used in the <T> is called generics which generalize the usage of any type with any kind of data types

    type Person = {
        name: string;
        age: number;
    }
    const objectArray: GeneralArray<Person> = [{
        name: 'mr x',
        age: 222
    }]

    //generic tuple
    type GeneralTuple<T, S> = [T, S];

    const userWithId: GeneralTuple<number, Person> = [123, {
        name: 'mr y',
        age: 55
    }]








}