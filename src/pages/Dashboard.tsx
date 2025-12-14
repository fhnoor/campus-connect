import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockLostItems, mockIssues, Issue, LostItem } from "@/lib/mock-data";
import { 
  Package, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Tag,
  ArrowRight,
  FileText,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [issues] = useState<Issue[]>(mockIssues);
  const [lostItems] = useState<LostItem[]>(mockLostItems);

  const openIssues = issues.filter(i => i.status !== "resolved").length;
  const resolvedIssues = issues.filter(i => i.status === "resolved").length;
  const activeItems = lostItems.filter(i => i.status !== "returned").length;

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Your Dashboard</h1>
          <p className="text-muted-foreground">
            Track all your submissions and their current status.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="My Lost Items"
            value={activeItems}
            icon={Package}
            variant="warning"
          />
          <StatCard
            title="Open Issues"
            value={openIssues}
            icon={Clock}
            variant="info"
          />
          <StatCard
            title="Resolved"
            value={resolvedIssues}
            icon={CheckCircle2}
            variant="success"
          />
          <StatCard
            title="Total Submissions"
            value={issues.length + lostItems.length}
            icon={FileText}
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="issues" className="space-y-6">
          <TabsList>
            <TabsTrigger value="issues" className="gap-2">
              <AlertCircle className="h-4 w-4" />
              My Issues ({issues.length})
            </TabsTrigger>
            <TabsTrigger value="items" className="gap-2">
              <Package className="h-4 w-4" />
              My Lost Items ({lostItems.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="issues" className="space-y-4">
            {issues.length === 0 ? (
              <EmptyState 
                icon={AlertCircle}
                title="No issues submitted"
                description="You haven't submitted any issues yet."
                actionLabel="Report an Issue"
                actionHref="/report-issue"
              />
            ) : (
              <div className="space-y-4">
                {issues.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="items" className="space-y-4">
            {lostItems.length === 0 ? (
              <EmptyState 
                icon={Package}
                title="No lost items"
                description="You haven't reported any lost items."
                actionLabel="Report Lost Item"
                actionHref="/lost-found"
              />
            ) : (
              <div className="space-y-4">
                {lostItems.map((item) => (
                  <LostItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

function IssueCard({ issue }: { issue: Issue }) {
  const categoryColors = {
    academic: "bg-info/10 text-info",
    facility: "bg-warning/10 text-warning",
    personal: "bg-success/10 text-success",
    other: "bg-muted text-muted-foreground",
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:shadow-medium">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-md px-2 py-1 text-xs font-medium capitalize ${categoryColors[issue.category]}`}>
              {issue.category}
            </span>
            <StatusBadge status={issue.status} />
          </div>
          <h3 className="font-medium text-foreground">{issue.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{issue.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {issue.trackingId}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(issue.date).toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-xs text-muted-foreground">Assigned to</p>
          <p className="text-sm font-medium text-foreground">{issue.assignedTo}</p>
        </div>
      </div>
    </div>
  );
}

function LostItemCard({ item }: { item: LostItem }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:shadow-medium">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
              {item.category}
            </span>
            <StatusBadge status={item.status} />
          </div>
          <h3 className="font-medium text-foreground">{item.description}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {item.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(item.date).toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-xs text-muted-foreground">Item ID</p>
          <p className="text-sm font-medium text-foreground">{item.id}</p>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  actionHref 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-border p-12 text-center">
      <Icon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
      <h3 className="mb-2 font-medium text-foreground">{title}</h3>
      <p className="mb-6 text-sm text-muted-foreground">{description}</p>
      <Link to={actionHref}>
        <Button className="gap-2">
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
