import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class HashManager {
  createHash = (pleinText: string): string => {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = genSaltSync(rounds);
    const cypherText: string = hashSync(pleinText, salt);

    return cypherText;
  };

  compareHash = (pleinText: string, hash: string): boolean => {
    return compareSync(pleinText, hash);
  };
}
