import { Card, CardContent, Typography } from "@mui/material";

interface MarkdownCardProps {
  title: string;
  onClick: () => void;
}

export default function MarkdownCard({ title, onClick }: MarkdownCardProps) {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};
