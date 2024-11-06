{

    //generic with interface
    interface Person<X, T = null> {
        name: string;
        email: X;
        address: T;
    }
    //you can assign any type of value you want
}