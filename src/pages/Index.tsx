import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";
import { 
  Search, 
  AlertCircle, 
  LayoutDashboard, 
  Package,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222,60%,20%)_0%,hsl(222,50%,30%)_50%,hsl(175,42%,35%)_100%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent-foreground">
              <Sparkles className="h-4 w-4" />
              <span>Your Digital Campus Support Hub</span>
            </div>
            
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              DIT Student Affairs
              <span className="block text-accent">Support System</span>
            </h1>
            
            <p className="mb-10 text-lg text-primary-foreground/80 sm:text-xl">
              Report lost items, submit concerns, and track your requests—all in one place. 
              We're here to help you navigate campus life smoothly.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/lost-found">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                  <Search className="h-5 w-5" />
                  Lost & Found
                </Button>
              </Link>
              <Link to="/report-issue">
                <Button variant="outline" size="xl" className="w-full sm:w-auto gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <AlertCircle className="h-5 w-5" />
                  Report an Issue
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
      </section>

      {/* Quick Stats */}
      <section className="container -mt-10 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Lost Items"
            value="12"
            icon={Package}
            variant="destructive"
            trend="3 reported today"
          />
          <StatCard
            title="Found Items"
            value="8"
            icon={Search}
            variant="info"
            trend="2 awaiting claim"
          />
          <StatCard
            title="Open Issues"
            value="24"
            icon={Clock}
            variant="warning"
            trend="5 in progress"
          />
          <StatCard
            title="Resolved"
            value="156"
            icon={CheckCircle2}
            variant="success"
            trend="This semester"
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container py-16 lg:py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground">How Can We Help?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choose a service below to get started. Our team is ready to assist you with any campus-related concerns.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Lost & Found Card */}
          <Link to="/lost-found" className="group">
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-strong hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-info/10 text-info transition-colors group-hover:bg-info group-hover:text-info-foreground">
                <Search className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">Lost & Found</h3>
              <p className="mb-6 text-muted-foreground">
                Report lost items or submit found items. Our system automatically matches and notifies owners.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-info">
                Get started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Report Issue Card */}
          <Link to="/report-issue" className="group">
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-strong hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-warning/10 text-warning transition-colors group-hover:bg-warning group-hover:text-warning-foreground">
                <AlertCircle className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">Report an Issue</h3>
              <p className="mb-6 text-muted-foreground">
                Submit academic, facility, or personal concerns. Issues are auto-routed to the right department.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-warning">
                Submit report <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Dashboard Card */}
          <Link to="/dashboard" className="group">
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-strong hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-success/10 text-success transition-colors group-hover:bg-success group-hover:text-success-foreground">
                <LayoutDashboard className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">Your Dashboard</h3>
              <p className="mb-6 text-muted-foreground">
                Track your submissions, view status updates, and manage all your requests in one place.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-success">
                View dashboard <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DIT Student Affairs. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            For emergencies, please contact campus security at <span className="font-medium text-foreground">+1 234 567 890</span>
          </p>
        </div>
      </footer>
    </Layout>
  );
}
