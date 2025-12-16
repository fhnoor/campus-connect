import { FileText, Search, AlertTriangle, MessageSquare, LayoutDashboard, User, Bell, CheckCircle } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12 px-8 print:bg-gray-800 print:text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">DIT Student Affairs Digital Support System</h1>
          <p className="text-xl opacity-90">User Guide & Prototype Documentation</p>
          <p className="text-sm mt-4 opacity-75">Version 1.0 | December 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">
        {/* Table of Contents */}
        <section>
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li><a href="#overview" className="text-primary hover:underline">System Overview</a></li>
            <li><a href="#features" className="text-primary hover:underline">Core Features</a></li>
            <li><a href="#lost-found" className="text-primary hover:underline">Lost & Found Module</a></li>
            <li><a href="#issue-reporting" className="text-primary hover:underline">Issue Reporting Module</a></li>
            <li><a href="#suggestions" className="text-primary hover:underline">Suggestions Module</a></li>
            <li><a href="#dashboard" className="text-primary hover:underline">Student Dashboard</a></li>
            <li><a href="#authentication" className="text-primary hover:underline">Authentication System</a></li>
            <li><a href="#workflow" className="text-primary hover:underline">System Workflow</a></li>
            <li><a href="#future" className="text-primary hover:underline">Future Enhancements</a></li>
          </ol>
        </section>

        {/* Overview */}
        <section id="overview" className="page-break-before">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">1. System Overview</h2>
          <p className="text-gray-700 mb-4">
            The DIT Student Affairs Digital Support System is a comprehensive web application designed to streamline 
            communication between students and the Student Affairs office. It provides a centralized platform for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Reporting and tracking lost & found items</li>
            <li>Submitting and monitoring academic, facility, and personal issues</li>
            <li>Providing suggestions for campus improvement</li>
            <li>Real-time status tracking of all submissions</li>
          </ul>
          
          <div className="mt-6 p-4 bg-accent/30 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Target Users</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Students:</strong> Submit reports, track status, provide suggestions</li>
              <li><strong>Student Government:</strong> Manage lost & found, route issues</li>
              <li><strong>Department Admins:</strong> Handle assigned issues, update statuses</li>
            </ul>
          </div>
        </section>

        {/* Core Features */}
        <section id="features">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">2. Core Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Search className="h-6 w-6 text-warning" />
                <h3 className="font-semibold text-lg">Lost & Found</h3>
              </div>
              <p className="text-gray-600 text-sm">Report lost items and post found items with automatic matching and notifications.</p>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="font-semibold text-lg">Issue Reporting</h3>
              </div>
              <p className="text-gray-600 text-sm">Submit academic, facility, or personal issues with auto-routing to appropriate offices.</p>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Suggestions</h3>
              </div>
              <p className="text-gray-600 text-sm">Submit and vote on campus improvement suggestions with status tracking.</p>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <LayoutDashboard className="h-6 w-6 text-success" />
                <h3 className="font-semibold text-lg">Dashboard</h3>
              </div>
              <p className="text-gray-600 text-sm">Personal dashboard to view and track all submissions and their statuses.</p>
            </div>
          </div>
        </section>

        {/* Lost & Found */}
        <section id="lost-found" className="page-break-before">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">3. Lost & Found Module</h2>
          
          <h3 className="text-xl font-semibold mb-4">How to Report a Lost Item</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>Navigate to <strong>Lost & Found</strong> page from the navigation menu</li>
            <li>Click the <strong>"Report Lost Item"</strong> button</li>
            <li>Fill in the form with:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Item name and description</li>
                <li>Category (Electronics, Documents, Accessories, etc.)</li>
                <li>Last known location</li>
                <li>Date lost</li>
                <li>Optional: Upload a photo</li>
              </ul>
            </li>
            <li>Submit the report and receive a tracking ID</li>
            <li>All students will be notified about the lost item</li>
          </ol>

          <h3 className="text-xl font-semibold mb-4">How to Post a Found Item</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>Navigate to <strong>Lost & Found</strong> page</li>
            <li>Switch to the <strong>"Found Items"</strong> tab</li>
            <li>Click <strong>"Post Found Item"</strong></li>
            <li>Provide item details and where it can be claimed</li>
            <li>System will attempt to match with lost item reports</li>
          </ol>

          <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">Status Flow</h4>
            <p className="text-sm text-gray-700">
              <strong>Reported</strong> → <strong>Found</strong> → <strong>Returned</strong>
            </p>
          </div>
        </section>

        {/* Issue Reporting */}
        <section id="issue-reporting" className="page-break-before">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">4. Issue Reporting Module</h2>
          
          <h3 className="text-xl font-semibold mb-4">Issue Categories & Auto-Routing</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Category</th>
                  <th className="border border-border p-3 text-left">Routed To</th>
                  <th className="border border-border p-3 text-left">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Academic</td>
                  <td className="border border-border p-3">Dean of Students / Academic Office</td>
                  <td className="border border-border p-3 text-sm">Grade disputes, course registration, academic appeals</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3">Facility</td>
                  <td className="border border-border p-3">DITSO / Maintenance Office</td>
                  <td className="border border-border p-3 text-sm">Broken equipment, AC issues, cleanliness</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Personal</td>
                  <td className="border border-border p-3">Dean of Students (Confidential)</td>
                  <td className="border border-border p-3 text-sm">Personal concerns, counseling requests</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3">Other</td>
                  <td className="border border-border p-3">Student Government</td>
                  <td className="border border-border p-3 text-sm">General inquiries, suggestions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4">How to Submit an Issue</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Go to <strong>Report Issue</strong> from navigation</li>
            <li>Select the appropriate category</li>
            <li>Provide a clear title and detailed description</li>
            <li>Set priority level (Low, Medium, High)</li>
            <li>Optionally attach supporting documents</li>
            <li>Submit and receive tracking ID</li>
            <li>Issue is automatically routed to the correct department</li>
          </ol>

          <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Status Flow</h4>
            <p className="text-sm text-gray-700">
              <strong>Pending</strong> → <strong>In Progress</strong> → <strong>Resolved</strong>
            </p>
          </div>
        </section>

        {/* Suggestions */}
        <section id="suggestions" className="page-break-before">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">5. Suggestions Module</h2>
          
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Submit improvement suggestions for campus life</li>
            <li>Vote on other students' suggestions</li>
            <li>Track implementation status</li>
            <li>Filter by category (Academic, Facilities, Events, Services, Other)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">How to Submit a Suggestion</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Navigate to <strong>Suggestions</strong> page</li>
            <li>Click <strong>"Submit Suggestion"</strong></li>
            <li>Provide title and detailed description</li>
            <li>Select appropriate category</li>
            <li>Submit for review</li>
          </ol>

          <div className="mt-6 p-4 bg-success/10 border border-success/30 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Status Flow</h4>
            <p className="text-sm text-gray-700">
              <strong>Under Review</strong> → <strong>Approved</strong> → <strong>Implemented</strong>
            </p>
          </div>
        </section>

        {/* Dashboard */}
        <section id="dashboard">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">6. Student Dashboard</h2>
          
          <p className="text-gray-700 mb-4">
            The dashboard provides a centralized view of all your submissions and their current status.
          </p>

          <h3 className="text-xl font-semibold mb-4">Dashboard Components</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-1" />
              <div>
                <h4 className="font-semibold">Summary Statistics</h4>
                <p className="text-sm text-gray-600">Quick overview of active issues, lost items, resolved items, and total submissions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-1" />
              <div>
                <h4 className="font-semibold">My Issues Tab</h4>
                <p className="text-sm text-gray-600">View all submitted issues with status, category, and assigned department</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-1" />
              <div>
                <h4 className="font-semibold">My Lost Items Tab</h4>
                <p className="text-sm text-gray-600">Track lost item reports and their recovery status</p>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section id="authentication" className="page-break-before">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">7. Authentication System</h2>
          
          <h3 className="text-xl font-semibold mb-4">Login Process</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
            <li>Click <strong>"Login"</strong> button in navigation</li>
            <li>Enter your student email and password</li>
            <li>Click <strong>"Sign In"</strong></li>
          </ol>

          <h3 className="text-xl font-semibold mb-4">Registration Process</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click <strong>"Sign Up"</strong> tab on login page</li>
            <li>Enter full name, student email, and create password</li>
            <li>Confirm password</li>
            <li>Click <strong>"Create Account"</strong></li>
          </ol>

          <div className="mt-6 p-4 bg-accent/30 rounded-lg">
            <h4 className="font-semibold mb-2">Note</h4>
            <p className="text-sm text-gray-700">
              In the current prototype, authentication is simulated. The production version will integrate 
              with Lovable Cloud for secure authentication and data persistence.
            </p>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">8. System Workflow</h2>
          
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">Complete System Flow</h3>
            <div className="space-y-4 text-center">
              <div className="p-3 bg-primary text-primary-foreground rounded">
                1. Student submits report (Lost Item / Issue / Suggestion)
              </div>
              <div className="text-2xl">↓</div>
              <div className="p-3 bg-warning/20 border border-warning rounded">
                2. System auto-routes to appropriate department
              </div>
              <div className="text-2xl">↓</div>
              <div className="p-3 bg-accent rounded">
                3. Student receives tracking ID and confirmation
              </div>
              <div className="text-2xl">↓</div>
              <div className="p-3 bg-success/20 border border-success rounded">
                4. Admin reviews and updates status
              </div>
              <div className="text-2xl">↓</div>
              <div className="p-3 bg-primary text-primary-foreground rounded">
                5. Student receives notification of resolution
              </div>
            </div>
          </div>
        </section>

        {/* Future Enhancements */}
        <section id="future" className="page-break-before">
          <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">9. Future Enhancements</h2>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-primary bg-muted/50">
              <h3 className="font-semibold">Database Integration</h3>
              <p className="text-sm text-gray-600">Connect to Lovable Cloud for persistent data storage</p>
            </div>
            <div className="p-4 border-l-4 border-success bg-muted/50">
              <h3 className="font-semibold">Email Notifications</h3>
              <p className="text-sm text-gray-600">Gmail integration for formal responses and updates</p>
            </div>
            <div className="p-4 border-l-4 border-warning bg-muted/50">
              <h3 className="font-semibold">Admin Dashboard</h3>
              <p className="text-sm text-gray-600">Separate interface for department admins to manage issues</p>
            </div>
            <div className="p-4 border-l-4 border-destructive bg-muted/50">
              <h3 className="font-semibold">Mobile App</h3>
              <p className="text-sm text-gray-600">Native mobile application for easier access</p>
            </div>
            <div className="p-4 border-l-4 border-primary bg-muted/50">
              <h3 className="font-semibold">Analytics Dashboard</h3>
              <p className="text-sm text-gray-600">Statistics and reports for administration</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center text-gray-500">
          <p className="text-sm">DIT Student Affairs Digital Support System</p>
          <p className="text-sm">Prototype Documentation v1.0</p>
          <p className="text-sm mt-2">© 2024 Dar es Salaam Institute of Technology</p>
          <p className="text-xs mt-4">To save as PDF: Press Ctrl+P (or Cmd+P on Mac) and select "Save as PDF"</p>
        </footer>
      </div>
    </div>
  );
};

export default Documentation;
