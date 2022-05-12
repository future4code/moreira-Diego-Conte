import { CustomError } from "../errors/CustomErrors";

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLE
  ) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public getRole() {
    return this.role;
  }

  public static stringToUserRole(input: string): USER_ROLE {
    switch (input.toUpperCase()) {
      case "NORMAL":
        return USER_ROLE.NORMAL;
      case "ADMIN":
        return USER_ROLE.ADMIN;
      default:
        throw new CustomError(
          422,
          "Invalid role: only 'ADMIN' or 'NORMAL' role is allowed."
        );
    }
  }

  public static toUserModel(user: any): User {
    return new User(
      user.id,
      user.name,
      user.email,
      user.password,
      User.stringToUserRole(user.role)
    );
  }
}

export interface UserInputDTO {
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
