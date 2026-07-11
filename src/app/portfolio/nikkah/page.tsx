import CategoryGallery from "@/components/CategoryGallery";
export const metadata = { title: "Nikkah - FZShotit" };
export default function NikkahPage() {
  return (
    <CategoryGallery
      title="Nikkah"
      intro="Intimate, sacred and joyful, Nikkah ceremonies captured with the quiet attention they deserve."
      photos={[
        "/photos/IMG_2432.jpg",
        "/photos/74018F8D-DBB0-4184-BC50-8CB8D58EC5BE_1_105_c.jpg",
        "/photos/FB148D1B-1B3A-4442-83C1-DB1CB0BF9741_1_105_c.jpg",
        "/photos/IMG_0356.jpg",
        "/photos/IMG_2435.jpg",
        "/photos/IMG_2437.jpg",
        "/photos/IMG_7324.jpg",
        "/photos/IMG_7481.jpg",
      ]}
    />
  );
}
