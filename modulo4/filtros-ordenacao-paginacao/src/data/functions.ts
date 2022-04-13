import connection from "./connection";
import { user } from "./types";

export const searchUserByName = async (name: string): Promise<user[]> => {
  const result: user[] = await connection("filtrosOrdenacaoPaginacao")
    .whereILike("name", `%${name}%`)
    .select();

  return result;
};

export const searchUserbyType = async (type: string): Promise<user[]> => {
  const result: user[] = await connection("filtrosOrdenacaoPaginacao")
    .whereILike("type", `%${type}%`)
    .select();

  return result;
};

export const orderedUsers = async (
  sort: string,
  order: string
): Promise<user[]> => {
  const result: user[] = await connection("filtrosOrdenacaoPaginacao").orderBy(
    sort,
    order
  );

  return result;
};

export const selectPages = async (
  size: number,
  offset: number
): Promise<user[]> => {
  const result: user[] = await connection("filtrosOrdenacaoPaginacao")
    .limit(size)
    .offset(offset);

  return result;
};

export const selectAllUsersOrderedAndPaginated = async (
  sort: string,
  order: string,
  size: number,
  offset: number
): Promise<user[]> => {
  const result = await connection("filtrosOrdenacaoPaginacao")
    .orderBy(sort, order)
    .limit(size)
    .offset(offset);

  return result;
};
