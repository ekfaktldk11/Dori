import { useState } from "react";
import { Grid2 } from "@mui/material";
import MarkdownCard from "./MarkdownCard";
import MarkdownModal from "./MarkdownModal";

// 추후 마크다운 파일 받아와서 만들도록 수정해야함
const markdownSamples = [
  {
    id: 1,
    title: "Markdown 1",
    content: "# Hello World\nThis is **Markdown** content!",
  },
  { id: 2, title: "Markdown 2", content: "## Subtitle\n- Item 1\n- Item 2" },
  { id: 3, title: "Markdown 3", content: "" },
  { id: 4, title: "Markdown 4", content: "" },
  { id: 5, title: "Markdown 5", content: "" },
  { id: 6, title: "Markdown 6", content: "" },
];

export default function MarkdownViewer() {
  const [open, setOpen] = useState(false);
  const [selectedMarkdown, setSelectedMarkdown] = useState<string | null>(null);

  const handleOpen = (content: string) => {
    setSelectedMarkdown(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMarkdown(null);
  };

  return (
    <Grid2 sx={{ mx: "1em" }} container spacing={2}>
      {markdownSamples.map((md) => (
        <Grid2 size={3}>
          <MarkdownCard
            key={md.id}
            title={md.title}
            onClick={() => handleOpen(md.content)}
          />
        </Grid2>
      ))}

      <MarkdownModal
        open={open}
        content={selectedMarkdown}
        onClose={handleClose}
      />
    </Grid2>
  );
}
