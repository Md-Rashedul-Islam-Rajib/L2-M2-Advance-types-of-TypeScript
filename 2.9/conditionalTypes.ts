{
    // conditional types
    type a = null;
    type b = undefined;

    type x = a extends null ? true : false; // conditional type
    type y = b extends undefined ? false : a extends null ? true : false;
    

    type Person = {
        name: string;
        age: number;

    }
    type CheckPerson<T> = T extends keyof Person ? true : false;

    type hasName = CheckPerson<"age">
}