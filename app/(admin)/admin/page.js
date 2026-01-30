import AdminPanel from "@/components/admin/Adminpanel";
import BrandModel from "@/models/Brand-model";
import categoryModel from "@/models/category-model";
import { getReviw, getSoldOut } from "@/quire/queri";
export default async function Admin() {
  const category = await categoryModel.find({});
  const categorys = JSON.parse(JSON.stringify(category));
  const brand = await BrandModel.find({});
  const brands = JSON.parse(JSON.stringify(brand));
  const cars = await getSoldOut();
  const review = await getReviw();
  const reviews = JSON.parse(JSON.stringify(review));

  return (
    <div>
      <AdminPanel
        cars={cars}
        categorys={categorys}
        brands={brands}
        reviews={review}
      />
    </div>
  );
}
