import CarDetails from "@/components/home/CarDetails";
import CarModel from "@/models/Car-model";

export default async function DetailsCar({ params }) {
  const { id } = await params;
  const cars = await CarModel.findById(id);
  const car = JSON.parse(JSON.stringify(cars));

  return (
    <div className="">
      <CarDetails car={car} />
    </div>
  );
}
