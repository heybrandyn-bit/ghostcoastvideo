import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OpportunityPage = () => {
    return (
        <div className="min-h-screen bg-[#fdfdf8] text-[#1a1a1a] font-serif selection:bg-[#cc0000] selection:text-white">
            <Navbar />

            {/* URGENCY BAR */}
            <div className="bg-[#cc0000] text-white text-center py-2.5 px-5 font-sans font-bold text-[13px] tracking-[2px] uppercase sticky top-0 z-50">
                ⚡ NOW ACCEPTING APPLICATIONS — LIMITED TO 5 ACCOUNT LEADS PER QUARTER ⚡
            </div>

            <div className="max-w-[720px] mx-auto px-6 pt-10 pb-20">

                {/* PRE-HEADLINE */}
                <p className="font-mono text-[13px] tracking-[3px] uppercase text-[#cc0000] text-center mb-3">
                    Attention: Ambitious Professionals Who Want Into Tech
                </p>

                {/* MAIN HEADLINE */}
                <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-center text-[#1a1a1a] mb-4">
                    Your Fastest Pathway to a<br />
                    <span className="text-[#cc0000] underline decoration-3 underline-offset-4 font-black">$100,000 Career</span><br />
                    in the Tech Industry
                </h1>

                {/* SUB-HEADLINE */}
                <p className="font-serif italic text-[22px] text-[#555] text-center mb-10 max-w-[600px] mx-auto">
                    Become the face of a real engineering team — without writing a single line of code, managing developers, or building anything yourself.
                </p>

                <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                {/* OPENING COPY */}
                <div className="text-[19px] leading-[1.75] space-y-5">
                    <p>Dear Future Account Lead,</p>

                    <p>What if you could walk into any room — any boardroom, any networking event, any LinkedIn DM — and introduce yourself as the front person for a <strong>real, producing tech team</strong>?</p>

                    <p>Not a "business opportunity." Not a course. Not some vague partnership where you're left figuring everything out on your own.</p>

                    <p className="font-bold text-[20px]">A real role. Real projects. Real income. Real résumé.</p>

                    <p>That's exactly what we're offering here — and if you're the right fit, this single page could change the trajectory of your entire career.</p>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: THE PROBLEM */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        Here's the Problem With <span className="text-[#cc0000]">"Breaking Into Tech"</span>
                    </h2>

                    <p>Everyone says "learn to code." Go get a bootcamp certificate. Build a portfolio. Apply to 500 jobs and pray.</p>

                    <p>Meanwhile, the people actually making money in tech? <strong>They're not all coders.</strong> Half of them are the ones who know how to talk to clients, close deals, and manage relationships.</p>

                    <p>The industry doesn't have a shortage of developers. It has a shortage of people who can <em>sell the work, manage the client, and show up as a professional.</em></p>

                    <div className="bg-[#fff8dc] border-l-4 border-[#cc0000] p-6 my-8 text-[18px]">
                        <strong className="text-[#cc0000]">That's the gap we're filling.</strong> We have the engineering. We have the delivery pipeline. We have the portfolio. What we need is <strong>you</strong> — on the front lines, talking to decision-makers, opening doors.
                    </div>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: WHAT THIS IS */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        What <span className="bg-[#fff3a0] px-1.5 whitespace-nowrap">This Actually Is</span>
                    </h2>

                    <p>Ghost Coast Video is a production and engineering team that builds real software for real businesses:</p>

                    <ul className="list-none p-0 my-6 space-y-0">
                        {[
                            'AI tools and automation systems',
                            'SaaS platforms and dashboards',
                            'Mobile applications',
                            'E-commerce builds and integrations',
                            'Fintech and healthtech projects',
                            'Custom CRMs, internal tools, chatbots'
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-9 py-2.5 border-b border-[#eee] text-[18px] before:content-['✓'] before:absolute before:left-1 before:top-2.5 before:text-[#cc0000] before:font-bold before:text-[20px]">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p>We're looking for a small, curated group of <strong>Account Leads</strong> — professionals who serve as the client-facing front of the operation.</p>

                    <p>You don't manage developers. You don't run sprints. You don't debug code at 2 AM.</p>

                    <p className="font-bold text-[20px]">You open doors. We deliver the product. Everyone gets paid.</p>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: YOUR ROLE */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        Your Role as an <span className="bg-[#fff3a0] px-1.5 whitespace-nowrap">Account Lead</span>
                    </h2>

                    <p>This is what your day-to-day looks like:</p>

                    <ul className="list-none p-0 my-6 space-y-0">
                        {[
                            'Show up to 3–4 interviews and client meetings per month',
                            'Interface with HR departments and hiring managers',
                            'Represent the team professionally in all client-facing conversations',
                            'Build your professional network and résumé with every engagement'
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-9 py-2.5 border-b border-[#eee] text-[18px] before:content-['✓'] before:absolute before:left-1 before:top-2.5 before:text-[#cc0000] before:font-bold before:text-[20px]">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-[#fff8dc] border-l-4 border-[#cc0000] p-6 my-8 text-[18px]">
                        <strong className="text-[#cc0000]">Here's the thing — this isn't a grind.</strong> Our team works aggressively behind the scenes to source and schedule your interviews. You're not cold-calling. You're not prospecting. You're not doing outreach at midnight. We get you in the room — you just need to <em>show up and perform.</em>
                    </div>

                    <p>You handle the interview. You interface with HR. Our team handles <strong>everything else</strong> — the technical delivery, the project execution, the backend work. You're the face. We're the engine.</p>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: THE NUMBERS */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        Let's Talk <span className="bg-[#fff3a0] px-1.5 whitespace-nowrap">Real Numbers</span>
                    </h2>

                    <p>We're not going to promise you'll be rich next month. That's not what this is. Here's what the compensation actually looks like:</p>

                    <div className="bg-[#fff8dc] border-l-4 border-[#cc0000] p-6 my-8 text-[18px]">
                        <strong className="text-[#cc0000]">$150/month base retainer</strong> — paid monthly, regardless of project volume.<br /><br />
                        <strong className="text-[#cc0000]">10% commission</strong> on every gig over $1,000 — and these projects regularly land in the $5K–$50K+ range.
                    </div>

                    <p>Will you get wealthy overnight? <strong>No.</strong> And anyone who tells you otherwise is lying.</p>

                    <p>But here's what you <em>will</em> get — and this is the part most people miss:</p>

                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        The <span className="text-[#cc0000]">Real</span> Payoff
                    </h2>

                    <p className="font-bold text-[20px]">A portfolio of actually successful, delivered tech projects — with your name on them.</p>

                    <p>Think about what that means for your career. Every project you lead becomes a line item on your résumé. Every client relationship becomes a reference. Every engagement proves you can operate at a professional level in the tech industry.</p>

                    <div className="bg-[#fff8dc] border-l-4 border-[#cc0000] p-6 my-8 text-[18px]">
                        <strong className="text-[#cc0000]">This is what happens:</strong> Your job applications start getting returned. Recruiters start reaching out. You're no longer "trying to break into tech" — you're someone with a <em>track record</em> of leading real engagements while you train for the exact role you want.
                    </div>

                    <p>The $150/month and the 10% commissions? That's your income floor while you build. The portfolio, the network, the résumé? <strong>That's the asset that pays you for years.</strong></p>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: VS THE ALTERNATIVES */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        Compare That to the <span className="text-[#cc0000]">Alternatives</span>
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <p className="text-[#888] italic mb-1.5">"I'll go to a coding bootcamp for $15K and hope someone hires me in 6 months..."</p>
                            <p className="font-bold mb-6">Or you could be building a real portfolio <em>this month</em> — and getting paid while you do it.</p>
                        </div>

                        <div>
                            <p className="text-[#888] italic mb-1.5">"I'll apply to 200 tech jobs and compete with 10,000 other applicants..."</p>
                            <p className="font-bold mb-6">Or you could have actual delivered projects on your résumé when you apply.</p>
                        </div>

                        <div>
                            <p className="text-[#888] italic mb-1.5">"I'll start my own agency and figure out hiring, delivery, ops..."</p>
                            <p className="font-bold mb-6">Or you could plug into a team that already has all of that running and focus on what you're good at.</p>
                        </div>
                    </div>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: WHAT YOU GET */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        Here's What You Walk Away With — <span className="bg-[#fff3a0] px-1.5 whitespace-nowrap">Even Beyond the Money</span>
                    </h2>

                    <ul className="list-none p-0 my-6 space-y-0">
                        {[
                            { label: 'A real tech résumé', text: '"Account Lead at a software engineering firm" looks different than anything else you could put on LinkedIn' },
                            { label: 'Access to top decision-makers', text: 'You\'ll be speaking with CEOs, founders, and department heads' },
                            { label: 'Industry credibility', text: 'Backed by a team that actually ships production software' },
                            { label: 'Flexibility', text: 'Remote, async, work from anywhere. Fit this around your existing career or build it into your main thing' },
                            { label: 'No ceiling', text: 'The more doors you open, the more you earn. No salary cap. No waiting for a promotion.' }
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-9 py-2.5 border-b border-[#eee] text-[18px] before:content-['✓'] before:absolute before:left-1 before:top-2.5 before:text-[#cc0000] before:font-bold before:text-[20px]">
                                <strong>{item.label}</strong> — {item.text}
                            </li>
                        ))}
                    </ul>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: WHO THIS IS FOR */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        Who This Is <span className="text-[#cc0000]">Perfect</span> For
                    </h2>

                    <ul className="list-none p-0 my-6 space-y-0">
                        {[
                            'Salespeople who want to sell something with real substance',
                            'Account managers looking for a higher-earning model',
                            'Consultants who already talk to business owners daily',
                            'Agency owners who want to add tech services without building a dev team',
                            'Freelancers with existing client relationships',
                            'Career changers who want into tech without learning to code',
                            'Anyone with a network of business owners and the confidence to pick up the phone'
                        ].map((item, idx) => (
                            <li key={idx} className="relative pl-9 py-2.5 border-b border-[#eee] text-[18px] before:content-['✓'] before:absolute before:left-1 before:top-2.5 before:text-[#cc0000] before:font-bold before:text-[20px]">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* SECTION: HOW IT WORKS */}
                    <h2 className="font-sans font-black text-[26px] text-[#1a1a1a] mb-4 leading-[1.3]">
                        How It Works — <span className="bg-[#fff3a0] px-1.5 whitespace-nowrap">3 Steps</span>
                    </h2>

                    <p><strong>Step 1: Apply Below</strong><br />
                        Tell us about yourself, your background, and what kind of clients you have access to.</p>

                    <p><strong>Step 2: Intro Call</strong><br />
                        We'll hop on a short call to see if it's a mutual fit. No pressure, no pitch — just a real conversation.</p>

                    <p><strong>Step 3: Start Opening Doors</strong><br />
                        Once you're in, we'll equip you with everything you need — positioning, talking points, project examples — and you start reaching out to your network.</p>

                    <div className="text-center p-8 my-10 border-2 border-dashed border-[#cc0000]">
                        <h3 className="font-sans font-black text-[20px] text-[#cc0000] mb-2.5 uppercase">NO RISK. NO COST. NO CATCH.</h3>
                        <p className="text-[19px]">There's no buy-in. No fee. No inventory. You're not purchasing anything.<br />
                            You're applying for a <strong>partnership position</strong> with a real engineering team.</p>
                    </div>

                    <hr className="border-t-2 border-dashed border-[#ccc] my-10 max-w-[200px] mx-auto" />

                    {/* CTA */}
                    <div className="bg-[#1a1a1a] text-[#fdfdf8] p-12 text-center my-12 border-3 border-[#cc0000]">
                        <h2 className="font-sans font-black text-[28px] mb-4 text-white">Ready to Get Into Tech the Smart Way?</h2>
                        <p className="text-[#ccc] text-[17px] mb-6">We're only accepting <strong>5 Account Leads</strong> this quarter.<br />If this page is still live, there's still a spot.</p>
                        <a href="https://tally.so/r/nrlly7" className="inline-block bg-[#cc0000] hover:bg-[#a00] text-white font-sans font-black text-[18px] uppercase tracking-[2px] px-12 py-4.5 transition-colors no-underline">
                            Apply Now →
                        </a>
                    </div>

                    {/* PS SECTION */}
                    <div className="mt-10 text-[17px] text-[#555] space-y-5">
                        <p><strong>P.S.</strong> — You don't need a tech background. You don't need a degree. You don't need to know what an API is. You need to be someone who can have a professional conversation, identify an opportunity, and follow through. We handle <em>everything</em> else.</p>

                        <p><strong>P.P.S.</strong> — Think about where you'll be in 12 months. Still scrolling job boards? Still "thinking about" getting into tech? Or actually doing it — with real projects, real clients, and real income on your résumé. The choice is yours.</p>
                    </div>

                    <div className="text-center p-[30px] font-mono text-[12px] text-[#999] border-t border-[#eee] mt-[60px]">
                        Ghost Coast Video &copy; 2026 — All Rights Reserved<br />
                        This is an application for a partnership position, not a job offer or guarantee of income.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OpportunityPage;
