import { Request, Response } from 'express';
import { userService } from './user.service';
import catchAsync from '../../../utilites/catchAsync';
import sendResponse from '../../../utilites/sendResponse';
import httpStatus from 'http-status';
const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await userService.createUserInToBD(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const userController = {
  createUser,
};
