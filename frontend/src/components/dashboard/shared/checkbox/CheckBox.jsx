// Pathing
// _______
// src/components/dashboard/shared/checkbox/CheckBox.jsx

import { useCheckBox } from './CheckBox.hooks';
import styles from './CheckBox.module.css';

function CheckBox({defaultActive = false}) {

    // ------ SETUP ------------------------------------------------------------------

    const {active, toggle} = useCheckBox(defaultActive);

    // ------ RETURN -----------------------------------------------------------------

    return (
        <button type="button" onClick={toggle}
            className=
            {`
                ${styles.checkbox} 
                ${active ? styles.active : ''}
            `}
        >
            <i className="fa fa-check" />
        </button>
    );
}

export default CheckBox;