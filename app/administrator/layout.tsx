export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-template">
      <div>Admin Layout</div>
      {children}
    </div>
  );
}
