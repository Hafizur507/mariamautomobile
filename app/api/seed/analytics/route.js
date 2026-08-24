import Car from '@/models/Car'; // আপনার Car মডেলের পাথ
import dbConnect from '@/service/mongo'; // আপনার MongoDB কানেকশন ফাইলের পাথ
import { NextResponse } from 'next/server';

import CarModel from '@/models/Car-model';
export async function GET() {
  try {
    // ডাটাবেজ কানেক্ট
    await dbConnect();

    // ১. স্টকে থাকা গাড়ির হিসাব
    const inStockCars = await Car.find({ isSold: false });
    const totalInStock = inStockCars.length;

    const totalStockInvestment = inStockCars.reduce(
      (sum, car) => sum + (Number(car.buyingPrice) || 0),
      0
    );
    const expectedStockRevenue = inStockCars.reduce(
      (sum, car) => sum + (Number(car.price || car.sellingPrice) || 0),
      0
    );

    // ২. বিক্রি হওয়া গাড়ির হিসাব
    const soldCars = await CarModel.find({ isSold: true }).sort({ soldAt: -1 });
    const totalSold = soldCars.length;

    const totalRevenue = soldCars.reduce(
      (sum, car) => sum + (Number(car.sellingPrice || car.price) || 0),
      0
    );
    const totalCostOfSoldCars = soldCars.reduce(
      (sum, car) => sum + (Number(car.buyingPrice) || 0),
      0
    );

    // ৩. নিট প্রফিট
    const netProfit = totalRevenue - totalCostOfSoldCars;

    // ৪. সম্প্রতি বিক্রি হওয়া ৫টি গাড়ি
    const recentSales = soldCars.slice(0, 5).map((car) => ({
      id: car._id.toString(),
      name: car.name,
      buyingPrice: car.buyingPrice,
      sellingPrice: car.sellingPrice || car.price,
      profit: (car.sellingPrice || car.price) - car.buyingPrice,
      soldAt: car.soldAt,
    }));

    return NextResponse.json({
      success: true,
      analytics: {
        stock: {
          totalCars: totalInStock,
          totalInvestment: totalStockInvestment,
          expectedRevenue: expectedStockRevenue,
        },
        sales: {
          totalSoldCars: totalSold,
          totalRevenue: totalRevenue,
          totalCost: totalCostOfSoldCars,
          netProfit: netProfit,
        },
        recentSales,
      },
    });
  } catch (error) {
    console.error('Analytics API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Error loading analytics' },
      { status: 500 }
    );
  }
}
