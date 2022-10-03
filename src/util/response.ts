import { Response } from 'express';

const response = (
  res: Response,
  code: number,
  status: string,
  message: string,
  data?: {}
) => {
  res.status(code).json({
    code: code,
    status: status,
    message: message,
    data: data,
  });
};

export default response;
