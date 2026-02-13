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

const SKILLS = [
  'camera',
  'production',
  'networking',
  'social media',
  'graphic design',
  'editing',
  'business',
] as const;

interface HostSignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function HostSignupDialog({ open, onOpenChange }: HostSignupDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleSkill = (skill: string) => {
    setSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (skills.length === 0) {
      setError('Select at least one skill.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/blog/?rest_route=/gcv/v1/host-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, skills, message }),
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
      setSkills([]);
      setMessage('');
      setError('');
      setSubmitted(false);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Host Application</DialogTitle>
          <DialogDescription>
            Apply to host a show on the Ghost Coast Radio network.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center space-y-3 py-4">
            <Send className="w-8 h-8 text-accent mx-auto" />
            <p className="font-mono text-sm text-accent uppercase tracking-widest">
              Application Received
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              We'll reach out to schedule your onboarding.
            </p>
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
                Skills
              </legend>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => {
                  const active = skills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 border text-xs font-mono uppercase tracking-widest transition-colors ${
                        active
                          ? 'border-primary bg-primary/20 text-primary'
                          : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1 uppercase tracking-widest">
                Message / Pitch (optional)
              </label>
              <Textarea
                placeholder="TELL US ABOUT YOUR SHOW IDEA..."
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
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
