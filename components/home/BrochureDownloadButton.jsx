// 'use client';
// import { useState } from 'react';
// import { FaDownload, FaSpinner } from 'react-icons/fa6';

// const BrochureDownloadButton = ({ car }) => {
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     setLoading(true);

//     // html2pdf.js ডাইনামিকালি ইম্পোর্ট করা (Next.js SSR হ্যান্ডেল করার জন্য)
//     const html2pdf = (await import('html2pdf.js')).default;

//     // PDF টেমপ্লেট ডিজাইন
//     const element = document.createElement('div');
//     element.innerHTML = `
//       <div style="padding: 40px; font-family: sans-serif; background-color: #0a0a0b; color: #ffffff; width: 100%; box-sizing: border-box;">

//         <!-- হেডার সেকশন -->
//         <div style="border-bottom: 2px solid #dc2626; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center;">
//           <div>
//             <h1 style="color: #dc2626; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">MARIAM AUTO</h1>
//             <p style="color: #a1a1aa; font-size: 10px; margin-top: 4px; letter-spacing: 1px; text-transform: uppercase;">Premium Luxury Automobiles</p>
//           </div>
//           <div style="text-align: right;">
//             <p style="color: #ffffff; font-size: 12px; margin: 0; font-weight: bold;">OFFICIAL SPEC SHEET</p>
//             <p style="color: #71717a; font-size: 10px; margin-top: 2px;">Date: ${new Date().toLocaleDateString()}</p>
//           </div>
//         </div>

//         <!-- গাড়ির শিরোনাম ও বিবরণ -->
//         <div style="margin-bottom: 30px;">
//           <h2 style="font-size: 24px; font-weight: 900; margin: 0 0 10px 0; text-transform: uppercase;">${car.name}</h2>
//           <p style="color: #a1a1aa; font-size: 12px; line-height: 1.6; font-style: italic;">${car.description || 'No description available.'}</p>
//         </div>

//         <!-- প্রাইস ব্যানার -->
//         <div style="background: linear-gradient(135deg, #18181b 0%, #27272a 100%); padding: 20px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #dc2626;">
//           <span style="color: #a1a1aa; font-size: 10px; text-transform: uppercase; font-weight: bold; display: block;">Asking Price</span>
//           <span style="font-size: 26px; font-weight: 900; color: #ffffff;">৳ ${car.price?.toLocaleString()}</span>
//         </div>

//         <!-- স্পেকস গ্রিড টেবিল -->
//         <h3 style="color: #dc2626; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #27272a; padding-bottom: 8px; margin-bottom: 15px;">Key Specifications</h3>
//         <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 12px;">
//           <tr style="border-bottom: 1px solid #18181b;">
//             <td style="padding: 10px 0; color: #71717a; font-weight: bold;">Model Year:</td>
//             <td style="padding: 10px 0; color: #ffffff; text-align: right; font-weight: bold;">${car.modelYear || 'N/A'}</td>
//           </tr>
//           <tr style="border-bottom: 1px solid #18181b;">
//             <td style="padding: 10px 0; color: #71717a; font-weight: bold;">Color:</td>
//             <td style="padding: 10px 0; color: #ffffff; text-align: right; font-weight: bold;">${car.color || 'N/A'}</td>
//           </tr>
//           <tr style="border-bottom: 1px solid #18181b;">
//             <td style="padding: 10px 0; color: #71717a; font-weight: bold;">Auction Grade:</td>
//             <td style="padding: 10px 0; color: #ffffff; text-align: right; font-weight: bold;">${car.auGrade || car.au_grade || 'N/A'}</td>
//           </tr>
//           <tr style="border-bottom: 1px solid #18181b;">
//             <td style="padding: 10px 0; color: #71717a; font-weight: bold;">Mileage:</td>
//             <td style="padding: 10px 0; color: #ffffff; text-align: right; font-weight: bold;">${car.mileage || 'N/A'}</td>
//           </tr>
//           <tr style="border-bottom: 1px solid #18181b;">
//             <td style="padding: 10px 0; color: #71717a; font-weight: bold;">Engine CC:</td>
//             <td style="padding: 10px 0; color: #ffffff; text-align: right; font-weight: bold;">${car.cc || 'N/A'}</td>
//           </tr>
//           <tr style="border-bottom: 1px solid #18181b;">
//             <td style="padding: 10px 0; color: #71717a; font-weight: bold;">Chassis No:</td>
//             <td style="padding: 10px 0; color: #ffffff; text-align: right; font-weight: bold;">${car.chassisNo || 'N/A'}</td>
//           </tr>
//         </table>

//         <!-- ফুটার সেকশন -->
//         <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #27272a; text-align: center;">
//           <p style="color: #a1a1aa; font-size: 11px; margin: 0; font-weight: bold;">Contact Mariam Auto for Inquiries</p>
//           <p style="color: #71717a; font-size: 10px; margin-top: 4px;">Phone: +880 17XXXXXX | Location: Dhaka, Bangladesh</p>
//         </div>

//       </div>
//     `;

//     const options = {
//       margin: 0,
//       filename: `${car.name.replace(/\s+/g, '_')}_Brochure.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//     };

