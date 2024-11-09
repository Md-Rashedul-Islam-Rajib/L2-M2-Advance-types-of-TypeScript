{
    // mapped type

    type AreaNumber = {
        height: number;
        width: number;
}

    type Area = {
        [key in keyof AreaNumber]: string;
    } //here we can convert AreaNumber from number to string by this way


    type AreaString2<T> = {
        [key in keyof T]: T[key];
    }// like this we can assign different property value as different type

    const area1: AreaString2<{height:string,width:number}> = {
        height: "100",
        width: 50
    }
}