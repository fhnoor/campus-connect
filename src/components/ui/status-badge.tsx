import { cn } from "@/lib/utils";

type Status = "pending" | "in-progress" | "resolved" | "reported" | "found" | "returned";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusLabels: Record<Status, string> = {
  pending: "Pending",
  "in-progress": "In Progress",
  resolved: "Resolved",
  reported: "Reported",
  found: "Found",
  returned: "Returned",
};

const statusStyles: Record<Status, string> = {
  pending: "status-pending",
  "in-progress": "status-in-progress",
  resolved: "status-resolved",
  reported: "status-reported",
  found: "status-found",
  returned: "status-returned",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
      statusStyles[status],
      className
    )}>
      {statusLabels[status]}
    </span>
  );
}
