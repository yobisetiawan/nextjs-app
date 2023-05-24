import NavTop from "@/components/shared/client/nav-top";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="client-template">
      <NavTop />
      {children}
    </div>
  );
}
