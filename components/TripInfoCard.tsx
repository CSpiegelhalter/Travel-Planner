import styles from '../styles/componentStyles/TripComponents.module.css'

function TripInfoCard(props: any) {
    return (
        <div className={styles.detailsContainer}>
                <p>{props.name}</p>
                <p>{props.description}</p>
        </div>
    );
}

export default TripInfoCard;