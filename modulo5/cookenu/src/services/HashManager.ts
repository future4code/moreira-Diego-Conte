import { compareSync, genSaltSync, hash, hashSync } from "bcryptjs";

export class HashManager {
  public async createHash(pleinText: string): Promise<string> {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = await genSaltSync(rounds);

    return hash(pleinText, salt);
  }

  public async compareHash(pleinText: string, hash: string): Promise<boolean> {
    return compareSync(pleinText, hash);
  }
}
