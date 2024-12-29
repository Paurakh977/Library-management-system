import { useState } from 'react';
import { Search, Filter, UserPlus, ChevronDown, BookOpen, Clock, AlertCircle, CheckCircle2, User2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Dialog, DialogContent } from '../ui/dialog';

// Sample member data
const members = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000",
    memberSince: "2023-01-15",
    status: "active",
    borrowedBooks: [
      {
        id: 1,
        title: "The Midnight Library",
        dueDate: "2024-02-28",
        status: "overdue"
      },
      {
        id: 2,
        title: "Atomic Habits",
        dueDate: "2024-03-15",
        status: "ongoing"
      }
    ],
    totalBorrowed: 12,
    currentlyBorrowed: 2,
    overdue: 1
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@email.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000",
    memberSince: "2023-03-22",
    status: "active",
    borrowedBooks: [
      {
        id: 3,
        title: "Project Hail Mary",
        dueDate: "2024-03-10",
        status: "ongoing"
      }
    ],
    totalBorrowed: 8,
    currentlyBorrowed: 1,
    overdue: 0
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000",
    memberSince: "2023-06-05",
    status: "inactive",
    borrowedBooks: [],
    totalBorrowed: 5,
    currentlyBorrowed: 0,
    overdue: 0
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.k@email.com",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000",
    memberSince: "2023-02-10",
    status: "active",
    borrowedBooks: [
      {
        id: 4,
        title: "The Psychology of Money",
        dueDate: "2024-03-05",
        status: "ongoing"
      },
      {
        id: 5,
        title: "Dune",
        dueDate: "2024-02-25",
        status: "overdue"
      }
    ],
    totalBorrowed: 15,
    currentlyBorrowed: 2,
    overdue: 1
  },
  {
    id: 5,
    name: "Sophia Martinez",
    email: "sophia.m@email.com",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=2000",
    memberSince: "2023-07-18",
    status: "active",
    borrowedBooks: [
      {
        id: 6,
        title: "The Silent Patient",
        dueDate: "2024-03-20",
        status: "ongoing"
      }
    ],
    totalBorrowed: 6,
    currentlyBorrowed: 1,
    overdue: 0
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.w@email.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2000",
    memberSince: "2023-04-30",
    status: "active",
    borrowedBooks: [
      {
        id: 7,
        title: "The Alchemist",
        dueDate: "2024-03-12",
        status: "ongoing"
      }
    ],
    totalBorrowed: 10,
    currentlyBorrowed: 1,
    overdue: 0
  },
  {
    id: 7,
    name: "Olivia Taylor",
    email: "olivia.t@email.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2000",
    memberSince: "2023-09-01",
    status: "inactive",
    borrowedBooks: [],
    totalBorrowed: 3,
    currentlyBorrowed: 0,
    overdue: 0
  },
  {
    id: 8,
    name: "Lucas Brown",
    email: "lucas.b@email.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000",
    memberSince: "2023-05-15",
    status: "active",
    borrowedBooks: [
      {
        id: 8,
        title: "Deep Work",
        dueDate: "2024-03-18",
        status: "ongoing"
      },
      {
        id: 9,
        title: "The Hobbit",
        dueDate: "2024-02-20",
        status: "overdue"
      }
    ],
    totalBorrowed: 18,
    currentlyBorrowed: 2,
    overdue: 1
  },
  {
    id: 9,
    name: "Isabella Garcia",
    email: "isabella.g@email.com",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2000",
    memberSince: "2023-08-20",
    status: "active",
    borrowedBooks: [
      {
        id: 10,
        title: "The Thursday Murder Club",
        dueDate: "2024-03-25",
        status: "ongoing"
      }
    ],
    totalBorrowed: 7,
    currentlyBorrowed: 1,
    overdue: 0
  },
  {
    id: 10,
    name: "Alexander Lee",
    email: "alex.l@email.com",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000",
    memberSince: "2023-11-05",
    status: "active",
    borrowedBooks: [
      {
        id: 11,
        title: "The Paris Library",
        dueDate: "2024-03-22",
        status: "ongoing"
      }
    ],
    totalBorrowed: 4,
    currentlyBorrowed: 1,
    overdue: 0
  },
  {
    id: 11,
    name: "Emma Thompson",
    email: "emma.t@email.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000",
    memberSince: "2023-10-15",
    status: "active",
    borrowedBooks: [
      {
        id: 12,
        title: "The Book Thief",
        dueDate: "2024-03-28",
        status: "ongoing"
      }
    ],
    totalBorrowed: 9,
    currentlyBorrowed: 1,
    overdue: 0
  },
  {
    id: 12,
    name: "William Parker",
    email: "william.p@email.com",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=120",
    banner: "https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2000",
    memberSince: "2023-12-01",
    status: "active",
    borrowedBooks: [],
    totalBorrowed: 2,
    currentlyBorrowed: 0,
    overdue: 0
  }
];

