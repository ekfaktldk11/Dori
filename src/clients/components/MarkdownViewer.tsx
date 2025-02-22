import { useState } from "react";
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
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {markdownSamples.map((md) => (
        <MarkdownCard
          key={md.id}
          title={md.title}
          onClick={() => handleOpen(md.content)}
        />
      ))}

      <MarkdownModal
        open={open}
        content={selectedMarkdown}
        onClose={handleClose}
      />
    </div>
  );
}
