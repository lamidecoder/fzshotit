import CategoryGallery from "@/components/CategoryGallery";
export const metadata = { title: "Henna - FZShotit" };
export default function HennaPage() {
  return (
    <CategoryGallery
      title="Henna"
      intro="Henna nights, in all their colour and noise and warmth: the patterns, the hands, the room full of people who love you."
      photos={[
        "/photos/henna_real1.jpg",
        "/photos/henna_real2.jpg",
        "/photos/services_madame.jpg",
        "/photos/82A0953F-F843-46D1-94C7-C590B2452161_1_105_c.jpg",
        "/photos/F4254BDD-057E-4702-BBFF-398A6583EB48_1_105_c.jpg",
        "/photos/henna_blue.jpg",
      ]}
    />
  );
}
