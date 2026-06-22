import './TrailerVideo.scss'

export default function TrailerVideo({ trailerUrl, onClose }: { trailerUrl: string, onClose: () => void }) {
    const embedUrl = trailerUrl?.replace('watch?v=', 'embed/')

    return (
        <div className="trailer-overlay" onClick={onClose}>
            <div className="trailer-modal" onClick={(e) => e.stopPropagation()}>
                <button className="trailer-modal__close" onClick={() => onClose()}>
                    ✕
                </button>
                <div className="trailer-modal__video-wrapper">
                    <iframe
                        src={embedUrl}
                        title="Трейлер"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="trailer-modal__iframe"
                    />
                </div>
            </div>
        </div>
    )
}