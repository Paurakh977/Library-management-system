import { Book } from 'lucide-react';
import { Card } from './ui/card';

const popularBooks = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    borrowCount: 42,
    available: true,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=100"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    borrowCount: 38,
    available: false,
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=100"
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    borrowCount: 35,
    available: true,
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=100"
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    borrowCount: 33,
    available: false,
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=100"
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    borrowCount: 31,
    available: true,
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=100"
  },
  {
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    borrowCount: 29,
    available: false,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=100"
  },
  {
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    borrowCount: 27,
    available: true,
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=100"
  },
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    borrowCount: 25,
    available: false,
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=100"
  },
  {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    borrowCount: 24,
    available: true,
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=100"
  },
  {
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    borrowCount: 22,
    available: false,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=100"
  }
];

export function PopularBooks() {
  return (
    <div className="divide-y">
      {popularBooks.map((book, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 hover:bg-gray-50/50"
        >
          <img 
            src={book.coverUrl} 
            alt={book.title}
            className="h-16 w-12 rounded-md object-cover shadow-sm"
          />
          <div className="flex-1">
            <h3 className="font-medium">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {book.borrowCount} borrows
              </span>
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                book.available ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
              }`}>
                {book.available ? 'Available' : 'Checked Out'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 