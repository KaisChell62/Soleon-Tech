import { useState, useRef, useEffect } from 'react';
import { Layers } from 'lucide-react';

interface ComparisonSliderProps {
  before: string;
  after: string;
}

export default function ComparisonSlider({ before, after }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
    const [svgBefore, setSvgBefore] = useState<string | null>(null);
    const [svgAfter, setSvgAfter] = useState<string | null>(null);

    const isSvg = (url: string) => typeof url === 'string' && url.trim().toLowerCase().endsWith('.svg');

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    // Global event listeners to handle dragging outside the container
    if (isDragging) {
        window.addEventListener('mouseup', handleInteractionEnd);
        window.addEventListener('touchend', handleInteractionEnd);
    } else {
        window.removeEventListener('mouseup', handleInteractionEnd);
        window.removeEventListener('touchend', handleInteractionEnd);
    }
    return () => {
        window.removeEventListener('mouseup', handleInteractionEnd);
        window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging]);

    useEffect(() => {
        // Fetch SVGs and inline them to ensure reliable rendering inside img-like containers
        let mounted = true;
        if (isSvg(before)) {
            fetch(before).then(r => r.text()).then(txt => { if (mounted) setSvgBefore(txt); }).catch(() => {});
        }
        if (isSvg(after)) {
            fetch(after).then(r => r.text()).then(txt => { if (mounted) setSvgAfter(txt); }).catch(() => {});
        }
        return () => { mounted = false; };
    }, [before, after]);

  return (
    <div className="my-16">
        <div className="flex items-center gap-2 mb-4 text-indigo-400 font-semibold uppercase tracking-wider text-sm">
            <Layers size={18} />
            <span>Avant / Après la refonte</span>
        </div>
        
        <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
        >
                        {/* After Image (Background) */}
                        {isSvg(after) ? (
                            svgAfter ? (
                                <div className="absolute inset-0 w-full h-full" dangerouslySetInnerHTML={{ __html: svgAfter }} />
                            ) : null
                        ) : (
                            <img 
                                src={after} 
                                alt="After" 
                                className="absolute inset-0 w-full h-full object-cover" 
                                draggable={false}
                            />
                        )}

            {/* Before Image (Clipped) */}
                        <div 
                                className="absolute inset-0 overflow-hidden" 
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                                {isSvg(before) ? (
                                    svgBefore ? (
                                        <div className="absolute inset-0 w-full h-full" dangerouslySetInnerHTML={{ __html: svgBefore }} />
                                    ) : null
                                ) : (
                                    <img 
                                        src={before} 
                                        alt="Before" 
                                        className="absolute inset-0 w-full h-full object-cover" 
                                        draggable={false}
                                    />
                                )}
                        </div>

            {/* Slider Handle */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center z-10"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><path d="m9 18 6-6-6-6"/></svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold pointer-events-none">AVANT</div>
            <div className="absolute top-4 right-4 bg-indigo-600/80 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold pointer-events-none">APRÈS</div>
        </div>
    </div>
  );
}
