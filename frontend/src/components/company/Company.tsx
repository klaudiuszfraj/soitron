import React from 'react';
import {CompanyType} from "../../../../common/types";
import styles from "./Comapny.module.scss"
const Company = ({name, logo, services, country}: CompanyType) => {
    return (
        <div className={styles.company}>
            <img className={styles.logo} src={logo} alt={`${name} logo`}/>
            <div className={styles.companyDetails}>
            <span className={styles.companyName}>{name}</span>
            <p>Services:</p>
            <ul className={styles.services}>
                {services.map(service => <li key={service}>{service}</li>)}
            </ul>
            <p>Country: {country}</p>
            </div>
        </div>
    );
};

export default Company;