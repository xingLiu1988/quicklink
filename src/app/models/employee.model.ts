export class Employee {

    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    address: string;


    constructor(firstName: string, lastName: string, email: string, phone: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

}