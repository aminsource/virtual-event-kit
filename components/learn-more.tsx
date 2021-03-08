
import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';
import { REPO } from '@lib/constants';

export default function LearnMore() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
      بیشتر در گیت هاب{' '}
      <a href={REPO} className={styles['contact-email']} target="_blank" rel="noopener noreferrer">
        مطالعه فرمایید
      </a>
      .
    </div>
  );
}
