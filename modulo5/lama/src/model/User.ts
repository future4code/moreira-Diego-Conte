export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLE
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getRole() {
    return this.role;
  }

  static stringToUserRole(input: string): USER_ROLE {
    switch (input) {
      case "NORMAL":
        return USER_ROLE.NORMAL;
      case "ADMIN":
        return USER_ROLE.ADMIN;
      default:
        throw new Error("Invalid user role");
    }
  }

  static toUserModel(user: any): User {
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
