import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export const GoTop = () => {
  const [showToTop, setShowToTop] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.pageYOffset > 300 ? setShowToTop(true) : setShowToTop(false);
    };

    window.addEventListener("scroll", handleScrollVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);
  return (
    <>
      {showToTop && (
        <div className="top-icon-box" onClick={() => handleScrollToTop()}>
          <FaChevronUp />
        </div>
      )}
    </>
  );
};
