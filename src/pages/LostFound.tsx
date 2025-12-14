import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockLostItems, mockFoundItems, itemCategories, campusLocations, LostItem, FoundItem } from "@/lib/mock-data";
import { Plus, Search, Package, MapPin, Calendar, User } from "lucide-react";
import { toast } from "sonner";

export default function LostFound() {
  const [lostItems, setLostItems] = useState<LostItem[]>(mockLostItems);
  const [foundItems, setFoundItems] = useState<FoundItem[]>(mockFoundItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLostDialogOpen, setIsLostDialogOpen] = useState(false);
  const [isFoundDialogOpen, setIsFoundDialogOpen] = useState(false);

  const handleReportLost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newItem: LostItem = {
      id: `L${(lostItems.length + 1).toString().padStart(3, '0')}`,
      description: formData.get('description') as string,
      location: formData.get('location') as string,
      category: formData.get('category') as string,
      date: new Date().toISOString().split('T')[0],
      status: "reported",
      reporterId: "STU001",
      reporterName: "Current User",
    };
    setLostItems([newItem, ...lostItems]);
    setIsLostDialogOpen(false);
    toast.success("Lost item reported successfully!", {
      description: "All registered users will be notified.",
    });
  };

  const handleReportFound = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newItem: FoundItem = {
      id: `F${(foundItems.length + 1).toString().padStart(3, '0')}`,
      description: formData.get('description') as string,
      location: formData.get('location') as string,
      category: formData.get('category') as string,
      date: new Date().toISOString().split('T')[0],
      status: "found",
      finderId: "STU001",
      finderName: "Current User",
    };
    setFoundItems([newItem, ...foundItems]);
    setIsFoundDialogOpen(false);
    toast.success("Found item reported successfully!", {
      description: "The owner will be notified if a match is found.",
    });
  };

  const filteredLostItems = lostItems.filter(item =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFoundItems = foundItems.filter(item =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Lost & Found</h1>
          <p className="text-muted-foreground">
            Report lost items or submit items you've found. We'll help match them with their owners.
          </p>
        </div>

        {/* Actions Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search items..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Dialog open={isLostDialogOpen} onOpenChange={setIsLostDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Report Lost
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display">Report Lost Item</DialogTitle>
                  <DialogDescription>
                    Provide details about the item you lost. All registered users will be notified.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleReportLost} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="lost-description">Description *</Label>
                    <Textarea
                      id="lost-description"
                      name="description"
                      placeholder="Describe the item in detail..."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lost-category">Category *</Label>
                    <Select name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {itemCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lost-location">Last Seen Location *</Label>
                    <Select name="location" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {campusLocations.map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">Submit Report</Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isFoundDialogOpen} onOpenChange={setIsFoundDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="success" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Report Found
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display">Report Found Item</DialogTitle>
                  <DialogDescription>
                    Provide details about the item you found. We'll try to match it with lost item reports.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleReportFound} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="found-description">Description *</Label>
                    <Textarea
                      id="found-description"
                      name="description"
                      placeholder="Describe the item in detail..."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="found-category">Category *</Label>
                    <Select name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {itemCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="found-location">Where did you find it? *</Label>
                    <Select name="location" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {campusLocations.map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">Submit Report</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="lost" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="lost" className="gap-2">
              <Package className="h-4 w-4" />
              Lost Items ({filteredLostItems.length})
            </TabsTrigger>
            <TabsTrigger value="found" className="gap-2">
              <Search className="h-4 w-4" />
              Found Items ({filteredFoundItems.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lost" className="space-y-4">
            {filteredLostItems.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border p-12 text-center">
                <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 font-medium text-foreground">No lost items found</h3>
                <p className="text-sm text-muted-foreground">
                  {searchQuery ? "Try adjusting your search." : "No items have been reported lost yet."}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredLostItems.map((item) => (
                  <ItemCard key={item.id} item={item} type="lost" />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="found" className="space-y-4">
            {filteredFoundItems.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border p-12 text-center">
                <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 font-medium text-foreground">No found items</h3>
                <p className="text-sm text-muted-foreground">
                  {searchQuery ? "Try adjusting your search." : "No items have been reported found yet."}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredFoundItems.map((item) => (
                  <ItemCard key={item.id} item={item} type="found" />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

function ItemCard({ item, type }: { item: LostItem | FoundItem; type: "lost" | "found" }) {
  const personLabel = type === "lost" ? "Reported by" : "Found by";
  const personName = type === "lost" ? (item as LostItem).reporterName : (item as FoundItem).finderName;

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:shadow-medium">
      <div className="mb-3 flex items-start justify-between">
        <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {item.category}
        </span>
        <StatusBadge status={item.status} />
      </div>
      <h3 className="mb-3 font-medium text-foreground line-clamp-2">{item.description}</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {item.location}
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date(item.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          {personLabel}: {personName}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
}
