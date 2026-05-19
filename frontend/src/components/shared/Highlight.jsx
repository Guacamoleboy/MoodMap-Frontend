// Pathing
// _______
// src/components/shared/Highlight.jsx

const Highlight = ({ value, size = 'm' }) => (
    <span className={`moodmap-highlight ${size}`}>
        {value}
    </span>
)

export default Highlight