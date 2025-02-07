export default function RootLayout({
  children,
  people,
}: {
  children: React.ReactNode;
  people: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>{children}</div>
          <div>{people}</div>
        </div>
      </body>
    </html>
  );
}
