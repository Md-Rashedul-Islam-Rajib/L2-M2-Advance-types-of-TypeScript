{
  //interface

  // interface Person {
  //     name: string;
  //     age: number;
  // }

  // type vs interface

  // type can be used both for premitive and non-premitive data but interface can only be used for non-primitive data type

  //type conversion to interface

  type People = {
    sleep: boolean;
  };
  interface Person extends People {
    //this is how we can convert a type to a interface
    name: string;
    age: number;
    }
    
    //interface can also extends with another interface but type can't. type uses intersection for it


    //interface with array

    interface Student{
        [index: number]: string;
    }

    const student: Student = ['amin',"sakib","sakil"]

    //interface with function

    interface Add {
        (num1: number, num2: number): number;
    }

    const add: Add = (num1, num2) => {
        return num1 + num2;
    }












}
