import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OpportunityTechPage = () => {
    return (
        <div className="min-h-screen bg-[#fdf6f9] text-[#2d1f2d] font-serif selection:bg-[#e8628a] selection:text-white pb-20 overflow-x-hidden">
            <Navbar />

            {/* ACCENT BAR */}
            <div className="h-1.5 bg-[linear-gradient(90deg,#e8628a,#b68fd0,#6b2d5b,#d4a0b9,#e8628a)] bg-[length:200%_100%] animate-[shimmer_4s_ease_infinite]" />

            <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

            {/* URGENCY BAR */}
            <div className="bg-[linear-gradient(135deg,#6b2d5b,#c4345a)] text-white text-center py-3 px-5 font-sans font-bold text-[13px] tracking-[2.5px] uppercase sticky top-0 z-50">
                <span className="bg-[linear-gradient(90deg,#ffd1e0,#fff,#ffd1e0)] bg-clip-text text-transparent">✦ Now Accepting Applications — Limited to 5 Account Leads Per Quarter ✦</span>
            </div>

            <div className="max-w-[720px] mx-auto px-6 pt-12">

                {/* DECORATION */}
                <div className="text-center text-[28px] mb-5 opacity-50 tracking-[12px] text-[#b68fd0]">✦ ✦ ✦</div>

                {/* PRE-HEADLINE */}
                <p className="font-mono text-[12px] tracking-[4px] uppercase text-[#e8628a] text-center mb-3.5">
                    For Ambitious Women Ready to Lead
                </p>

                {/* MAIN HEADLINE */}
                <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[50px] leading-[1.2] text-center text-[#6b2d5b] mb-4.5 italic">
                    Your Fastest Pathway to a<br />
                    <span className="relative inline-block z-10 px-1 after:content-[''] after:absolute after:bottom-0.5 after:left-[-4px] after:right-[-4px] after:h-3.5 after:bg-[linear-gradient(90deg,#e0d0f0,#fce4ec)] after:z-[-1] after:skew-x-[-2deg] after:opacity-70">$100,000 Career</span><br />
                    <span className="text-[#e8628a]">in the Tech Industry</span>
                </h1>

                {/* SUB-HEADLINE */}
                <p className="font-serif italic text-[21px] text-[#6b5070] text-center mb-11 max-w-[580px] mx-auto">
                    Become the face of a real engineering team — without writing a single line of code, managing developers, or building anything yourself. <em className="text-[#e8628a] not-italic">Finally, a seat at the table.</em>
                </p>

                <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                {/* OPENING COPY */}
                <div className="text-[19px] leading-[1.75] space-y-5">
                    <p>Dear Future Account Lead,</p>

                    <p>The tech industry has a problem — and it's not a talent shortage.</p>

                    <p>It's a <strong>representation</strong> problem. The people building the technology rarely look like the people buying it. And the industry is desperate for professionals who can bridge that gap.</p>

                    <p className="font-bold text-[20px] text-[#6b2d5b]">What if you could step into tech — not through a coding bootcamp, not through an entry-level grind — but as a leader from day one?</p>

                    <p>Not a "business opportunity." Not a course. Not some vague side hustle. A <strong>real position</strong> with a real engineering team, earning real project-based income, building a résumé that opens every door after it.</p>

                    <div className="text-center py-7.5 px-10 my-9 font-serif italic text-[24px] text-[#6b2d5b] relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[60px] before:h-0.5 before:bg-[linear-gradient(90deg,transparent,#e8628a,transparent)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-0.5 after:bg-[linear-gradient(90deg,transparent,#e8628a,transparent)]">
                        "The future of tech isn't just about who can write the code.<br />It's about who can lead the conversation."
                    </div>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* THE OPPORTUNITY */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        The Tech Industry Needs <span className="text-[#e8628a]">Your Voice</span>
                    </h2>

                    <p>Everyone says "learn to code." Spend $15K on a bootcamp. Build a portfolio. Apply to 500 jobs and compete with thousands of applicants.</p>

                    <p>Meanwhile, the people <em>actually</em> making money in tech? They're not all engineers. Half of them are the ones who know how to <strong>build relationships, earn trust, and lead client conversations.</strong></p>

                    <div className="bg-[linear-gradient(135deg,#fce4ec,#f3e8f4)] border-l-4 border-[#e8628a] p-5.5 my-7.5 text-[18px] rounded-r-xl">
                        <strong className="text-[#c4345a]">That's the gap we're filling.</strong> We have the engineering team. We have the delivery pipeline. We have the portfolio. What we need is <strong>you</strong> — on the front lines, representing the brand, speaking to decision-makers.
                    </div>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* WHAT THIS IS */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        What <span className="relative inline-block z-10 px-1 after:content-[''] after:absolute after:bottom-0 after:left-[-3px] after:right-[-3px] after:h-3 after:bg-[linear-gradient(90deg,rgba(230,180,220,0.4),rgba(182,143,208,0.4))] after:z-[-1] after:skew-x-[-1deg]">This Actually Is</span>
                    </h2>

                    <p>Ghost Coast Video is a production and engineering team that builds real software for real businesses:</p>

                    <ul className="list-none p-0 my-6">
                        {[
                            'AI tools and automation systems',
                            'SaaS platforms and dashboards',
                            'Mobile applications',
                            'E-commerce builds and integrations',
                            'Fintech and healthtech projects',
                            'Custom CRMs, internal tools, chatbots'
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-10 py-3 border-b border-[#b68fd0]/20 text-[18px] before:content-['◆'] before:absolute before:left-2 before:top-3.5 before:text-[10px] before:text-[#e8628a]">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p>We're looking for a small, curated group of <strong>Account Leads</strong> — professionals who serve as the client-facing front of the operation.</p>

                    <div className="bg-white border border-[#b68fd0]/50 rounded-2xl p-7.5 my-7.5 shadow-[0_4px_24px_rgba(107,45,91,0.06),0_0_0_1px_rgba(182,143,208,0.15)]">
                        <h3 className="font-serif text-[20px] text-[#6b2d5b] mb-3">Think of it this way:</h3>
                        <p className="mb-0">You're the trusted advisor clients meet and build a relationship with. Behind you stands an entire engineering team ready to deliver. You don't need to know how the code works — you need to know how <em>people</em> work.</p>
                    </div>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* YOUR ROLE */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        Your Role as an <span className="relative inline-block z-10 px-1 after:content-[''] after:absolute after:bottom-0 after:left-[-3px] after:right-[-3px] after:h-3 after:bg-[linear-gradient(90deg,rgba(230,180,220,0.4),rgba(182,143,208,0.4))] after:z-[-1] after:skew-x-[-1deg]">Account Lead</span>
                    </h2>

                    <ul className="list-none p-0 my-6">
                        {[
                            { strong: 'Show up to 3–4 interviews and meetings', text: 'per month — we schedule them for you' },
                            { strong: 'Interface with HR and hiring managers', text: 'as the professional face of the team' },
                            { strong: 'Represent the brand', text: 'in all client-facing conversations' },
                            { strong: 'Build your network', text: '— every engagement strengthens your professional brand' }
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-10 py-3 border-b border-[#b68fd0]/20 text-[18px] before:content-['◆'] before:absolute before:left-2 before:top-3.5 before:text-[10px] before:text-[#e8628a]">
                                <strong>{item.strong}</strong> {item.text}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-[linear-gradient(135deg,#fce4ec,#f3e8f4)] border-l-4 border-[#e8628a] p-5.5 my-7.5 text-[18px] rounded-r-xl">
                        <strong className="text-[#c4345a]">This is not a grind.</strong> Our team works aggressively behind the scenes to source and schedule your interviews. You're not cold-calling or doing outreach at midnight. We get you in the room — you just need to <em>show up and shine.</em>
                    </div>

                    <p>You handle the interview. You interface with HR. Our team handles <strong>everything else</strong> — the technical delivery, the project execution, the backend work. You're the face. We're the engine.</p>

                    <div className="text-center my-10 tracking-[16px] text-[#b68fd0] text-[14px]">◆ ◆ ◆</div>

                    {/* EMPOWERMENT BLOCK */}
                    <div className="text-center p-9 px-7 my-10 bg-[linear-gradient(135deg,#f8edf3,#ede0f5,#f8edf3)] rounded-[20px] border border-[#e0d0f0]">
                        <div className="text-[36px] mb-3.5 text-[#e8628a]">✦</div>
                        <h3 className="font-serif text-[24px] text-[#6b2d5b] mb-2.5">Lead. Don't Follow.</h3>
                        <p className="text-[17px] text-[#6b5070] max-w-[500px] mx-auto mb-0">This isn't an entry-level position. You're not fetching coffee or sitting in on meetings. You <em>are</em> the meeting. You're the professional that clients trust with their biggest decisions.</p>
                    </div>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* THE NUMBERS */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        Let's Talk <span className="relative inline-block z-10 px-1 after:content-[''] after:absolute after:bottom-0 after:left-[-3px] after:right-[-3px] after:h-3 after:bg-[linear-gradient(90deg,rgba(230,180,220,0.4),rgba(182,143,208,0.4))] after:z-[-1] after:skew-x-[-1deg]">Real Numbers</span>
                    </h2>

                    <p>We're not going to promise overnight riches. That's not what this is — and honestly, if someone promises you that, run. Here's what the compensation actually looks like:</p>

                    <div className="bg-white border border-[#b68fd0]/50 rounded-2xl p-7.5 my-7.5 shadow-[0_4px_24px_rgba(107,45,91,0.06),0_0_0_1px_rgba(182,143,208,0.15)]">
                        <h3 className="font-serif text-[20px] text-[#6b2d5b] mb-3">Your Compensation</h3>
                        <p className="mb-2"><strong className="text-[#e8628a]">$150/month base retainer</strong> — paid monthly, regardless of project volume.</p>
                        <p className="mb-0"><strong className="text-[#e8628a]">10% commission</strong> on every gig over $1,000 — and these projects regularly land in the $5K–$50K+ range.</p>
                    </div>

                    <p>Will you get wealthy overnight? <strong>No.</strong> But here's what most people miss — the money isn't even the most valuable part.</p>

                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        The <span className="text-[#e8628a]">Real</span> Payoff
                    </h2>

                    <div className="text-center p-9 px-7 my-10 bg-[linear-gradient(135deg,#f8edf3,#ede0f5,#f8edf3)] rounded-[20px] border border-[#e0d0f0]">
                        <div className="text-[36px] mb-3.5 text-[#e8628a]">✦</div>
                        <h3 className="font-serif text-[24px] text-[#6b2d5b] mb-2.5">A Portfolio That Opens Every Door</h3>
                        <p className="text-[17px] text-[#6b5070] max-w-[500px] mx-auto mb-0">Every project you lead becomes a line item on your résumé. Every client relationship becomes a reference. Every engagement proves you belong in this industry.</p>
                    </div>

                    <p>Think about what happens when you apply for your dream tech role with <em>actual delivered projects</em> on your résumé. You're not "trying to break in" anymore. You have a <strong>track record.</strong></p>

                    <div className="bg-[linear-gradient(135deg,#fce4ec,#f3e8f4)] border-l-4 border-[#e8628a] p-5.5 my-7.5 text-[18px] rounded-r-xl">
                        <strong className="text-[#c4345a]">This is what happens:</strong> Your job applications start getting returned. Recruiters reach out to <em>you</em>. You're building the career you want — and getting paid while you train for the exact role you're after.
                    </div>

                    <p>The $150/month and the commissions? That's your income floor while you build. The portfolio, the network, the résumé? <strong>That's the asset that pays you for years.</strong></p>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* VS ALTERNATIVES */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        Compare That to the <span className="text-[#e8628a]">Alternatives</span>
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <p className="text-[#6b5070] opacity-70 italic mb-1.5">"I'll go to a coding bootcamp for $15K and hope someone hires me in 6 months..."</p>
                            <p className="font-bold text-[#6b2d5b] mb-6.5">Or you could be building a real portfolio this month — and getting paid while you do it.</p>
                        </div>

                        <div>
                            <p className="text-[#6b5070] opacity-70 italic mb-1.5">"I'll apply to 200 tech jobs and compete with thousands..."</p>
                            <p className="font-bold text-[#6b2d5b] mb-6.5">Or you could have actual delivered projects on your résumé when you apply.</p>
                        </div>

                        <div>
                            <p className="text-[#6b5070] opacity-70 italic mb-1.5">"I'll start my own agency and figure out hiring, delivery, operations..."</p>
                            <p className="font-bold text-[#6b2d5b] mb-6.5">Or you could plug into a team that already has all of that running.</p>
                        </div>
                    </div>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* WHAT YOU WALK AWAY WITH */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        Beyond the Income — <span className="relative inline-block z-10 px-1 after:content-[''] after:absolute after:bottom-0 after:left-[-3px] after:right-[-3px] after:h-3 after:bg-[linear-gradient(90deg,rgba(230,180,220,0.4),rgba(182,143,208,0.4))] after:z-[-1] after:skew-x-[-1deg]">What You Build</span>
                    </h2>

                    <ul className="list-none p-0 my-6">
                        {[
                            { strong: 'A tech industry résumé', text: '— "Account Lead at a software engineering firm" changes your entire career trajectory' },
                            { strong: 'Executive-level conversations', text: '— You\'ll be speaking with CEOs, founders, and department heads' },
                            { strong: 'Industry credibility', text: '— Backed by a team that ships production software' },
                            { strong: 'Complete flexibility', text: '— Remote, async, fits around your life, your schedule, your terms' },
                            { strong: 'No ceiling', text: '— The more doors you open, the more you earn. No salary cap. No waiting for permission.' }
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-10 py-3 border-b border-[#b68fd0]/20 text-[18px] before:content-['◆'] before:absolute before:left-2 before:top-3.5 before:text-[10px] before:text-[#e8628a]">
                                <strong>{item.strong}</strong> {item.text}
                            </li>
                        ))}
                    </ul>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* WHO THIS IS FOR */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        This Role Was <span className="text-[#e8628a]">Made For You</span> If You're...
                    </h2>

                    <ul className="list-none p-0 my-6">
                        {[
                            'A natural connector who builds relationships effortlessly',
                            'Someone who\'s been told "you should be in sales" but wanted something more meaningful',
                            'A professional looking to pivot into tech without starting over',
                            'A consultant, coach, or advisor who already speaks to business owners daily',
                            'An agency owner who wants to add tech services without building a dev team',
                            'Anyone with a network and the confidence to pick up the phone'
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-10 py-3 border-b border-[#b68fd0]/20 text-[18px] before:content-['◆'] before:absolute before:left-2 before:top-3.5 before:text-[10px] before:text-[#e8628a]">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* HOW IT WORKS */}
                    <h2 className="font-serif font-normal text-[27px] text-[#6b2d5b] mb-4.5 leading-[1.35]">
                        Three Steps to <span className="relative inline-block z-10 px-1 after:content-[''] after:absolute after:bottom-0 after:left-[-3px] after:right-[-3px] after:h-3 after:bg-[linear-gradient(90deg,rgba(230,180,220,0.4),rgba(182,143,208,0.4))] after:z-[-1] after:skew-x-[-1deg]">Get Started</span>
                    </h2>

                    <div className="space-y-7">
                        <div className="flex gap-5 items-start">
                            <div className="shrink-0 w-11 h-11 rounded-full bg-[linear-gradient(135deg,#e0d0f0,#fce4ec)] flex items-center justify-center font-serif text-[20px] text-[#6b2d5b] border-2 border-[#b68fd0]">
                                1
                            </div>
                            <div className="pt-1">
                                <h4 className="font-sans font-bold text-[17px] text-[#6b2d5b] mb-1">Apply Below</h4>
                                <p className="text-[17px] text-[#6b5070] mb-0">Tell us about yourself, your background, and the kind of clients in your network.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start">
                            <div className="shrink-0 w-11 h-11 rounded-full bg-[linear-gradient(135deg,#e0d0f0,#fce4ec)] flex items-center justify-center font-serif text-[20px] text-[#6b2d5b] border-2 border-[#b68fd0]">
                                2
                            </div>
                            <div className="pt-1">
                                <h4 className="font-sans font-bold text-[17px] text-[#6b2d5b] mb-1">Intro Conversation</h4>
                                <p className="text-[17px] text-[#6b5070] mb-0">We'll connect on a short call to see if it's a mutual fit. No pressure — just a real conversation.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start">
                            <div className="shrink-0 w-11 h-11 rounded-full bg-[linear-gradient(135deg,#e0d0f0,#fce4ec)] flex items-center justify-center font-serif text-[20px] text-[#6b2d5b] border-2 border-[#b68fd0]">
                                3
                            </div>
                            <div className="pt-1">
                                <h4 className="font-sans font-bold text-[17px] text-[#6b2d5b] mb-1">Start Leading</h4>
                                <p className="text-[17px] text-[#6b5070] mb-0">We'll equip you with positioning, talking points, and project examples. Then you start reaching out.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-8 my-10 border-2 border-[#b68fd0] rounded-2xl bg-white/60">
                        <h3 className="font-serif text-[22px] text-[#6b2d5b] mb-2.5">No Cost. No Risk. No Catch.</h3>
                        <p className="text-[#6b5070] text-[16px] mb-0">There's nothing to buy. No fee. No inventory. You're applying for a<br />
                            <strong>partnership position</strong> with a real engineering team.</p>
                    </div>

                    <hr className="border-none h-0.5 bg-[linear-gradient(90deg,transparent,#d4a0b9,#b68fd0,#d4a0b9,transparent)] my-11 max-w-[300px] mx-auto" />

                    {/* CTA */}
                    <div className="bg-[linear-gradient(135deg,#6b2d5b,#3d1a35)] text-white p-13 md:px-10 text-center my-12 rounded-[20px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,98,138,0.15),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(182,143,208,0.15),transparent_60%)] before:pointer-events-none">
                        <h2 className="font-serif font-normal text-[30px] mb-4 text-white relative">Ready to Step Into Tech — On Your Terms?</h2>
                        <p className="text-white/80 text-[17px] mb-7 relative">We're accepting only <strong>5 Account Leads</strong> this quarter.<br />If this page is still live, there's still a spot for you.</p>
                        <a href="https://tally.so/r/nrlly7" className="inline-block bg-[linear-gradient(135deg,#e8628a,#c4345a)] text-white font-sans font-bold text-[16px] uppercase tracking-[3px] px-13 py-4.5 rounded-[50px] transition-all relative shadow-[0_4px_20px_rgba(232,98,138,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,98,138,0.45)] no-underline">
                            Apply Now ✦
                        </a>
                    </div>

                    {/* PS */}
                    <div className="mt-10 text-[17px] text-[#6b5070] space-y-5">
                        <p><strong>P.S.</strong> — You don't need a tech background. You don't need a CS degree. You don't need to know what an API is. You need to be someone who can have a professional conversation, identify an opportunity, and follow through. We handle <em>everything</em> else.</p>

                        <p><strong>P.P.S.</strong> — Think about where you'll be in 12 months. Still scrolling job boards? Still "considering" a career change? Or leading real client conversations, earning project-based income, and building a résumé that speaks for itself. You already know which one you want.</p>
                    </div>

                    <div className="text-center p-[30px] font-mono text-[12px] text-[#6b5070] border-t border-[#e0d0f0] mt-[60px]">
                        Ghost Coast Video &copy; 2026 — All Rights Reserved<br />
                        This is an application for a partnership position, not a job offer or guarantee of income.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OpportunityTechPage;
