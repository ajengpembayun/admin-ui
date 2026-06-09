import NotificationsIcon from "@mui/icons-material/Notifications";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-black text-white p-4">
        Sidebar
      </aside>

      {/* Content */}
      <div className="flex-1">

        {/* Header */}
        <header className="h-16 border-b flex items-center justify-end px-6">
        <div className="me-10">
            <NotificationsIcon className="text-gray-01 scale-110" />
        </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}

export default MainLayout;