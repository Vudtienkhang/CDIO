import styles from './styles.module.scss';

function Menu({ content, href }) {
  const { contentMenu } = styles;
  return (
    <div className={contentMenu}>
      {content}
    </div>
  );
}

export default Menu;
