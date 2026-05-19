// Pathing
// _______
// src/components/devlog/pagination/Pagination.jsx

import styles from './Pagination.module.css'
import PaginationDown from './PaginationDown'
import PaginationUp from './PaginationUp'

const Pagination = ({current, total, onNext, onPrev}) => {

    return (
        <div className={styles.paginationWrapper}>

            {/* UP */}
            <PaginationUp
                disabled={current <= 0}
                onClick={onPrev}
            />

            {/* DOWN */}
            <PaginationDown
                disabled={current >= total - 1}
                onClick={onNext}
            />

        </div>
    )
}

export default Pagination