import { Dialog, DialogContent } from "../ui/dialog";
import { X, Star, Clock, BookOpen, MapPin, Hash, Calendar } from "lucide-react";
import { Book } from "./books";

interface BookDetailsModalProps {
  book: Book | null;
  onClose: () => void;
}

export function BookDetailsModal({ book, onClose }: BookDetailsModalProps) {
  if (!book) return null;

  return (
    <Dialog open={!!book} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl overflow-hidden p-0 rounded-2xl">
        <div className="relative aspect-[5/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
          <img
            src={book.cover}
            alt={book.title}
            className="h-full w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/40"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h2 className="text-2xl font-semibold text-white mb-2">{book.title}</h2>
            <p className="text-gray-200 text-lg">{book.author}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6">
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-lg font-semibold">{book.rating}</span>
              </div>
              <p className="text-sm text-gray-500">{book.borrowCount} total borrows</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-500">{book.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Hash className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">ISBN</p>
                  <p className="text-sm text-gray-500">{book.isbn}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Published</p>
                  <p className="text-sm text-gray-500">{book.publishedYear}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border bg-gray-50/50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Copies</p>
                  <p className="mt-1 text-2xl font-semibold">{book.availableCopies}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Copies</p>
                  <p className="mt-1 text-2xl font-semibold">{book.totalCopies}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all"
                    style={{
                      width: `${(book.availableCopies / book.totalCopies) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700">
                <BookOpen className="h-4 w-4" />
                {book.status === 'available' ? 'Borrow Book' : 'Join Waitlist'}
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                <Clock className="h-4 w-4" />
                Add to List
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 