const statusColors = {
  active: "text-green-600 bg-green-50 border-green-100",
  inactive: "text-gray-600 bg-gray-50 border-gray-100",
  overdue: "text-red-600 bg-red-50 border-red-100",
  ongoing: "text-blue-600 bg-blue-50 border-blue-100"
};

interface Member {
  id: number;
  name: string;
  email: string;
  avatar: string;
  banner: string;
  memberSince: string;
  status: string;
  borrowedBooks: {
    id: number;
    title: string;
    dueDate: string;
    status: string;
  }[];
  totalBorrowed: number;
  currentlyBorrowed: number;
  overdue: number;
}

function MemberDetailsModal({ member, onClose }: { member: Member | null; onClose: () => void }) {
  if (!member) return null;

  return (
    <Dialog open={!!member} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl overflow-hidden p-0">
        <div className="relative h-32">
          <img 
            src={member.banner}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          <div className="absolute -bottom-10 left-6 h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
            <img
              src={member.avatar}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="p-6 pt-14">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.email}</p>
            </div>
            <span 
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                statusColors[member.status as keyof typeof statusColors]
              }`}
            >
              {member.status === 'active' ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
              {member.status}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Card className="p-4">
              <p className="text-sm text-gray-500">Total Borrowed</p>
              <p className="mt-1 text-2xl font-semibold">{member.totalBorrowed}</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-gray-500">Currently Borrowed</p>
              <p className="mt-1 text-2xl font-semibold">{member.currentlyBorrowed}</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-gray-500">Overdue</p>
              <p className="mt-1 text-2xl font-semibold text-red-600">{member.overdue}</p>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="font-medium">Currently Borrowed Books</h3>
            <div className="mt-4 space-y-4">
              {member.borrowedBooks.map((book) => (
                <Card key={book.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <BookOpen className="h-8 w-8 text-gray-400" />
                    <div>
                      <p className="font-medium">{book.title}</p>
                      <p className="text-sm text-gray-500">Due: {book.dueDate}</p>
                    </div>
                  </div>
                  <span 
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                      statusColors[book.status as keyof typeof statusColors]
                    }`}
                  >
                    {book.status === 'ongoing' ? <Clock className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                    {book.status}
                  </span>
                </Card>
              ))}
              {member.borrowedBooks.length === 0 && (
                <p className="text-center text-sm text-gray-500 py-4">No books currently borrowed</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [filters, setFilters] = useState({
    status: "all",
    sortBy: "name",
  });

  return (
    <>
      <div className="h-full p-4 md:p-6 overflow-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold">Library Members</h1>
          <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800">
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Member
          </button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 max-w-md items-center gap-4">
            <div className="flex-1">
              <div className="flex w-full items-center gap-2 rounded-xl border bg-white px-3 py-2 shadow-sm hover:border-gray-300">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center rounded-xl border bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm"
            >
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="mt-4">
            <div className="grid gap-6 p-4 sm:grid-cols-2">
              {/* Status Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select 
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="text-sm font-medium text-gray-700">Sort By</label>
                <select 
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="recent">Most Recent</option>
                  <option value="borrowed">Most Borrowed</option>
                </select>
              </div>
            </div>
          </Card>
        )}

        {/* Members Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <Card 
              key={member.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-20">
                <img 
                  src={member.banner}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
                <div className="absolute -bottom-6 left-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-white shadow-md">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-4 pt-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                  <span 
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${
                      statusColors[member.status as keyof typeof statusColors]
                    }`}
                  >
                    {member.status === 'active' ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                    {member.status}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <p className="text-gray-500">Total</p>
                    <p className="font-medium">{member.totalBorrowed}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Current</p>
                    <p className="font-medium">{member.currentlyBorrowed}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Overdue</p>
                    <p className="font-medium text-red-600">{member.overdue}</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 divide-x border-t">
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="p-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600 active:bg-gray-100"
                  >
                    View Details
                  </button>
                  <button className="p-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600 active:bg-gray-100">
                    Send Message
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Member Details Modal */}
      <MemberDetailsModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
} 