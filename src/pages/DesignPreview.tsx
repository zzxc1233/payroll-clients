import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { Select } from "../components/ui/Selecet";
import { Modal } from "../components/ui/Modal";
import { Card } from "../components/ui/Card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../components/ui/Table";

import { useState } from "react";

export default function DesignPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-4 px-4 py-10">
      {/* Button Preview */}
      <h1 className="text-4xl font-bold">Button Preview</h1>
      <div className="flex gap-4 items-center justify-center">
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="primary" size="md">
          Primary
        </Button>
        <Button variant="primary" size="lg">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <Button variant="ghost" size="sm">
          Ghost
        </Button>
        <Button variant="ghost" size="md">
          Ghost
        </Button>
        <Button variant="ghost" size="lg">
          Ghost
        </Button>
        <Button variant="danger" size="sm">
          Danger
        </Button>
        <Button variant="danger" size="md">
          Danger
        </Button>
        <Button variant="danger" size="lg">
          Danger
        </Button>
      </div>

      {/* Input Preview */}
      <h1 className="text-4xl font-bold">Input Preview</h1>
      <div className="w-2/3">
        <Input placeholder="Enter your name" clearable />
        <Input type="password" placeholder="Enter your password" clearable />
        <Input disabled placeholder="Enter your name" clearable />
      </div>

      {/* Badge Preview */}
      <h1 className="text-4xl font-bold">Badge Preview</h1>
      <div className="flex gap-4">
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
      </div>

      {/* Select Preview */}
      <h1 className="text-4xl font-bold">Select Preview</h1>
      <div className="w-2/3">
        <Select defaultValue="">
          <option value="" disabled>
            Select department
          </option>
          <option value="hr">HR</option>
          <option value="finance">Finance</option>
          <option value="engineering">Engineering</option>
        </Select>
      </div>

      {/* Modal Preview */}
      <h1 className="text-4xl font-bold">Modal Preview</h1>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal Title"
        description="This is a description for the modal."
      >
        <div className="space-y-4">
          <Input placeholder="Full name" clearable />
          <Input placeholder="Email" clearable />

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>

            <Button>Save</Button>
          </div>
        </div>
      </Modal>

      {/* Card Preview */}
      <h1 className="text-4xl font-bold">Card Preview</h1>
      <Card>
        <h2 className="text-lg font-semibold">Payroll Summary</h2>
        <p className="mt-1 text-sm text-muted">
          Overview of this month payroll.
        </p>
      </Card>

      {/* Table Preview */}
      <h1 className="text-4xl font-bold">Table Preview</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Salary</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Somchai Jaidee</TableCell>
            <TableCell>HR</TableCell>
            <TableCell>
              <Badge variant="success">Active</Badge>
            </TableCell>
            <TableCell className="text-right">฿45,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Somying Jairai</TableCell>
            <TableCell>Project Manager</TableCell>
            <TableCell>
              <Badge variant="danger">InActive</Badge>
            </TableCell>
            <TableCell className="text-right">฿75,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sommai Jaiyen</TableCell>
            <TableCell>Front-End Developer</TableCell>
            <TableCell>
              <Badge variant="warning">Intern</Badge>
            </TableCell>
            <TableCell className="text-right">฿15,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
