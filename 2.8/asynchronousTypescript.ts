{

    //promise
    type Person = {
        name: string,
        age: number;
    }

const makePromise = () => {
    return new Promise<Person>((resolve,reject) => {
        const data = {
            name: "Mr x",
            age: 25
        };
        if (data) {
            resolve(data)
        } else {
            reject('failed to get data')
        }
    })
}

    const getData = async (): Promise<Person> => {
        const data = await makePromise();
        return data;
 }
    getData();


    const getTodo = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = response.json();
        return data;
}









}