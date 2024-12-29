import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Stats } from './components/dashboard/Stats';
import { CirculationChart } from './components/charts/CirculationChart';
import { CategoryChart } from './components/charts/CategoryChart';
import { RecentActivities } from './components/recent-activities';
import { PopularBooks } from './components/popular-books';
import { DueReturns } from './components/due-returns';
import { Card } from './components/ui/card';

export default function App() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="h-full flex flex-col">
            <Stats />
            <div className="mt-4 md:mt-6 grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 flex-1">
              {/* Recent Activities - Left side */}
              <div className="xl:col-span-1 min-h-[500px] xl:h-auto">
                <Card className="h-full flex flex-col">
                  <div className="flex items-center justify-between border-b p-4">
                    <h2 className="font-medium">Recent Activities</h2>
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      Show More
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <RecentActivities />
                  </div>
                </Card>
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
                  <Card className="h-full min-h-[400px] flex flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                      <h2 className="font-medium">Popular Books</h2>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        View all
                      </button>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <PopularBooks />
                    </div>
                  </Card>
                  <Card className="h-full min-h-[400px] flex flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                      <h2 className="font-medium">Due This Week</h2>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        View all
                      </button>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <DueReturns />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}