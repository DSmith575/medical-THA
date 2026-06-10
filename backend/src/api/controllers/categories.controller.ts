import { prisma } from '../../lib/prisma';
import { Request, Response } from 'express';


export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany({
            include: {
                procedures: true,
            }
        });
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};