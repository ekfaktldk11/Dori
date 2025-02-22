import { Modal, Backdrop, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

interface MarkdownModalProps {
  open: boolean;
  content: string | null;
  onClose: () => void;
}

export default function MarkdownModal({
  open,
  content,
  onClose,
}: MarkdownModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop}
      BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.5)" } }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Markdown Content
        </Typography>
        <ReactMarkdown>{content || ""}</ReactMarkdown>
      </Box>
    </Modal>
  );
}
