import { Modal, Box, IconButton } from "@mui/material";
import SVG_CLOSE from "../../assets/svg/close";

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
}

export default function ImageModal({
  open,
  onClose,
  imageSrc,
}: ImageModalProps) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="image-modal">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "rgba(172, 172, 172, 0.1)",
            "&:hover": { backgroundColor: "rgba(172, 172, 172, 0.3)" },
          }}
        >
          <SVG_CLOSE color="rgb(172, 172, 172)" />
        </IconButton>
        <img
          src={imageSrc}
          alt="Enlarged"
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        />
      </Box>
    </Modal>
  );
}
