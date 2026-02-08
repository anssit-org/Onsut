import "../styles/ImageModal.css";

type Props = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export default function ImageModal({ src, alt, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}
