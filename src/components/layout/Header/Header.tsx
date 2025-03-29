import { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/yh-logo.png';

import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

import { MainLinks } from '../../../constants/Navigation';
import Button from '../../ui/Button/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle mobile menu
  const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Toggle dropdowns in mobile mode
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        <img src={logo} alt="York Hamilton" />

        <div className={`${styles.header__mobile} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
          {isOpen ? <IoClose className={styles.icon} /> : <TbMenuDeep className={styles.icon} />}
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul>
            {MainLinks.map((link) => (
              link.dropdown ? (
                <li key={link.name} className={`${styles.header__parent} ${openDropdown === link.name ? styles.open : ''}`}>
                  <span onClick={() => toggleDropdown(link.name)}>
                    {link.name}
                    {openDropdown === link.name ? <FaAngleDown className={styles.rotated} /> : <FaAngleDown />}
        
                  </span>
                  <div className={styles.header__childlinks}>
                    <ul>
                      {link.children.map((child) => (
                        <li key={child.name}>
                          <a href={child.url} title={child.title}>{child.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.name}>
                  <a href={link.url} title={link.title}>{link.name}</a>
                </li>
              )
            ))}
          </ul>
        </nav>

        <div className={styles.header__contact}>
            <Button btnTitle='Enquire Now' btnStyle='primary'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
