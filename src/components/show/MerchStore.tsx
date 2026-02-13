import { ShowConfig } from '../../data/showData';
import { ShoppingBag, ExternalLink } from 'lucide-react';

interface MerchStoreProps {
    show: ShowConfig;
}

const placeholderMerch = [
    { name: 'Classic Tee', price: '$35', tag: 'APPAREL' },
    { name: 'Snapback Cap', price: '$28', tag: 'HEADWEAR' },
    { name: 'Sticker Pack', price: '$12', tag: 'ACCESSORIES' },
    { name: 'Mug — 11oz', price: '$18', tag: 'DRINKWARE' },
];

export default function MerchStore({ show }: MerchStoreProps) {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <ShoppingBag className="w-5 h-5 text-accent" />
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Merch</h2>
                    <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {placeholderMerch.map((item, i) => (
                        <div key={i} className="group bg-card border border-border p-4 transition-all duration-300 hover:border-primary/50 hover:translate-y-[-2px]">
                            {/* Placeholder image */}
                            <div className="aspect-square bg-muted/20 border border-border mb-4 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
                                <ShoppingBag className="w-8 h-8 text-muted-foreground relative z-10 opacity-30" />
                                <div className="absolute top-2 right-2 bg-primary/10 border border-primary px-2 py-0.5 z-10">
                                    <span className="font-mono text-[8px] text-primary uppercase tracking-widest">{item.tag}</span>
                                </div>
                            </div>

                            <h4 className="font-bold text-sm text-foreground uppercase mb-1">{item.name}</h4>
                            <p className="font-mono text-xs text-accent">{item.price}</p>
                        </div>
                    ))}
                </div>

                {show.links.storeUrl && (
                    <div className="flex justify-center">
                        <a
                            href={show.links.storeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-accent text-background px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors font-bold"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Visit Official Store
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
