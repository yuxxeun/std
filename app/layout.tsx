import "../styles/globals.css";
import "../styles/output.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
