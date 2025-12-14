import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { 
  Lightbulb, 
  Send, 
  ThumbsUp, 
  MessageSquare,
  TrendingUp,
  Users,
  Sparkles
} from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";

interface Suggestion {
  id: string;
  title: string;
  description: string;
  author: string;
  votes: number;
  status: "pending" | "under-review" | "approved" | "implemented";
  category: string;
  date: string;
}

const mockSuggestions: Suggestion[] = [
  {
    id: "1",
    title: "Extended Library Hours During Exams",
    description: "The library should be open 24/7 during exam periods to accommodate students who prefer studying late at night.",
    author: "Anonymous",
    votes: 45,
    status: "approved",
    category: "Facilities",
    date: "2024-01-10"
  },
  {
    id: "2",
    title: "More Vegetarian Options in Cafeteria",
    description: "Add more diverse vegetarian and vegan food options in the main cafeteria to cater to different dietary preferences.",
    author: "Jane D.",
    votes: 32,
    status: "under-review",
    category: "Food Services",
    date: "2024-01-08"
  },
  {
    id: "3",
    title: "Quiet Study Zones in Common Areas",
    description: "Designate certain areas in the student center as quiet zones for students who need to focus.",
    author: "Mike S.",
    votes: 28,
    status: "pending",
    category: "Academic",
    date: "2024-01-05"
  },
  {
    id: "4",
    title: "Water Bottle Refill Stations",
    description: "Install more water bottle refill stations across campus to promote sustainability and reduce plastic waste.",
    author: "Sarah K.",
    votes: 56,
    status: "implemented",
    category: "Sustainability",
    date: "2023-12-20"
  }
];

export default function Suggestions() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [suggestions] = useState<Suggestion[]>(mockSuggestions);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement with Lovable Cloud
    console.log("Submitting suggestion:", { title, description, category });
    setTitle("");
    setDescription("");
    setCategory("");
  };

  const getStatusBadge = (status: Suggestion["status"]) => {
    const statusMap = {
      "pending": "pending" as const,
      "under-review": "in-progress" as const,
      "approved": "found" as const,
      "implemented": "resolved" as const
    };
    return <StatusBadge status={statusMap[status]} />;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222,60%,20%)_0%,hsl(280,50%,35%)_50%,hsl(175,42%,35%)_100%)]" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent-foreground">
              <Sparkles className="h-4 w-4" />
              <span>Your Voice Matters</span>
            </div>
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Suggestions Box
            </h1>
            <p className="text-primary-foreground/80">
              Share your ideas to improve campus life. Vote on suggestions you support and watch them come to life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container -mt-6 relative z-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft text-center">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-info/10 text-info">
              <Lightbulb className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground">Total Suggestions</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft text-center">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
              <TrendingUp className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-foreground">8</p>
            <p className="text-sm text-muted-foreground">Implemented</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft text-center">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10 text-warning">
              <Users className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-foreground">342</p>
            <p className="text-sm text-muted-foreground">Total Votes</p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Submit Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground">Submit a Suggestion</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Brief title for your suggestion"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="academic">Academic</option>
                    <option value="facilities">Facilities</option>
                    <option value="food">Food Services</option>
                    <option value="events">Events & Activities</option>
                    <option value="sustainability">Sustainability</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your suggestion in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Submit Suggestion
                </Button>
              </form>
            </div>
          </div>

          {/* Suggestions List */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-foreground">Community Suggestions</h2>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="votes">Most Voted</option>
                <option value="recent">Most Recent</option>
                <option value="status">By Status</option>
              </select>
            </div>

            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-medium"
                >
                  <div className="flex gap-4">
                    {/* Vote Section */}
                    <div className="flex flex-col items-center gap-1">
                      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary">
                        <ThumbsUp className="h-4 w-4" />
                      </button>
                      <span className="text-sm font-semibold text-foreground">{suggestion.votes}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-foreground">{suggestion.title}</h3>
                        {getStatusBadge(suggestion.status)}
                      </div>
                      <p className="mb-3 text-sm text-muted-foreground">{suggestion.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="rounded-full bg-muted px-2 py-1">{suggestion.category}</span>
                        <span>by {suggestion.author}</span>
                        <span>{suggestion.date}</span>
                        <button className="flex items-center gap-1 text-primary hover:underline">
                          <MessageSquare className="h-3 w-3" />
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
