import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDashboard = async (req: Request, res: Response) => {

    try {
        const products = await prisma.products.findMany({
            orderBy: {
               stock: 'asc'

            }
        });

        const sales = await prisma.sales.findMany({});
        const expenses = await prisma.expenses.findMany({});
        
        const saleSummary = await prisma.salesSummary.findMany({
            orderBy: {
                totalSales: 'desc'
            }
        });

        const expenseSummary = await prisma.expensesSummary.findMany({});
        const totalSales = await prisma.salesSummary.aggregate({});

        res.json({products, sales, expenses, saleSummary, expenseSummary, totalSales});
        
    } catch (error) {
        res.status(500).json({message: 'Error getting dashboard data'});
    }
  
};