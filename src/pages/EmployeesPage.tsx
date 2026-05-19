import {
  Search,
  Bell,
  CircleQuestionMark,
  Settings,
  Plus,
  ArrowDownToLine,
  ListFilter,
  Eye,
  Pencil,
} from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../components/ui/Table";

export default function EmployeesPage() {

  return (
    <div>
      <h1 className="relative flex items-center justify-between p-6 border-b border-muted/40">
        <div className="w-1/2">
          <Search className="absolute z-40 left-9 top-1/2 -translate-y-1/2 text-muted-foreground opacity-60 cursor-pointer" />
          <Input
            placeholder="Search employees, roles, or status..."
            className="pl-10 rounded-full"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-end gap-4 border-r-2 border-muted/60 pr-4">
            <Bell className="cursor-pointer" />
            <CircleQuestionMark className="cursor-pointer" />
            <Settings className="cursor-pointer" />
          </div>
          <Button variant="primary" size="md" className="gap-2 rounded-full">
            <Plus />
            Add Employee
          </Button>
        </div>
      </h1>

      <header className="p-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl">Employees</h1>
          <p>Manage your team members and their information</p>
        </div>
        <div className="gap-2 flex items-center justify-center">
          <Button
            variant="ghost"
            size="md"
            className="gap-2 bg-white border border-muted/50 text-muted/70"
          >
            <ListFilter size={16} />
            Filters
          </Button>
          <Button
            variant="ghost"
            size="md"
            className="gap-2 bg-white border border-muted/50 text-muted/70"
          >
            <ArrowDownToLine size={16} />
            Export
          </Button>
        </div>
      </header>

      {/* Employee Contents */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Employee Stats */}
        <div
          id="total-staff"
          className="rounded-lg border border-muted/50 bg-surface p-4"
        >
          <h2 className="text-sm">Total Staff</h2>
          <h1 className="text-2xl text-muted">124</h1>
        </div>
        <div
          id="active-employees"
          className="rounded-lg border border-muted/50 bg-surface p-4"
        >
          <h2 className="text-sm">Active</h2>
          <h1 className="text-2xl text-muted">112</h1>
        </div>
        <div
          id="on-leave"
          className="rounded-lg border border-muted/50 bg-surface p-4"
        >
          <h2 className="text-sm">On leave</h2>
          <h1 className="text-2xl text-muted">8</h1>
          <p className="text-sm text-muted">Returning within 30 days</p>
        </div>
        <div
          id="new-hires"
          className="rounded-lg border border-muted/50 bg-surface p-4"
        >
          <h2 className="text-sm">New Hires</h2>
          <h1 className="text-2xl text-muted">4</h1>
          <p className="text-sm text-muted">Starting this month</p>
        </div>
      </div>

      {/* Employees List */}
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Somchai Jaidee</TableCell>
              <TableCell>HR</TableCell>
              <TableCell>
                <a
                  href="tel:+66912345678"
                  className="text-muted-foreground hover:text-primary"
                >
                  +66 912 345 678
                </a>
              </TableCell>
              <TableCell>฿45,000</TableCell>
              <TableCell>Mar 12, 2022</TableCell>
              <TableCell>
                <Badge variant="success">Active</Badge>
              </TableCell>
              <TableCell className="flex gap-2 text-muted/60">
                <Eye size={20} className="cursor-pointer" />
                <Pencil size={18} className="cursor-pointer" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Somchai Jaidee</TableCell>
              <TableCell>HR</TableCell>
              <TableCell>
                <a
                  href="tel:+66912345678"
                  className="text-muted-foreground hover:text-primary"
                >
                  +66 912 345 678
                </a>
              </TableCell>
              <TableCell>฿45,000</TableCell>
              <TableCell>Mar 12, 2022</TableCell>
              <TableCell>
                <Badge variant="success">Active</Badge>
              </TableCell>
              <TableCell className="flex gap-2 text-muted/60">
                <Eye size={20} className="cursor-pointer" />
                <Pencil size={18} className="cursor-pointer" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Somchai Jaidee</TableCell>
              <TableCell>HR</TableCell>
              <TableCell>
                <a
                  href="tel:+66912345678"
                  className="text-muted-foreground hover:text-primary"
                >
                  +66 912 345 678
                </a>
              </TableCell>
              <TableCell>฿45,000</TableCell>
              <TableCell>Mar 12, 2022</TableCell>
              <TableCell>
                <Badge variant="success">Active</Badge>
              </TableCell>
              <TableCell className="flex gap-2 text-muted/60">
                <Eye size={20} className="cursor-pointer" />
                <Pencil size={18} className="cursor-pointer" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
