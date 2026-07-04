import CategoryGallery from "@/components/CategoryGallery";
export const metadata = { title: "Weddings · FZSHOTIT" };
export default function WeddingsPage() {
  return (
    <CategoryGallery
      title="Weddings"
      intro="From the quiet moments before the ceremony to the last dance of the night, full wedding days documented with honesty and care, across every culture and tradition."
      photos={[
        "/photos/DSC08845.jpg",
        "/photos/DSC08899.jpg",
        "/photos/DSC08906.jpg",
        "/photos/DSC04584.jpg",
        "/photos/DSC04592.jpg",
        "/photos/DSC04847.jpg",
        "/photos/DSC05674.jpg",
        "/photos/DSC05686.jpg",
        "/photos/DSC05701.jpg",
        "/photos/_DSC0282.jpg",
        "/photos/_DSC0675.jpg",
        "/photos/_DSC1222.jpg",
      ]}
    />
  );
}
