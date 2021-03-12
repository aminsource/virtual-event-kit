import Link from 'next/link';
import Image from 'next/image';
import { Speaker } from '@lib/types';
import styles from './speakers-grid.module.css';
import { BACKEND_URL } from '@lib/constants';

type Props = {
  speakers: Speaker[];
};

export default function SpeakersGrid({ speakers }: Props) {

  return (
    <div className={styles.grid}>
      {speakers.map(speaker => (
        <Link key={speaker.name} href={`/speakers/${speaker.slug}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                alt={speaker.name}
                src={`${BACKEND_URL}${speaker.image[0].url}`}
                className={styles.image}
                loading="lazy"
                quality="50"
                title={speaker.name}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{speaker.name}</h2>
                <p className={styles.title}>
                  {`${speaker.title} از `}
                  <span className={styles.company}>{speaker.company}</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
