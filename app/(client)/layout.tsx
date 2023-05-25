import NavTop from "@/components/shared/client/nav-top";
import Footer from "@/components/shared/client/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="client-layout">
      <NavTop />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}
