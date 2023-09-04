import createAddress from "../services/web3.service";
import { errorResponse, processException, successResponse } from "../utils/common"
import { Request, Response } from "express";


const createWallet = async (req: Request, res: Response) => {
    try {
        const wallet = await createAddress(req.body.coin_type,req.body.network);
        if (wallet.success) {
            return successResponse(res,wallet.message,wallet.data)
        } else {
            return errorResponse(res, wallet.message, wallet.data);
        }
    } catch (err) {
        processException(res, err)
    }
} 

export default {
    createWallet,
}