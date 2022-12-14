import { Request, Response } from "express";

import HttpException from "../utils/http.exceptions";

const httpErrorMiddleware = (err: Error, req: Request, res: Response) => {
  console.log("error", err);
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
