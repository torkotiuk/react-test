import styles from './Section.module.scss';
import Container from '../Container';

const Section = ({ children, title, className }) => {
  return (
    <section className={styles.section}>
      <Container>
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};

export default Section;
