import ActionCard from "@/components/home/ActionCard";
import CarList from "@/components/home/CarList";
import HeroSlider from "@/components/home/HeroSlider";
import LogoSlider from "@/components/home/LogoSlider";
import ReviewSection from "@/components/home/Review";
import { getCar, getReviw } from "@/quire/queri";
export default async function Home() {
  const reviewsData = await getReviw();

  const cars = await getCar();

  return (
    <div>
      <HeroSlider />
      <ActionCard />
      <CarList cars={cars} />
      <LogoSlider />
      <ReviewSection reviewsData={reviewsData} />
    </div>
  );
}
