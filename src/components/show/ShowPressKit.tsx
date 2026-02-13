import { ShowConfig } from '../../data/showData';
import { FileText, Download, Mic2, Clock, Users, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

interface ShowPressKitProps {
    show: ShowConfig;
}

export default function ShowPressKit({ show }: ShowPressKitProps) {
    const printRef = useRef<HTMLDivElement>(null);

    const handleDownload = () => {
        // Open a print-friendly view in a new window
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${show.title} — Press Kit</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;700;900&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; background: #1A1A1A; color: #F3F3E9; padding: 3rem; }
          .header { border-bottom: 3px solid #D32F2F; padding-bottom: 2rem; margin-bottom: 2rem; }
          .badge { display: inline-block; background: rgba(211,47,47,0.15); border: 1px solid #D32F2F; padding: 0.3rem 1rem; font-family: 'Space Mono', monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.2em; color: #D32F2F; margin-bottom: 1rem; }
          h1 { font-size: 2.5rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.03em; line-height: 1; margin-bottom: 0.75rem; }
          .tagline { font-family: 'Space Mono', monospace; font-size: 0.85rem; color: #FFC800; text-transform: uppercase; letter-spacing: 0.15em; }
          .section { margin-bottom: 2rem; }
          .section-title { font-family: 'Space Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.3em; color: #D32F2F; border-bottom: 1px solid #333; padding-bottom: 0.5rem; margin-bottom: 1rem; }
          .premise { font-size: 1rem; line-height: 1.7; color: #ccc; max-width: 600px; }
          .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          .detail-item { border: 1px solid #333; padding: 1rem; }
          .detail-label { font-family: 'Space Mono', monospace; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.2em; color: #888; margin-bottom: 0.3rem; }
          .detail-value { font-weight: 700; font-size: 0.95rem; }
          .expectations li { font-family: 'Space Mono', monospace; font-size: 0.75rem; line-height: 1.8; color: #ccc; padding-left: 1rem; position: relative; }
          .expectations li::before { content: '▸'; position: absolute; left: 0; color: #FFC800; }
          .footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #333; font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #555; text-transform: uppercase; letter-spacing: 0.2em; }
          .discord-cta { background: #5865F2; color: white; padding: 0.75rem 1.5rem; display: inline-block; font-family: 'Space Mono', monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; text-decoration: none; margin-top: 0.5rem; }
          @media print { body { background: white; color: #111; } .badge { border-color: #D32F2F; } .detail-item { border-color: #ddd; } .section-title { color: #D32F2F; border-color: #ddd; } .premise, .expectations li { color: #333; } .footer { color: #999; border-color: #ddd; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="badge">Press Kit — ${new Date().getFullYear()}</div>
          <h1>${show.title}</h1>
          <div class="tagline">${show.tagline}</div>
        </div>

        <div class="section">
          <div class="section-title">Premise</div>
          <p class="premise">${show.pressKit.premise}</p>
        </div>

        <div class="section">
          <div class="section-title">Show Details</div>
          <div class="detail-grid">
            <div class="detail-item">
              <div class="detail-label">Format</div>
              <div class="detail-value">${show.pressKit.format}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Recording Method</div>
              <div class="detail-value">${show.pressKit.recordingMethod}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Hosted By</div>
              <div class="detail-value">${show.hosts.join(', ')}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Network</div>
              <div class="detail-value">Ghost Coast Radio</div>
            </div>
          </div>
        </div>

        ${show.pressKit.guestExpectations.length > 0 ? `
        <div class="section">
          <div class="section-title">Guest Expectations</div>
          <ul class="expectations">
            ${show.pressKit.guestExpectations.map(exp => `<li>${exp}</li>`).join('')}
          </ul>
        </div>
        ` : ''}

        <div class="section">
          <div class="section-title">How to Record</div>
          <p class="premise">Join our Discord server — <strong>The Cholla A/V Club</strong> — for all recording sessions. We use Discord's voice channels for live, high-quality recording.</p>
          <a href="${show.pressKit.discordInvite}" class="discord-cta">Join The Cholla A/V Club →</a>
        </div>

        <div class="footer">
          Ghost Coast Video — ${show.title} Press Kit — ${new Date().toLocaleDateString()}
        </div>
      </body>
      </html>
    `);
        printWindow.document.close();
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <FileText className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Press Kit</h2>
                    <div className="flex-1 h-px bg-border"></div>
                </div>

                <div ref={printRef} className="grid md:grid-cols-2 gap-12">
                    {/* Left: Premise and Details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">Show Premise</h3>
                            <p className="text-muted-foreground leading-relaxed text-base">{show.pressKit.premise}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-card border border-border p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="w-3.5 h-3.5 text-primary" />
                                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Format</span>
                                </div>
                                <p className="text-sm font-bold text-foreground">{show.pressKit.format}</p>
                            </div>

                            <div className="bg-card border border-border p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Mic2 className="w-3.5 h-3.5 text-primary" />
                                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Recording</span>
                                </div>
                                <p className="text-sm font-bold text-foreground">{show.pressKit.recordingMethod}</p>
                            </div>

                            <div className="bg-card border border-border p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-3.5 h-3.5 text-primary" />
                                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Hosts</span>
                                </div>
                                <p className="text-sm font-bold text-foreground">{show.hosts.join(', ')}</p>
                            </div>

                            <div className="bg-card border border-border p-4">
                                <a
                                    href={show.pressKit.discordInvite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Studio</span>
                                    </div>
                                    <p className="text-sm font-bold text-[#5865F2] hover:text-[#7289DA] transition-colors">The Cholla A/V Club ↗</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Guest Expectations + Download CTA */}
                    <div className="space-y-8">
                        {show.pressKit.guestExpectations.length > 0 && (
                            <div>
                                <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">Guest Expectations</h3>
                                <ul className="space-y-3">
                                    {show.pressKit.guestExpectations.map((exp, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground font-mono text-sm leading-relaxed">{exp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="bg-card border border-primary/30 p-6 space-y-4">
                            <div className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">Download for Distribution</div>
                            <p className="text-sm text-muted-foreground">
                                Get the complete press kit as a printable one-pager. Share with potential guests so they know exactly what to expect.
                            </p>
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer font-bold"
                            >
                                <Download className="w-4 h-4" />
                                View & Print Press Kit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
