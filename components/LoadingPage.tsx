import LoadingSpinner from "./LoadingSpinner";
import styles from '../styles/componentStyles/LoadingPage.module.css'


function LoadingPage() {
    return (
        <div className={styles.loadingContainer}>
            <LoadingSpinner />
        </div>
    );
}

export default LoadingPage;