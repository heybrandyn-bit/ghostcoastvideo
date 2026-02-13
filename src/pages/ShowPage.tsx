import { useParams, Navigate } from 'react-router-dom';
import { getShowBySlug } from '../data/showData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShowHero from '../components/show/ShowHero';
import ShowEpisodes from '../components/show/ShowEpisodes';
import ShowPressKit from '../components/show/ShowPressKit';
import GuestBooking from '../components/show/GuestBooking';
import VoicenoteDrop from '../components/show/VoicenoteDrop';
import SubscribeForm from '../components/show/SubscribeForm';
import ReviewLinks from '../components/show/ReviewLinks';
import MerchStore from '../components/show/MerchStore';
import YoutubeChannel from '../components/show/YoutubeChannel';

export default function ShowPage() {
    const { slug } = useParams<{ slug: string }>();
    const show = slug ? getShowBySlug(slug) : undefined;

    if (!show) {
        return <Navigate to="/radio" replace />;
    }

    return (
        <div
            className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white"
            style={{
                '--primary': show.theme?.primary,
                '--secondary': show.theme?.secondary,
                '--accent': show.theme?.accent,
                '--muted': show.theme?.muted,
                '--border': show.theme?.border,
                '--input': show.theme?.muted, // Match input to muted for consistent look
            } as React.CSSProperties}
        >
            <Navbar />

            <ShowHero show={show} />

            {show.sections.episodes && <ShowEpisodes show={show} />}

            {show.sections.youtubeChannel && <YoutubeChannel show={show} />}

            {show.sections.pressKit && <ShowPressKit show={show} />}

            {show.sections.guestBooking && <GuestBooking show={show} />}

            {show.sections.voicenote && <VoicenoteDrop show={show} />}

            {show.sections.subscribe && <SubscribeForm show={show} />}

            {show.sections.reviews && <ReviewLinks show={show} />}

            {show.sections.merch && <MerchStore show={show} />}

            <Footer />
        </div>
    );
}
