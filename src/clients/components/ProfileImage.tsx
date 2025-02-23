import { useState } from "react";
import { Avatar } from "@mui/material";
import ImageModal from "./ImageModal";

interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: number | string;
}

export default function ProfileImage({
  src,
  alt = "Profile Image",
  size = 80,
}: ProfileImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Avatar
        src={src}
        alt={alt}
        sx={{
          width: size,
          height: size,
          cursor: "pointer",
          borderRadius: "50%",
          boxShadow: 2,
        }}
        onClick={() => setOpen(true)}
      />
      <ImageModal open={open} onClose={() => setOpen(false)} imageSrc={src} />
    </>
  );
}
