import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <div className="footer">
      <Separator />
      <div className="container py-3 flex justify-between text-sm">
        <div>Copyright &copy; 2023 62teknologi</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  );
}
