import { compareSync, genSaltSync, hash, hashSync } from "bcryptjs";

export class HashManager {
  public static async createHash(pleinText: string) {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = genSaltSync(rounds);

    return hash(pleinText, salt);
  }

  public static async compareHash(pleinText: string, hash: string) {
    return compareSync(pleinText, hash);
  }
}
