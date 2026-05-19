// Pathing
// _______
// src/components/devlog/pagination/PaginationDown.jsx

import styles from './Pagination.module.css'

const PaginationDown = ({ disabled, onClick }) => (
    <button
        className={styles.paginationDown}
        onClick={onClick}
        disabled={disabled}
    >
        <i className="fa fa-chevron-down" />
    </button>
)

export default PaginationDown