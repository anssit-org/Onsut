import { useState, useEffect } from "react";
import "../styles/Gallery.css";
import ImageModal from "../components/ImageModal";
import type { Lang } from "../App";

type Item = {
  title: string;
  description: string;
  images: string[];
};

type Section = {
  id: number;
  title: string;
  items: Item[];
};

// Type for the structure of the imported JSON
interface GalleryJSON {
  gallery: {
    sections: {
      title: string;
      items: Item[];
    }[];
  };
}

type Props = {
  lang: Lang;
};

export default function Gallery({ lang }: Props) {
  const [sections, setSections] = useState<Section[]>([]);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<{ [key: string]: number }>({});

  // Load translations dynamically
  useEffect(() => {
    import(`../i18n/${lang}.json`).then((module: { default: GalleryJSON }) => {
      const translatedSections: Section[] = module.default.gallery.sections.map((sec, idx) => ({
        id: idx + 1,
        title: sec.title,
        items: sec.items,
      }));
      setSections(translatedSections);
    });
  }, [lang]);

  const openModal = (src: string) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  const showNext = (itemKey: string, imagesLength: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [itemKey]: Math.min((prev[itemKey] || 0) + 1, imagesLength - 5),
    }));
  };

  const showPrev = (itemKey: string) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [itemKey]: Math.max((prev[itemKey] || 0) - 1, 0),
    }));
  };

  return (
    <div className={`gallery-page ${lang === "ar" || lang === "he" ? "rtl" : "ltr"}`}>
      {sections.map((section) => (
        <div key={section.id} className="section">
          <h1 className="section-title">{section.title}</h1>

          {section.items.map((item, idx) => {
            const key = `${section.id}-${idx}`;
            const startIdx = carouselIndices[key] || 0;
            const visibleImages = item.images.slice(startIdx, startIdx + 5);

            return (
              <div key={idx} className="item">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>

                <div className="carousel-wrapper">
                  {startIdx > 0 && (
                    <button className="carousel-arrow left" onClick={() => showPrev(key)}>
                      ‹
                    </button>
                  )}

                  <div className="item-images">
                    {visibleImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${item.title} ${startIdx + i + 1}`}
                        className="item-image"
                        onClick={() => openModal(img)}
                      />
                    ))}
                  </div>

                  {startIdx + 5 < item.images.length && (
                    <button
                      className="carousel-arrow right"
                      onClick={() => showNext(key, item.images.length)}
                    >
                      ›
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {modalSrc && <ImageModal src={modalSrc} onClose={closeModal} />}
    </div>
  );
}
