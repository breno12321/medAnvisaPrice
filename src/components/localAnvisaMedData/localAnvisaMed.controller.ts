import { Request, Response } from "express";
import { findFiltered } from "./localAnvisaMed.service";
import debug from 'debug';

export const findMedController = async (Req: Request, Res: Response): Promise<Response> => {
  try {
       
    const { filter, value } = Req.query;
    const med = await findFiltered(filter as string, value as string);
    debug('API: Findmed:')("query: %O", Req.query);
    Res.set('Cache-control', `public, max-age=${60*60}`);
    return Res.send({ status: 'ok', rows: med.length, data: med });
  } catch (error) {
    console.error(error);
    return Res.status(500).json({message: error})
  }
}
