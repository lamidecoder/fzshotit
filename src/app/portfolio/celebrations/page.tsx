import CategoryGallery from "@/components/CategoryGallery";
export const metadata = { title: "Celebrations · FZSHOTIT" };
export default function CelebrationsPage() {
  return (
    <CategoryGallery
      title="Celebrations"
      intro="Birthdays, graduations, milestone moments. Every reason to gather is a reason to document it properly."
      photos={[
        "/photos/IMG_5102.jpg",
        "/photos/IMG_5987.jpg",
        "/photos/IMG_5991.jpg",
        "/photos/IMG_5992.jpg",
        "/photos/IMG_7453.jpg",
        "/photos/IMG_7455.jpg",
        "/photos/IMG_7456.jpg",
        "/photos/IMG_7457.jpg",
        "/photos/IMG_7461.jpg",
      ]}
    />
  );
}
