import React from "react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from '@components/Icons';

import styles from "./style.module.css";

const Contacts = () => {
  const items = [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/mazurovandre',
      icon: <LinkedinIcon width={100} height={100} />
    },
    {
      name: 'Github',
      link: 'https://github.com/mazurovandre',
      icon: <GithubIcon width={100} height={100} />
    },
    {
      name: 'Telegram',
      link: 'https://t.me/mazurovandre',
      icon: <TelegramIcon width={100} height={100} />
    }
  ]

  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.name} className='btn-item'>
          <a
            target='_blank'
            href={item.link}
            className='btn-link'
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
