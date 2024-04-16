import styles from '../css/side.module.css'
import addIcon from '../image/add.png'

const Sidebar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.iconSec}>
                <div className={styles.icon}>
                    <p className={styles.text}>
                        RR
                    </p>
                    <p className={styles.dot}></p>
                </div>
                <div>
                    <p className={styles.name}>Ronald Raimondi</p>
                    <span className={styles.title}>Research Nurse </span>
                </div>
            </div>
            <div >
                <div className={styles.conversation}>
                    <p className={styles.Conver}>Conversation</p>
                    <img src={addIcon} alt="image" className={styles.imageIcon} />
                </div>
                <div className={styles.list}>
                <div className={styles.buttonsContainer}>
                    <p className={styles.hash}>#</p>
                    <span className={styles.office}>Poland office</span>
                </div>
                <div className={styles.buttonsContainerP}>
                    <p className={styles.hash}>#</p>
                    <p className={styles.office}>Introduction</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <p className={styles.hash}>#</p>
                    <p className={styles.office}>India office</p>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;