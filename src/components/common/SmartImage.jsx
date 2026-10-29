import PropTypes from "prop-types";
import { IMAGES } from "../../lib/images";

/* Art-directed enough to matter, simple enough to maintain: AVIF/WebP with
   real intrinsic dimensions and no layout shift. */
function SmartImage({
  image,
  alt,
  sizes = "100vw",
  className,
  priority = false,
  width,
  height,
}) {
  const source = IMAGES[image];
  if (!source) return null;

  return (
    <picture>
      <source type="image/avif" srcSet={source.srcSetAvif} sizes={sizes} />
      <source type="image/webp" srcSet={source.srcSetWebp} sizes={sizes} />
      <img
        src={source.src}
        alt={alt}
        width={width ?? source.width}
        height={height ?? source.height}
        sizes={sizes}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}

SmartImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  className: PropTypes.string,
  priority: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SmartImage;
