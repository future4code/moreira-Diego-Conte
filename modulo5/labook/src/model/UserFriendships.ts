export default class UserFriendships {
  constructor(private follower_id: string, private followed_id: string) {}

  public getFollowerId() {
    return this.follower_id;
  }

  public getFollowedId() {
    return this.followed_id;
  }

  static toUserFriendship(data: any): UserFriendships {
    return new UserFriendships(data.followerId, data.followedId);
  }
}
