import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 800
        ? setShowTopBtn(true)
        : setShowTopBtn(false)
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="top-to-btm">
    {showTopBtn && (
        <FaAngleUp
            className="icon-position icon-style"
            onClick={goToTop}
        />
    )}
</div>
  )
}

export default ScrollToTop