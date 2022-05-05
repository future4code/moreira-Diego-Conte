import IUserData from "../model/InterfaceUserData";
import User from "../model/User";
import UserFriendships from "../model/UserFriendships";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import authenticationData from "../types/authenticationData";
import LoginInputDTO from "../types/loginInputTDO";
import SignupInputDTO from "../types/signupInputTDO";
import transferIdInputTDO from "../types/transferIdAndTokenTDO";

export default class UserBusiness {
  private userData: IUserData;

  constructor(userData: IUserData) {
    this.userData = userData;
  }

  signup = async (input: SignupInputDTO) => {
    const { name, email, password } = input;

    if (!email || email.indexOf("@") === -1) {
      throw new Error("Please, check your e-mail address.");
    }

    if (!password || password.length < 6) {
      throw new Error(
        "Invalid password. At least six characters are required."
      );
    }

    if (!name) {
      throw new Error("Please, enter user name.");
    }

    const userData: User = await this.userData.findUserByEmail(email);
    if (userData) {
      throw new Error("Email already registered.");
    }

    const id: string = IdGenerator.generate();
    const hashedPassword = await HashManager.createHash(password);

    const user: User = new User(id, name, email, hashedPassword);
    await this.userData.insert(user);
    const token: string = Authenticator.generate({ id });

    return token;
  };

  login = async (input: LoginInputDTO) => {
    const { email, password } = input;

    if (!email || email.indexOf("@") === -1) {
      throw new Error("Please, check your e-mail address.");
    }

    if (!password || password.length < 6) {
      throw new Error(
        "Invalid password. At least six characters are required."
      );
    }

    const userData: User = await this.userData.findUserByEmail(email);
    if (!userData) {
      throw new Error("Email not registered.");
    }

    const token: string = Authenticator.generate({ id: userData.getId() });

    return { name: userData.getName(), token: token };
  };

  createRelationship = async (input: transferIdInputTDO): Promise<string> => {
    const { id, token } = input;

    if (!token) {
      throw new Error("Please enter a token.");
    }

    const tokenData: authenticationData = Authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Please enter a valid token.");
    }

    const followedUserData: User = await this.userData.findUserById(id);
    if (!followedUserData) {
      throw new Error("Friend id not found.");
    }

    const userRelationship: UserFriendships = new UserFriendships(
      tokenData.id,
      followedUserData.getId()
    );

    const friendshipData: UserFriendships = await this.userData.getFriendship(
      userRelationship
    );
    if (friendshipData) {
      throw new Error(
        `${followedUserData.getName()} and you are already friends.`
      );
    }

    await this.userData.createFriendship(userRelationship);

    return `Great! ${followedUserData.getName()} and you are friends now.`;
  };

  deleteFriendship = async (input: transferIdInputTDO): Promise<string> => {
    const { id, token } = input;

    if (!token) {
      throw new Error("Please enter a token.");
    }

    const tokenData: authenticationData = Authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Please enter a valid token.");
    }

    const followedUserData: User = await this.userData.findUserById(id);
    if (!followedUserData) {
      throw new Error("Friend id not found.");
    }

    const userRelationship: UserFriendships = new UserFriendships(
      tokenData.id,
      followedUserData.getId()
    );

    const friendshipData: UserFriendships = await this.userData.getFriendship(
      userRelationship
    );
    if (!friendshipData) {
      throw new Error(`${followedUserData.getName()} and you are not friends.`);
    }

    await this.userData.deleteFriendship(userRelationship);

    return `${followedUserData.getName()} and you are not friends anymore.`;
  };
}
