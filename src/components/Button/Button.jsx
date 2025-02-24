import styles from './styles.module.scss';

function Button({ children, content, className }) {
    const { btn } = styles;
    return (
        <button className={`${btn} ${className || ''}`}>
            {children || content}
        </button>
    );
}
export default Button;
