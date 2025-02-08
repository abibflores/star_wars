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
        <div className="flex flex-col gap-x-4">
          {children}
          {people}
        </div>
        {modal}
      </body>
    </html>
  );
}
