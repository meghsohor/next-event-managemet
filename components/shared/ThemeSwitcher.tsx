'use client';

import { useEffect, useState } from 'react';

const DARK_MODE_LOCAL_STORAGE_KEY = 'next-event-dark-theme';

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, String(newValue));
    document.documentElement.classList.toggle('dark', newValue);
  };

  useEffect(() => {
    if (localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY) == 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="theme-swticher mx-auto">
      <input type="checkbox" id="dn" checked={isDarkMode} onChange={toggleDarkMode} />
      <label htmlFor="dn">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
