export interface LostItem {
  id: string;
  description: string;
  location: string;
  category: string;
  date: string;
  status: "reported" | "found" | "returned";
  reporterId: string;
  reporterName: string;
  image?: string;
}

export interface FoundItem {
  id: string;
  description: string;
  location: string;
  category: string;
  date: string;
  status: "found" | "returned";
  finderId: string;
  finderName: string;
  image?: string;
}

export interface Issue {
  id: string;
  category: "academic" | "facility" | "personal" | "other";
  title: string;
  description: string;
  status: "pending" | "in-progress" | "resolved";
  assignedTo: string;
  reporterId: string;
  reporterName: string;
  date: string;
  trackingId: string;
}

export const mockLostItems: LostItem[] = [
  {
    id: "L001",
    description: "Black leather wallet with student ID",
    location: "Library - 2nd Floor",
    category: "Wallet/Purse",
    date: "2024-01-15",
    status: "reported",
    reporterId: "STU001",
    reporterName: "John Doe",
  },
  {
    id: "L002",
    description: "Blue Hydro Flask water bottle with stickers",
    location: "Cafeteria",
    category: "Personal Items",
    date: "2024-01-14",
    status: "found",
    reporterId: "STU002",
    reporterName: "Jane Smith",
  },
  {
    id: "L003",
    description: "HP laptop charger (black)",
    location: "Computer Lab A",
    category: "Electronics",
    date: "2024-01-13",
    status: "returned",
    reporterId: "STU003",
    reporterName: "Mike Johnson",
  },
];

export const mockFoundItems: FoundItem[] = [
  {
    id: "F001",
    description: "Silver wristwatch",
    location: "Sports Complex",
    category: "Accessories",
    date: "2024-01-15",
    status: "found",
    finderId: "STU004",
    finderName: "Sarah Lee",
  },
  {
    id: "F002",
    description: "Set of keys with red keychain",
    location: "Main Building Entrance",
    category: "Keys",
    date: "2024-01-14",
    status: "returned",
    finderId: "STU005",
    finderName: "Tom Wilson",
  },
];

export const mockIssues: Issue[] = [
  {
    id: "ISS001",
    category: "academic",
    title: "Grade discrepancy in Math 101",
    description: "My midterm grade shows 65 but my paper was marked 85. Need review.",
    status: "in-progress",
    assignedTo: "Dean of Students",
    reporterId: "STU001",
    reporterName: "John Doe",
    date: "2024-01-15",
    trackingId: "TRK-2024-001",
  },
  {
    id: "ISS002",
    category: "facility",
    title: "Broken AC in Room 204",
    description: "The air conditioning unit in lecture room 204 is not working properly.",
    status: "pending",
    assignedTo: "DITSO",
    reporterId: "STU002",
    reporterName: "Jane Smith",
    date: "2024-01-14",
    trackingId: "TRK-2024-002",
  },
  {
    id: "ISS003",
    category: "personal",
    title: "Request for counseling session",
    description: "Would like to schedule a counseling session regarding academic stress.",
    status: "resolved",
    assignedTo: "Dean of Students",
    reporterId: "STU003",
    reporterName: "Mike Johnson",
    date: "2024-01-12",
    trackingId: "TRK-2024-003",
  },
];

export const itemCategories = [
  "Electronics",
  "Wallet/Purse",
  "Keys",
  "Books/Notebooks",
  "Clothing",
  "Accessories",
  "Personal Items",
  "Sports Equipment",
  "Other",
];

export const issueCategories = [
  { value: "academic", label: "Academic", assignee: "Dean of Students / Academic Office" },
  { value: "facility", label: "Facility", assignee: "DITSO / Maintenance Office" },
  { value: "personal", label: "Personal (Confidential)", assignee: "Dean of Students" },
  { value: "other", label: "Other", assignee: "Student Government" },
];

export const campusLocations = [
  "Library - 1st Floor",
  "Library - 2nd Floor",
  "Library - 3rd Floor",
  "Main Building - Lobby",
  "Main Building - Room 101-110",
  "Main Building - Room 201-210",
  "Cafeteria",
  "Sports Complex",
  "Computer Lab A",
  "Computer Lab B",
  "Science Building",
  "Engineering Block",
  "Student Center",
  "Parking Lot",
  "Other",
];
