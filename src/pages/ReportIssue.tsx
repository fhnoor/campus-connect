import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { issueCategories } from "@/lib/mock-data";
import { AlertCircle, Send, CheckCircle2, Shield, Building, GraduationCap, Users } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  academic: GraduationCap,
  facility: Building,
  personal: Shield,
  other: Users,
};

export default function ReportIssue() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const trackingId = `TRK-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;

    toast.success("Issue submitted successfully!", {
      description: `Your tracking ID is: ${trackingId}. You will receive email updates.`,
      duration: 5000,
    });

    setIsSubmitting(false);
    navigate("/dashboard");
  };

  const selectedCategoryInfo = issueCategories.find(cat => cat.value === selectedCategory);

  return (
    <Layout>
      <div className="container py-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-warning/10 text-warning">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Report an Issue</h1>
            <p className="text-muted-foreground">
              Submit your concern and we'll route it to the right department. You'll receive a tracking ID for updates.
            </p>
          </div>

          {/* Category Selection */}
          <div className="mb-8">
            <Label className="mb-4 block text-sm font-medium">Select Issue Category</Label>
            <div className="grid grid-cols-2 gap-4">
              {issueCategories.map((category) => {
                const Icon = categoryIcons[category.value as keyof typeof categoryIcons];
                const isSelected = selectedCategory === category.value;
                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setSelectedCategory(category.value)}
                    className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-medium"
                        : "border-border bg-card hover:border-primary/50 hover:shadow-soft"
                    }`}
                  >
                    {isSelected && (
                      <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-primary" />
                    )}
                    <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-foreground">{category.label}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">→ {category.assignee}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          {selectedCategory && (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-soft animate-slide-up">
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Assigned to:</span>{" "}
                  {selectedCategoryInfo?.assignee}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Issue Title *</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Brief summary of your issue"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Please provide as much detail as possible..."
                  rows={5}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID *</Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    placeholder="e.g., STU001"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@dit.edu"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  You'll receive status updates at this email address.
                </p>
              </div>

              {selectedCategory === "personal" && (
                <div className="rounded-lg border border-success/20 bg-success/5 p-4">
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-success">Confidential</p>
                      <p className="text-sm text-muted-foreground">
                        Personal issues are handled confidentially by the Dean of Students. 
                        Your information will not be shared without your consent.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Issue Report
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
