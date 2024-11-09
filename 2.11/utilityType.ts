{
    // utility type

    type Person = {
        name: string;
        age: number;
        email?: string;
    }
    
    // pick type
    type NameAge = Pick<Person, "age" | "name">;

    // omit type
    type ContactInfo = Omit<Person, "name" | "age">;

    // required type
    type PersonRequired = Required<Person>;

    // Partial type
    type PersonPartial = Partial<Person>;

    // readonly type
    const person: ReadOnlyPerson = {
        name: "mr x",
        age: 20,
        email: 'x@y.com'
    }
    type ReadOnlyPerson = Readonly<Person>;

    // record type
    type Myobj = Record<string, unknown>;

    


}