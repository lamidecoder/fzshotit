import CategoryGallery from "@/components/CategoryGallery";
export const metadata = { title: "Nikkah · FZSHOTIT" };
export default function NikkahPage() {
  return (
    <CategoryGallery
      title="Nikkah"
      intro="Intimate, sacred and joyful, Nikkah ceremonies captured with the quiet attention they deserve."
      photos={[
        "/photos/IMG_7167.jpg",
        "/photos/IMG_7257.jpg",
        "/photos/IMG_7324.jpg",
        "/photos/IMG_7446.jpg",
        "/photos/IMG_7447.jpg",
        "/photos/IMG_7448.jpg",
        "/photos/IMG_7449.jpg",
        "/photos/IMG_7450.jpg",
        "/photos/IMG_7452.jpg",
      ]}
    />
  );
}
