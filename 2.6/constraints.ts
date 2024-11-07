{

    //constraints

    type Student = {
        name: string;
        id: number;
        age: number;
    }

    const addCourse = <T extends Student>(student: T) => {
      const course = "mathematics"; //you can enforce some rule must be followed to give any data like this with constraint
      return { ...student, course };
    };

    const student = addCourse({name:"MR x",age:255,id:7})




















}