// Pathing
// _______
// src/components/devlog/pagination/PaginationUp.jsx

import styles from './Pagination.module.css'

const PaginationUp = ({ disabled, onClick }) => (
    <button
        className={styles.paginationUp}
        onClick={onClick}
        disabled={disabled}
    >
        <i className="fa fa-chevron-up" />
    </button>
)

export default PaginationUp