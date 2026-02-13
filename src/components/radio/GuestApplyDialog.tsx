import { useState } from 'react';
import { Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { shows } from '../../data/showData';

interface GuestApplyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GuestApplyDialog({ open, onOpenChange }: GuestApplyDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showSlug, setShowSlug] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const selectedShow = shows.find(s => s.slug === showSlug);
  const bookingUrl = selectedShow?.links.bookingUrl;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/blog/?rest_route=/gcv/v1/guest-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, show: showSlug, topic }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit application.');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setName('');
      setEmail('');
      setShowSlug('');
      setTopic('');
      setError('');
      setSubmitted(false);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Guest Application</DialogTitle>
          <DialogDescription>
            Apply to be a guest on a Ghost Coast Radio show.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center space-y-3 py-4">
            <Send className="w-8 h-8 text-accent mx-auto" />
            <p className="font-mono text-sm text-accent uppercase tracking-widest">
              Application Received
            </p>
            {bookingUrl ? (
              <div className="space-y-2">
                <p className="font-mono text-xs text-muted-foreground">
                  You're in — book your recording slot below.
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs uppercase tracking-widest text-primary hover:text-primary/80 border border-primary px-4 py-2 transition-colors"
                >
                  Book Your Recording Slot
                </a>
              </div>
            ) : (
              <p className="font-mono text-xs text-muted-foreground">
                We'll be in touch to schedule.
              </p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                Name
              </label>
              <Input
                type="text"
                placeholder="YOUR NAME"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none h-12 uppercase"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                Email
              </label>
              <Input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none h-12 uppercase"
              />
            </div>

            <fieldset>
              <legend className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                Which Show?
              </legend>
              <div className="space-y-2">
                {shows.map(show => (
                  <label
                    key={show.slug}
                    className={`flex items-center gap-3 px-3 py-2.5 border cursor-pointer transition-colors ${
                      showSlug === show.slug
                        ? 'border-primary bg-primary/10 text-foreground'
                        : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                    }`}
                  >
                    <input
                      type="radio"
                      name="show"
                      value={show.slug}
                      checked={showSlug === show.slug}
                      onChange={() => setShowSlug(show.slug)}
                      required
                      className="sr-only"
                    />
                    <span
                      className={`w-3 h-3 border-2 flex-shrink-0 ${
                        showSlug === show.slug
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}
                    />
                    <span className="font-mono text-xs uppercase tracking-widest">
                      {show.title}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                Topic / Pitch
              </label>
              <Textarea
                placeholder="WHAT DO YOU WANT TO TALK ABOUT?"
                rows={4}
                required
                value={topic}
                onChange={e => setTopic(e.target.value)}
                className="w-full bg-background border-border text-foreground font-mono focus:border-accent focus:ring-1 focus:ring-accent rounded-none uppercase"
              />
            </div>

            {error && (
              <div className="font-mono text-xs text-red-400 bg-red-400/10 border border-red-400/30 px-3 py-2">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold font-sans uppercase tracking-widest border border-primary rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                {loading ? 'Submitting...' : 'Apply'} <Send className="w-4 h-4" />
              </span>
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
