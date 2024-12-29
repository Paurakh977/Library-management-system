import { Calendar } from 'lucide-react';
import { Card } from './ui/card';

const dueReturns = [
  {
    book: "Dune",
    borrower: "Alex Thompson",
    dueDate: "Tomorrow",
    status: "upcoming"
  },
  {
    book: "The Silent Patient",
    borrower: "Maria Garcia",
    dueDate: "In 2 days",
    status: "upcoming"
  },
  {
    book: "The Thursday Murder Club",
    borrower: "John Smith",
    dueDate: "In 3 days",
    status: "upcoming"
  },
  {
    book: "The Paris Apartment",
    borrower: "Emma Wilson",
    dueDate: "In 3 days",
    status: "upcoming"
  },
  {
    book: "The It Girl",
    borrower: "David Chen",
    dueDate: "In 4 days",
    status: "upcoming"
  },
  {
    book: "The Diamond Eye",
    borrower: "Sarah Johnson",
    dueDate: "In 5 days",
    status: "upcoming"
  },
  {
    book: "Book Lovers",
    borrower: "Michael Park",
    dueDate: "In 5 days",
    status: "upcoming"
  },
  {
    book: "The House Across the Lake",
    borrower: "Lisa Anderson",
    dueDate: "In 6 days",
    status: "upcoming"
  },
  {
    book: "The Starless Sea",
    borrower: "Ryan Thompson",
    dueDate: "In 6 days",
    status: "upcoming"
  },
  {
    book: "Mexican Gothic",
    borrower: "Hannah Kim",
    dueDate: "In 7 days",
    status: "upcoming"
  },
  {
    book: "The Inheritance Games",
    borrower: "Carlos Rodriguez",
    dueDate: "In 7 days",
    status: "upcoming"
  },
  {
    book: "One Last Stop",
    borrower: "Sophie Chen",
    dueDate: "In 7 days",
    status: "upcoming"
  }
];

export function DueReturns() {
  return (
    <div className="divide-y">
      {dueReturns.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 hover:bg-gray-50/50"
        >
          <div>
            <p className="font-medium">{item.book}</p>
            <p className="text-sm text-gray-500">{item.borrower}</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{item.dueDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 