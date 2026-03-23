import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Customers = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-foreground">Customers</h2>
      <p className="text-muted-foreground">Manage your customer list</p>
    </div>
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Users className="h-5 w-5 text-primary" />
          Customer Directory
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Customer management coming next. Add and search customers here.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default Customers;
