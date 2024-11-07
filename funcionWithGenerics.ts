{
    //function with generics

    const createArray = <T>(param: T): T[] => {
        return [param];
    }
    const createTuple = <T, X>(param1: T, param2: x): [T, X] => {
        return [param1, param2];
    }

    const addCourse = <T>(student: T) => {
        const course = 'mathematics';
        return{...student,course}
    }






















}