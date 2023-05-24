export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <div>Admin Layout</div>
      {children}
    </div>
  );
}
