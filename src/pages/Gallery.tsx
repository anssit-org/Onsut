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
  const [filteredSectionId, setFilteredSectionId] = useState<number | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<{ [key: string]: number }>({});
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(5);

  // Load translations dynamically
  useEffect(() => {
    if (!lang) return;
    import(`../i18n/${lang}.json`)
      .then((module: { default: GalleryJSON }) => {
        const translatedSections: Section[] = module.default.gallery.sections.map((sec, idx) => ({
          id: idx,
          title: sec.title,
          items: sec.items,
        }));
        setSections(translatedSections);
      })
      .catch((err) => console.error(err));
  }, [lang]);

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w <= 480) setVisibleCount(1);
      else if (w <= 768) setVisibleCount(2);
      else if (w <= 1024) setVisibleCount(3);
      else if (w <= 1280) setVisibleCount(4);
      else setVisibleCount(5);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const showNext = (itemKey: string, imagesLength: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [itemKey]: Math.min((prev[itemKey] || 0) + 1, imagesLength - visibleCount),
    }));
  };

  const showPrev = (itemKey: string) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [itemKey]: Math.max((prev[itemKey] || 0) - 1, 0),
    }));
  };

  const openModal = (src: string) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  const visibleSections =
    filteredSectionId !== null ? sections.filter((sec) => sec.id === filteredSectionId) : [];

  return (
    <div className={`gallery-page ${lang === "ar" || lang === "he" ? "rtl" : "ltr"}`}>
      {/* Top filter buttons */}
      <div className="filter-buttons">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className={`filter-btn ${filteredSectionId === sec.id ? "active" : ""}`}
            onClick={() => setFilteredSectionId(sec.id)}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Gallery Sections */}
      {visibleSections.map((section) => (
        <div key={section.id} className="section">
          <h1 className="section-title">{section.title}</h1>

          {section.items.map((item, idx) => {
            const key = `${section.id}-${idx}`;
            const startIdx = carouselIndices[key] || 0;
            const visibleImages = item.images.slice(startIdx, startIdx + visibleCount);

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

                  {startIdx + visibleCount < item.images.length && (
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

      {/* Modal */}
      {modalSrc && <ImageModal src={modalSrc} onClose={closeModal} />}
    </div>
  );
}
