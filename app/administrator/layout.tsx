export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layoout">
      <div>Admin Layout</div>
      {children}
    </div>
  );
}
