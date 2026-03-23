import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Billing = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-foreground">Billing</h2>
      <p className="text-muted-foreground">Create and manage your bills</p>
    </div>
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <FileText className="h-5 w-5 text-primary" />
          Bills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Billing features coming next. The dynamic billing form with auto-calculations will be built here.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default Billing;
