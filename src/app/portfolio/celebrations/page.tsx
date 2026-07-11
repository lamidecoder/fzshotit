import CategoryGallery from "@/components/CategoryGallery";
export const metadata = { title: "Celebrations - FZShotit" };
export default function CelebrationsPage() {
  return (
    <CategoryGallery
      title="Celebrations"
      intro="Birthdays, graduations, milestone moments. Every reason to gather is a reason to document it properly."
      photos={[
        "/photos/DSC08845.jpg",
        "/photos/4D262FC8-F699-450F-AD87-AC2CB248B3E8_1_105_c.jpg",
        "/photos/DSC04592.jpg",
        "/photos/_DSC0675.jpg",
        "/photos/DSC04584.jpg",
        "/photos/IMG_5102.jpg",
        "/photos/IMG_7446.jpg",
        "/photos/IMG_7447.jpg",
        "/photos/IMG_7448.jpg",
        "/photos/IMG_7449.jpg",
        "/photos/IMG_7450.jpg",
        "/photos/IMG_7452.jpg",
        "/photos/IMG_7456.jpg",
        "/photos/IMG_7457.jpg",
      ]}
    />
  );
}
