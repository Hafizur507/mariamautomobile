import CarModel from '@/models/Car-model';
import dbConnect from '@/service/mongo'; // আপনার MongoDB কানেকশন ফাইলের পাথ
import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     await dbConnect();

//     const currentYear = new Date().getFullYear(); // ২০২৬
//     const monthNames = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];

//     // ১. চলতি বছরের (২০২৬) বিক্রি হওয়া গাড়ির হিসাব
//     const monthlyData = await CarModel.aggregate([
//       {
//         $match: {
//           isSold: true,
//           soldAt: {
//             $gte: new Date(`${currentYear}-01-01`),
//             $lte: new Date(`${currentYear}-12-31T23:59:59.999Z`),
//           },
//         },
//       },
//       {
//         $group: {
//           _id: { $month: '$soldAt' },
//           carsSold: { $sum: 1 },
//           totalRevenue: { $sum: { $ifNull: ['$sellingPrice', '$price'] } },
//           totalCost: { $sum: { $ifNull: ['$buyingPrice', 0] } },
//         },
//       },
//     ]);

//     // ডাটাগুলোকে Map-এ রাখা যাতে সহজে অ্যাক্সেস করা যায়
//     const salesMap = {};
//     monthlyData.forEach((item) => {
//       salesMap[item._id] = {
//         carsSold: item.carsSold,
//         profit: (item.totalRevenue || 0) - (item.totalCost || 0),
//       };
//     });

//     // ২. জানুয়ারি থেকে ডিসেম্বর পর্যন্ত পুরো ১২ মাসের ফিক্সড স্ট্রাকচার তৈরি
//     const fullYearAnalytics = monthNames.map((name, index) => {
//       const monthNum = index + 1;
//       return {
//         month: `${name} ${currentYear}`,
//         carsSold: salesMap[monthNum]?.carsSold || 0,
//         profit: salesMap[monthNum]?.profit || 0,
//       };
//     });

//     return NextResponse.json({
//       success: true,
//       year: currentYear,
//       data: fullYearAnalytics,
//     });
//   } catch (error) {
//     console.error('Monthly Analytics Error:', error);
//     return NextResponse.json({ success: false, message: 'Error loading stats' }, { status: 500 });
//   }
// }
export async function GET(request) {
  try {
    await dbConnect();

    // ইউআরএল থেকে বছর বের করা (ডিফল্ট: ২০২৬)
    const { searchParams } = new URL(request.url);
    const selectedYear = parseInt(searchParams.get('year')) || new Date().getFullYear();

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    // সিলেক্ট করা বছরের বিক্রি হওয়া গাড়ির হিসাব
    const monthlyData = await CarModel.aggregate([
      {
        $match: {
          isSold: true,
          soldAt: {
            $gte: new Date(`${selectedYear}-01-01T00:00:00.000Z`),
            $lte: new Date(`${selectedYear}-12-31T23:59:59.999Z`),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$soldAt' },
          carsSold: { $sum: 1 },
          totalRevenue: { $sum: { $ifNull: ['$sellingPrice', '$price'] } },
          totalCost: { $sum: { $ifNull: ['$buyingPrice', 0] } },
        },
      },
    ]);

    const salesMap = {};
    monthlyData.forEach((item) => {
      salesMap[item._id] = {
        carsSold: item.carsSold,
        profit: (item.totalRevenue || 0) - (item.totalCost || 0),
      };
    });

    const fullYearAnalytics = monthNames.map((name, index) => {
      const monthNum = index + 1;
      return {
        month: `${name} ${selectedYear}`,
        carsSold: salesMap[monthNum]?.carsSold || 0,
        profit: salesMap[monthNum]?.profit || 0,
      };
    });

    return NextResponse.json({
      success: true,
      year: selectedYear,
      data: fullYearAnalytics,
    });
  } catch (error) {
    console.error('Monthly Analytics Error:', error);
    return NextResponse.json({ success: false, message: 'Error loading stats' }, { status: 500 });
  }
}
