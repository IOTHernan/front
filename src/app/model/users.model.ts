export class Users {
  public uid: string;
  public email?: string;
  public firstName?: string;
  public lastName?: string;
  public displayName?: string;
  public phone?: string;
  public address?: string;
  public photoURL?: string;

  constructor( uid: string, email: string, firstName: string,
    lastName: string, displayName: string,
    phone: string, address: string, photoURL: string) {
      this.uid = uid;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.displayName = displayName;
      this.phone = phone;
      this.address = address;
      this.photoURL = photoURL;
    }
}
