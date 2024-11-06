{
    //type assertion

    let something: any;
    something = "something";
    (something as number)  // if a developer can have better idea about the types of anything, then he can use as and define the type like this. this is called type assertion



    const converter = (kg: string | number): (string | number | undefined) => {
        if (typeof kg === "string") {
            return parseFloat(kg) * 1000;
        }
        if (typeof kg === "number") {
            return kg * 1000;
        }
    }

    const result1 = converter("769") as number;
    const result2 = converter(769) as number;


    type CutsomError = {
        message: string;
}

    try {
        
    } catch (error) {
        console.log((error as CutsomError).message);
    }
}