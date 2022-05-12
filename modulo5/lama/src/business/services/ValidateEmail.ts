class ValidateEmail {
  public static emailChecker = (email: string) => {
    const mailformat: RegExp =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };
}

export default ValidateEmail;
