import { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Check, X, ChevronDown, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { BookDetailsModal } from './book-details-modal';

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200",
    category: "Fiction",
    isbn: "978-0525559474",
    status: "available",
    totalCopies: 5,
    availableCopies: 3,
    location: "Floor 2, Section A",
    rating: 4.5,
    borrowCount: 42,
    publishedYear: 2020,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=200",
    category: "Self-Help",
    isbn: "978-0735211292",
    status: "borrowed",
    totalCopies: 8,
    availableCopies: 0,
    location: "Floor 1, Section C",
    rating: 4.8,
    borrowCount: 67,
    publishedYear: 2018,
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=200",
    category: "Science Fiction",
    isbn: "978-0593135204",
    status: "available",
    totalCopies: 4,
    availableCopies: 2,
    location: "Floor 2, Section B",
    rating: 4.7,
    borrowCount: 35,
    publishedYear: 2021,
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=200",
    category: "Finance",
    isbn: "978-0857197689",
    status: "maintenance",
    totalCopies: 3,
    availableCopies: 0,
    location: "Floor 1, Section D",
    rating: 4.6,
    borrowCount: 28,
    publishedYear: 2020,
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    cover: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=200",
    category: "Science Fiction",
    isbn: "978-0441013593",
    status: "available",
    totalCopies: 6,
    availableCopies: 4,
    location: "Floor 2, Section B",
    rating: 4.7,
    borrowCount: 89,
    publishedYear: 1965,
  },
  {
    id: 11,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200",
    category: "Self-Help",
    isbn: "978-0062457714",
    status: "available",
    totalCopies: 7,
    availableCopies: 2,
    location: "Floor 1, Section B",
    rating: 4.4,
    borrowCount: 156,
    publishedYear: 2016,
  },
  {
    id: 12,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=200",
    category: "Fiction",
    isbn: "978-0062060624",
    status: "borrowed",
    totalCopies: 4,
    availableCopies: 0,
    location: "Floor 2, Section A",
    rating: 4.7,
    borrowCount: 89,
    publishedYear: 2011,
  },
  {
    id: 13,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=200",
    category: "Business",
    isbn: "978-1585424337",
    status: "available",
    totalCopies: 6,
    availableCopies: 3,
    location: "Floor 1, Section E",
    rating: 4.9,
    borrowCount: 245,
    publishedYear: 1937,
  },
  {
    id: 14,
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=200",
    category: "Fantasy",
    isbn: "978-0765387561",
    status: "maintenance",
    totalCopies: 5,
    availableCopies: 0,
    location: "Floor 2, Section D",
    rating: 4.6,
    borrowCount: 67,
    publishedYear: 2020,
  },
  {
    id: 15,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    cover: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=200",
    category: "Self-Help",
    isbn: "978-1847946249",
    status: "available",
    totalCopies: 8,
    availableCopies: 5,
    location: "Floor 1, Section C",
    rating: 4.8,
    borrowCount: 178,
    publishedYear: 2012,
  }
];

const categories = [
  "All Categories",
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Mystery",
  "Self-Help",
  "Business",
  "Finance",
  "Technology",
  "History",
];

const statusColors = {
  available: "text-green-600 bg-green-50 border-green-100",
  borrowed: "text-amber-600 bg-amber-50 border-amber-100",
  maintenance: "text-red-600 bg-red-50 border-red-100",
};

const statusIcons = {
  available: Check,
  borrowed: Clock,
  maintenance: X,
};

export function BooksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [filters, setFilters] = useState({
    status: "all",
    availability: "all",
    sortBy: "popularity",
    yearRange: [1900, 2024],
  });

  return (
    <>
      <div className="h-full p-4 md:p-6 overflow-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold">Books Collection</h1>
          <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800">
            <BookOpen className="mr-2 h-4 w-4" />
            Add New Book
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
                  placeholder="Search books..."
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
          <div className="relative">
            <button 
              onClick={() => setShowCategories(!showCategories)}
              className="inline-flex w-full items-center justify-between rounded-xl border bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 md:w-48 shadow-sm"
            >
              {selectedCategory}
              <ChevronDown className="h-5 w-5" />
            </button>
            
            {/* Category Dropdown */}
            {showCategories && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border bg-white py-1 shadow-lg ring-1 ring-black/5 z-50">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategories(false);
                    }}
                    className="flex w-full items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="mt-4">
            <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-4">
              {/* Status Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select 
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="available">Available</option>
                  <option value="borrowed">Borrowed</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="text-sm font-medium text-gray-700">Availability</label>
                <select 
                  value={filters.availability}
                  onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All Books</option>
                  <option value="in-stock">In Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
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
                  <option value="popularity">Popularity</option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>

              {/* Year Range */}
              <div>
                <label className="text-sm font-medium text-gray-700">Published Year</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    min="1900"
                    max="2024"
                    value={filters.yearRange[0]}
                    onChange={(e) => setFilters({ 
                      ...filters, 
                      yearRange: [parseInt(e.target.value), filters.yearRange[1]]
                    })}
                    className="block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="From"
                  />
                  <input
                    type="number"
                    min="1900"
                    max="2024"
                    value={filters.yearRange[1]}
                    onChange={(e) => setFilters({
                      ...filters,
                      yearRange: [filters.yearRange[0], parseInt(e.target.value)]
                    })}
                    className="block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="To"
                  />
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Books Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => {
            const StatusIcon = statusIcons[book.status as keyof typeof statusIcons];
            return (
              <Card 
                key={book.id} 
                className="group overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-t-xl">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-500">{book.author}</p>
                    </div>
                    <span 
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${
                        statusColors[book.status as keyof typeof statusColors]
                      }`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {book.status}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {book.availableCopies} of {book.totalCopies} available
                    </span>
                    <span className="font-medium text-blue-600">
                      {book.borrowCount} borrows
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x border-t">
                  <button 
                    onClick={() => setSelectedBook(book)}
                    className="p-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600 active:bg-gray-100"
                  >
                    View Details
                  </button>
                  <button className="p-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600 active:bg-gray-100">
                    {book.status === 'available' ? 'Borrow Book' : 'Join Waitlist'}
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <BookDetailsModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
} 