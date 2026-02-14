import { useParams, Navigate } from 'react-router-dom';
import { getShowBySlug } from '../data/showData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShowPressKit from '../components/show/ShowPressKit';

export default function PressKitPage() {
    const { slug } = useParams<{ slug: string }>();
    const show = slug ? getShowBySlug(slug) : undefined;

    if (!show || !show.sections.pressKit) {
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
                '--input': show.theme?.muted,
            } as React.CSSProperties}
        >
            <Navbar />
            <div className="pt-24">
                <ShowPressKit show={show} />
            </div>
            <Footer />
        </div>
    );
}
