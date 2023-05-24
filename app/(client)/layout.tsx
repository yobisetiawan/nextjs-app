export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="client-layout">
      <div>Client Layout</div>
      {children}
    </div>
  );
}
