//import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient();

prisma.$use(async (params: any, next: any) => {
  if (params.model === 'PhoneNumber' && ['create', 'update'].includes(params.action)) {
    const mobile = params.args.data?.mobile;
    if (mobile && !/^\d{10}$/.test(mobile)) {
      throw new Error('Mobile must be exactly 10 digits (numbers only).');
    }
  }

  if (params.model === 'CardId' && ['create', 'update'].includes(params.action)) {
    const cardId = params.args.data?.cardId;
    if (cardId && !/^\d{13}$/.test(cardId)) {
      throw new Error('Card ID must be exactly 13 digits (numbers only).');
    }
  }

  return next(params);
});

export default prisma;
