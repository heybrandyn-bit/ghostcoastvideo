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
        tagline: "Vote. Vote. VOOOOOTE.",
        description: "let's fucking vooooote! get in the booth for a fun hour of pop culture and political history!",
        feedUrl: "https://feeds.castos.com/5owq0",
        hosts: ["Brandyn", "Kennedy", "Andrew"],
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
            premise: "We talk to people who have any fandom or culture interest. Then we pair their fandom interest with some obscure or interesting piece of political history. There are games, comparisons, trivia and it's almost always funny.",
            format: "45–60 min panel discussion / interview format",
            recordingMethod: "Discord — The Cholla A/V Club",
            discordInvite: "https://discord.gg/cholla-av-club",
            guestExpectations: [
                "Have a niche fandom you're excited to talk about.",
                "Be comfortable speaking candidly for 45–60 minutes",
                "Join our Discord server (The Cholla A/V Club) at least 24 hours before recording",
                "Use a decent microphone — no laptop mics or AirPods",
                "Be on time. We record live and don't like to wait",
                "You're allowed to swear!",
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
        title: "Wednesday Night Fake Fights",
        slug: "wednesday-fights",
        tagline: "Pro Wrestling.",
        description: "it's wednesday - you know what that means. listen to a chaotic and queer focused look at pro wrestling",
        feedUrl: "https://feeds.castos.com/63xd0",
        hosts: ["Ella"],
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
                "Energy is everything. Bring the energy!",
                "Be available and on time",
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
            premise: "A sonic journey through the Carribean diaspora — connecting music, culture, history, and the creative entrepreneurial spirit. We spotlight artists, thinkers, and builders who are shaping culture from the ground up.",
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
    {
        title: "Atlanta History Project",
        slug: "atlanta-history",
        tagline: "Oral History. Grassroots Preservation.",
        description: "Join Brandyn Buchanan as he partners with the WRFG / L5P Oral History Project to capture the heartbeat of iconic Atlanta communities, starting with the funky, independent soul of Little Five Points.",
        feedUrl: "https://feeds.castos.com/px0p2",
        hosts: ["Brandyn Buchanan"],
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
            premise: "Part of a national movement to celebrate grassroots historic preservation, the project ensures that the spirit of Atlanta's most vital communities — their struggles, triumphs, and sheer vitality — is recorded and remembered through deep-dive oral histories.",
            format: "60–90 min Oral History / Conversation",
            recordingMethod: "Discord — The Cholla A/V Club",
            discordInvite: "https://discord.gg/cholla-av-club",
            guestExpectations: [
                "Have a personal connection or story related to Little Five Points or Atlanta's cultural history",
                "Be prepared to dive deep into sensory details, legendary sights, and sounds of the community",
                "Join our Discord server (The Cholla A/V Club) for recording",
                "Use a high-quality microphone in a quiet environment",
                "Be authentic — we're capturing the heartbeat of the community, not a polished PR statement",
                "You're allowed to swear!",
            ],
        },
        links: {
            apple: "#",
            spotify: "#",
        },
        theme: {
            primary: "25 85% 50%", // ATL Peach/Clay
            accent: "45 100% 50%",  // ATL Gold
            muted: "25 30% 12%",
            border: "25 40% 25%",
        },
    },
];

export function getShowBySlug(slug: string): ShowConfig | undefined {
    return shows.find((s) => s.slug === slug);
}