//     try {
//       await html2pdf().set(options).from(element).save();
//     } catch (err) {
//       console.error('PDF generation failed:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       disabled={loading}
//       className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/10 text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all disabled:opacity-50"
//     >
//       {loading ? (
//         <>
//           <FaSpinner className="animate-spin text-red-600 text-base" />
//           <span>Generating PDF...</span>
//         </>
//       ) : (
//         <>
//           <FaDownload className="text-red-600 text-base" />
//           <span>Download PDF Brochure</span>
//         </>
//       )}
//     </button>
//   );
// };

// export default BrochureDownloadButton;
'use client';
import { useState } from 'react';
import { FaDownload, FaSpinner } from 'react-icons/fa6';

const BrochureDownloadButton = ({ car }) => {
  const [loading, setLoading] = useState(false);
  //   console.log(car);

  const handleDownload = async () => {
    setLoading(true);

    const html2pdf = (await import('html2pdf.js')).default;

    // টেমপ্লেট কন্টেইনার
    const element = document.createElement('div');

    // পুরো PDF ব্যাকগ্রাউন্ড ও কন্টেন্ট লেআউট
    element.innerHTML = `
      <div style="
        width: 794px;
        min-height: 1123px;
        padding: 40px;
        background-color: #0a0a0b;
        color: #ffffff;
        font-family: Arial, sans-serif;
        box-sizing: border-box;
      ">

        <!-- হেডার -->
        <div style="border-bottom: 2px solid #dc2626; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h1 style="color: #dc2626; margin: 0; font-size: 32px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">MARIAM AUTO</h1>
            <p style="color: #a1a1aa; font-size: 11px; margin: 4px 0 0 0; letter-spacing: 1.5px; text-transform: uppercase;">Exclusively Available Luxury Vehicles</p>
          </div>
          <div style="text-align: right;">
            <p style="color: #ffffff; font-size: 13px; margin: 0; font-weight: bold; letter-spacing: 1px;">OFFICIAL VEHICLE SPECIFICATION</p>
            <p style="color: #71717a; font-size: 11px; margin: 4px 0 0 0;">Date: ${new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <!-- গাড়ির নাম ও বিবরণ -->
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 28px; font-weight: 900; margin: 0 0 10px 0; text-transform: uppercase; color: #ffffff;">${car.name || 'N/A'}</h2>
          <p style="color: #a1a1aa; font-size: 13px; line-height: 1.6; font-style: italic; border-left: 3px solid #dc2626; padding-left: 12px; margin: 0;">
            ${car.description || 'No description provided for this vehicle.'}
          </p>
        </div>

        <!-- প্রাইস সেকশন -->
        <div style="background-color: #111111; padding: 20px; border-radius: 16px; margin-bottom: 30px; border: 1px solid #27272a; border-left: 5px solid #dc2626;">
          <span style="color: #71717a; font-size: 10px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; display: block;">Asking Price</span>
          <span style="font-size: 30px; font-weight: 900; color: #ffffff;">৳ ${car.price ? car.price.toLocaleString() : 'N/A'}</span>
        </div>

        <!-- মূল বিবরণ ও ফিচার টেবিল (সকল ডিটেইলস) -->
        <h3 style="color: #dc2626; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #27272a; padding-bottom: 8px; margin-bottom: 15px;">
          Comprehensive Specifications
        </h3>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 13px;">
          <tr style="border-bottom: 1px solid #1f1f23; background-color: #111113;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold; width: 40%;">Model Year</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.modelYear || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Color</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.color || 'N/A'}</td>
          </tr> <tr style="border-bottom: 1px solid #1f1f23;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Color</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.package || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23; background-color: #111113;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Auction Grade</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.auGrade || car.au_grade || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Mileage</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.mileage || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23; background-color: #111113;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Chassis Number</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.chassisNo || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Model Code</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.modelCode || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23; background-color: #111113;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Engine Capacity (CC)</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${
              car.cc || 'N/A'
            }</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Transmission</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.transmission || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1f1f23; background-color: #111113;">
            <td style="padding: 12px 15px; color: #a1a1aa; font-weight: bold;">Smart System</td>
            <td style="padding: 12px 15px; color: #ffffff; text-align: right; font-weight: bold;">${car.s_system || 'N/A'}</td>
          </tr>
        </table>

        <!-- ফুটার সেকশন -->
        <div style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #27272a; text-align: center;">
          <p style="color: #ffffff; font-size: 12px; margin: 0; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">MARIAM AUTOMOBILE</p>
          <p style="color: #71717a; font-size: 11px; margin-top: 6px;">For queries and booking, contact us via WhatsApp or Phone call.</p>
        </div>

      </div>
    `;

    // কনফিগারেশন: ব্যাকগ্রাউন্ড কালার সাদা হওয়া আটকানো এবং হাই-কোয়ালিটি জেনারেট করা
    const options = {
      margin: 0,
      filename: `${(car.name || 'Car').replace(/\s+/g, '_')}_Details.pdf`,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0a0a0b',
        scrollX: 0,
        scrollY: 0,
      },
      jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' },
    };

    try {
      await html2pdf().set(options).from(element).save();
    } catch (err) {
      console.error('PDF Export Failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/10 text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all disabled:opacity-50"
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin text-red-600 text-base" />
          <span>Generating PDF...</span>
        </>
      ) : (
        <>
          <FaDownload className="text-red-600 text-base" />
          <span>Download Full Specs PDF</span>
        </>
      )}
    </button>
  );
};

export default BrochureDownloadButton;
