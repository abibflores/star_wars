export default function RootLayout({
  children,
  people,
  modal
}: {
  children: React.ReactNode;
  people: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>{children}</div>
          <div>{people}</div>
        </div>
        <div>{modal}</div>
      </body>
    </html>
  );
}
