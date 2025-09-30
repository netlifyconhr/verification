import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table";
import { labels, priorities, statuses } from "../data/data";
import { type Task } from "../data/schema";
import { DataTableRowActions } from "./data-table-row-actions";

export const tasksColumns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "employeeName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employee Name" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.employeeName
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue("employeeName")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "employeeEmail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employee Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("employeeEmail")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "aadharFront",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Aadhar Front" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        <a href={row.getValue("aadharFront")} target="_blank">
          <img src={row.getValue("aadharFront")} alt="" />
        </a>
      </div>
    ),
  },
  {
    accessorKey: "aadharBack",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Aadhar Back" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        <a href={row.getValue("aadharBack")} target="_blank">
          <img src={row.getValue("aadharBack")} alt="" />
        </a>
      </div>
    ),
  },
  {
    accessorKey: "experience",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Experience" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        <a href={row.getValue("experience")} target="_blank">
          <img src={row.getValue("experience")} alt="" />
        </a>
      </div>
    ),
  },
  {
    accessorKey: "pan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PAN" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {" "}
        <a href={row.getValue("pan")} target="_blank">
          <img src={row.getValue("pan")} alt="" />
        </a>
      </div>
    ),
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
