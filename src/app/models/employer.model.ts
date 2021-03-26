export class Employer {

    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    address: string;


    constructor(companyName: string, firstName: string, lastName: string, email: string, phone: number, address: string) {
        this.companyName = companyName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

}