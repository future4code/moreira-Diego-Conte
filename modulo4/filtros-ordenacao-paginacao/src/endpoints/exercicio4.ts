import { Request, Response } from "express";
import selectAllUsersOrderedAndPaginated from "../data/functions";


export const getAllUsersOrderedAndPaginated = async (
  req: Request,
  res: Response
): Promise<any> => {
  
  try {
    let sort = req.query.sort ? req.query.sort : "name";
    let order = req.query.order ? req.query.order : "DESC".toUpperCase;
    let page = Number(req.query.page);
    
    if (page < 1 || page > 7 || isNaN(page)) {
      page = 1;
    }

    const size = 4;
    const offset = size * (page - 1);

    if (sort !== "name" && sort !== "type") {
      sort = "name";
    }

    if (order !== "ASC" && order !== "DESC") {
      order = "DESC";
    }

    const users = await selectAllUsersOrderedAndPaginated(
      sort,
      order,
      size,
      offset
    );

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found.");
    }

    res.status(200).send(users);
  } catch (error: any) {
    switch (error.message) {
      case "No users found.":
        res.status(200);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};
