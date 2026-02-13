export interface ShowConfig {
    title: string;
    slug: string;
    tagline: string;
    description: string;
    feedUrl: string;
    coverImage?: string;
    hosts: string[];
    sections: {
        episodes: boolean;
        pressKit: boolean;
        guestBooking: boolean;
        voicenote: boolean;
        subscribe: boolean;
        heroSubscribe: boolean;
        reviews: boolean;
        merch: boolean;
        youtubeChannel: boolean;
    };
    youtubeChannelId?: string;
    pressKit: {
        premise: string;
        format: string;
        recordingMethod: string;
        discordInvite: string;
        guestExpectations: string[];
    };
    links: {
        apple?: string;
        spotify?: string;
        youtube?: string;
        storeUrl?: string;
        guestFormUrl?: string;
        bookingUrl?: string;
    };
    theme?: {
        primary?: string; // HSL triplet: "340 78% 51%"
        secondary?: string;
        accent?: string;
        muted?: string;
        border?: string;
    };
}

export const shows: ShowConfig[] = [
    {
        title: "The Most Important Election of Our Lives",
        slug: "election",
        tagline: "Policy. Culture. Personal Economy.",
        description: "let's fucking vooooote! get in the booth for a fun hour of pop culture and political history!",
        feedUrl: "https://feeds.castos.com/5owq0",
        hosts: ["Brandyn", "Kennedy"],
        sections: {
            episodes: true,
            pressKit: true,
            guestBooking: true,
            voicenote: true,
            subscribe: true,
            heroSubscribe: false,
            reviews: true,
            merch: false,
            youtubeChannel: false,
        },
        pressKit: {
            premise: "A no-nonsense political analysis show that cuts through the noise and connects policy decisions to the personal economies of independent creatives. We don't do talking points — we do real talk about how governance impacts your ability to build, earn, and create freely.",
            format: "45–60 min panel discussion / interview format",
            recordingMethod: "Discord — The Cholla A/V Club",
            discordInvite: "https://discord.gg/cholla-av-club",
            guestExpectations: [
                "Have a clear perspective on a political or cultural topic",
                "Be comfortable speaking candidly for 45–60 minutes",
                "Join our Discord server (The Cholla A/V Club) at least 24 hours before recording",
                "Use a decent microphone — no laptop mics or AirPods",
                "Be on time. We record live and don't wait",
                "Keep it real. Scripted talking points get cut",
            ],
        },
        links: {
            apple: "#",
            spotify: "#",
        },
        theme: {
            primary: "12 85% 50%", // Election Red
            accent: "45 100% 50%",  // Election Gold
            muted: "12 30% 15%",   // Dark Red-Grey
            border: "12 40% 25%",  // Muted Red
        },
    },
    {
        title: "Monday Night Fake Fights",
        slug: "monday-fights",
        tagline: "Pro Wrestling. Brand Strategy. Storytelling.",
        description: "it's wednesday - you know what that means. listen to a chaotic and queer focused look at pro wrestling",
        feedUrl: "https://feeds.castos.com/63xd0",
        hosts: ["Brandyn"],
        sections: {
            episodes: true,
            pressKit: true,
            guestBooking: true,
            voicenote: true,
            subscribe: true,
            heroSubscribe: false,
            reviews: true,
            merch: true,
            youtubeChannel: false,
        },
        pressKit: {
            premise: "The intersection of professional wrestling and personal branding. We treat the squared circle like a masterclass in storytelling, audience-building, and creative entrepreneurship. If you can cut a promo, you can sell anything.",
            format: "60 min deep-dive discussion",
            recordingMethod: "Discord — The Cholla A/V Club",
            discordInvite: "https://discord.gg/cholla-av-club",
            guestExpectations: [
                "Know your wrestling — casual fans are welcome but be ready to go deep",
                "Have a take. We love hot takes, controversial opinions, and hill-you'll-die-on moments",
                "Join our Discord server (The Cholla A/V Club) for recording",
                "Use a quality microphone — headset or dedicated mic preferred",
                "Energy is everything. Bring the promo energy",
                "Recording happens Monday evenings — be available and on time",
            ],
        },
        links: {
            apple: "#",
            spotify: "#",
            storeUrl: "#",
        },
        theme: {
            primary: "280 65% 50%", // Wrestling Purple
            accent: "340 85% 60%",  // Wrestling Pink
            muted: "280 30% 15%",  // Dark Purple
            border: "280 40% 25%", // Muted Purple
        },
    },
    {
        title: "Alkebulan Radio",
        slug: "alkebulan",
        tagline: "Sounds & Stories of the Diaspora.",
        description: "a motivational and inspirational show, looking at the carribean disapora through a holistic and exciting lens",
        feedUrl: "https://feeds.castos.com/k9rw2",
        hosts: ["Kennedy"],
        sections: {
            episodes: true,
            pressKit: true,
            guestBooking: true,
            voicenote: true,
            subscribe: true,
            heroSubscribe: false,
            reviews: true,
            merch: false,
            youtubeChannel: false,
        },
        pressKit: {
            premise: "A sonic journey through the African diaspora — connecting music, culture, history, and the creative entrepreneurial spirit. We spotlight artists, thinkers, and builders who are shaping culture from the ground up.",
            format: "45–75 min interview / conversation format",
            recordingMethod: "Discord — The Cholla A/V Club",
            discordInvite: "https://discord.gg/cholla-av-club",
            guestExpectations: [
                "Have a story to tell about your creative journey or cultural perspective",
                "Be passionate about music, art, or culture within the African diaspora",
                "Join our Discord server (The Cholla A/V Club) for recording",
                "Use a decent microphone in a quiet space",
                "Be yourself — authenticity is the only requirement",
                "Share any music, links, or media you'd like featured in the episode",
            ],
        },
        links: {
            apple: "#",
            spotify: "#",
        },
        theme: {
            primary: "140 60% 45%", // Alkebulan Green
            accent: "35 90% 55%",   // Alkebulan Earth
            muted: "140 30% 12%",  // Dark Green
            border: "140 30% 20%", // Muted Green
        },
    },
];

export function getShowBySlug(slug: string): ShowConfig | undefined {
    return shows.find((s) => s.slug === slug);
}
