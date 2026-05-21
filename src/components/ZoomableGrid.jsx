import React, { useState, useRef, useCallback } from 'react';

export const ZoomableGrid = ({ children }) => {
    const [scale, setScale] = useState(0.25); // Start fully zoomed out to see entire grid
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);
    const lastTouchRef = useRef({ x: 0, y: 0 });
    const lastPinchDistance = useRef(0);

    const MIN_SCALE = 0.25;
    const MAX_SCALE = 2;

    // Zoom with buttons
    const zoomIn = () => setScale(s => Math.min(s + 0.2, MAX_SCALE));
    const zoomOut = () => setScale(s => Math.max(s - 0.2, MIN_SCALE));
    const resetZoom = () => {
        setScale(0.25);
        setPosition({ x: 0, y: 0 });
    };

    // Get distance between two touch points
    const getTouchDistance = (touches) => {
        if (touches.length < 2) return 0;
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    // Get center point of two touches
    const getTouchCenter = (touches) => {
        if (touches.length < 2) return { x: touches[0].clientX, y: touches[0].clientY };
        return {
            x: (touches[0].clientX + touches[1].clientX) / 2,
            y: (touches[0].clientY + touches[1].clientY) / 2
        };
    };

    const handleTouchStart = useCallback((e) => {
        if (e.touches.length === 1) {
            // Single touch - prepare for pan
            lastTouchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            setIsDragging(true);
        } else if (e.touches.length === 2) {
            // Two fingers - prepare for pinch
            lastPinchDistance.current = getTouchDistance(e.touches);
        }
    }, []);

    const handleTouchMove = useCallback((e) => {
        if (e.touches.length === 1 && isDragging && scale > 0.25) {
            // Pan (only when zoomed in)
            e.preventDefault();
            const deltaX = e.touches[0].clientX - lastTouchRef.current.x;
            const deltaY = e.touches[0].clientY - lastTouchRef.current.y;

            setPosition(pos => ({
                x: pos.x + deltaX,
                y: pos.y + deltaY
            }));

            lastTouchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
            // Pinch zoom
            e.preventDefault();
            const currentDistance = getTouchDistance(e.touches);

            if (lastPinchDistance.current > 0) {
                const delta = currentDistance - lastPinchDistance.current;
                const scaleDelta = delta * 0.005; // Sensitivity

                setScale(s => Math.max(MIN_SCALE, Math.min(MAX_SCALE, s + scaleDelta)));
            }

            lastPinchDistance.current = currentDistance;
        }
    }, [isDragging, scale]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
        lastPinchDistance.current = 0;
    }, []);

    return (
        <div className="relative w-full">
            {/* Zoom Controls */}
            <div className="absolute top-2 right-2 z-30 flex flex-col gap-2">
                <button
                    onClick={zoomIn}
                    className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-xl font-bold text-gray-700 active:bg-gray-200"
                    aria-label="Zoom in"
                >
                    +
                </button>
                <button
                    onClick={zoomOut}
                    className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-xl font-bold text-gray-700 active:bg-gray-200"
                    aria-label="Zoom out"
                >
                    −
                </button>
                <button
                    onClick={resetZoom}
                    className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-xs font-bold text-gray-700 active:bg-gray-200"
                    aria-label="Reset zoom"
                >
                    ↺
                </button>
            </div>

            {/* Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full pointer-events-none">
                👆 Pellizca para zoom • Arrastra para mover
            </div>

            {/* Zoomable Container */}
            <div
                ref={containerRef}
                className="overflow-hidden touch-none"
                style={{
                    height: '80vh',
                    WebkitOverflowScrolling: 'touch'
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="origin-top-left transition-transform duration-100 ease-out"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        width: '170%', // Wider to show 4-col grid
                        minHeight: '200%'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ZoomableGrid;
