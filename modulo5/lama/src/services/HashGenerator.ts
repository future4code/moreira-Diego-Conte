import { compareSync, genSaltSync, hash, hashSync } from "bcryptjs";

export class HashGenerator {
  public static hash(pleinText: string) {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = genSaltSync(rounds);

    return hash(pleinText, salt);
  }

  public static compareHash(pleinText: string, hash: string) {
    return compareSync(pleinText, hash);
  }
}

export default HashGenerator;
