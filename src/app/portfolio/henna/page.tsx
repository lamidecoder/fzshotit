import CategoryGallery from "@/components/CategoryGallery";
export const metadata = { title: "Henna · FZSHOTIT" };
export default function HennaPage() {
  return (
    <CategoryGallery
      title="Henna"
      intro="Henna nights, in all their colour and noise and warmth: the patterns, the hands, the room full of people who love you."
      photos={[
        "/photos/IMG_7477.jpg",
        "/photos/IMG_7478.jpg",
        "/photos/IMG_7479.jpg",
        "/photos/IMG_7480.jpg",
        "/photos/IMG_7481.jpg",
        "/photos/IMG_0356.jpg",
        "/photos/IMG_0362.jpg",
        "/photos/IMG_2432.jpg",
        "/photos/IMG_2435.jpg",
      ]}
    />
  );
}
