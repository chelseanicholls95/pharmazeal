import image from "@/assets/images/pharmacy.jpg";

import Image from "next/image";

const BackgroundImage = () => {
  return (
    <Image
      src={image}
      alt="pharmacy image"
      fill
      style={{ objectFit: "cover", zIndex: -1 }}
    />
  );
};

export default BackgroundImage;
