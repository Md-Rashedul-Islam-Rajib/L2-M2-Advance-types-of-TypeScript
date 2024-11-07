{

    //key of with constraints

    type Vehicle = {
        bike: string;
        car: string;
        bus: string;
        truck: string;
    }

    type vehicleOwner = keyof Vehicle; //you can use keyof operator to extract key from a type and make a union type of those keys

    const owner: vehicleOwner = "bike";


    const getPropertyValue = <OBJECT, KEY extends keyof OBJECT>(obj: OBJECT, key: KEY) => {
        return obj[key]
    }
    // you can use keyof operator like this when you have to strictly set a parameter what's must be a key of an object

    const demo = {
        name: 'mr x',
        age: 2323,
        address: "unknown"
}
getPropertyValue(demo,"age")







    
}