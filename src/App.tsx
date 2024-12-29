import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { BooksPage } from './components/pages/books';
import { Stats } from './components/dashboard/Stats';
import { CirculationChart } from './components/charts/CirculationChart';
import { CategoryChart } from './components/charts/CategoryChart';
import { RecentActivities } from './components/recent-activities';
import { PopularBooks } from './components/popular-books';
import { DueReturns } from './components/due-returns';

function DashboardContent() {
  return (
    <div className="h-full flex flex-col">
      <Stats />
      <div className="mt-4 md:mt-6 grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 flex-1">
        {/* Recent Activities - Left side */}
        <div className="xl:col-span-1 min-h-[500px] xl:h-auto">
          <RecentActivities />
        </div>

        {/* Right side content */}
        <div className="xl:col-span-2 flex flex-col gap-4 md:gap-6">
          {/* Graphs on top */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <CirculationChart />
            <CategoryChart />
          </div>

          {/* Popular Books and Due Returns below graphs */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 flex-1">
            <PopularBooks />
            <DueReturns />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex h-full flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/members" element={<div>Members Page (Coming Soon)</div>} />
              <Route path="/circulation" element={<div>Circulation Page (Coming Soon)</div>} />
              <Route path="/reports" element={<div>Reports Page (Coming Soon)</div>} />
              <Route path="/settings" element={<div>Settings Page (Coming Soon)</div>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}