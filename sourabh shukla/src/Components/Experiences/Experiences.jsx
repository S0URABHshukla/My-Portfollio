import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
// import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className="ab">
			
			{/* <div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				Utility Engineer  | Mechanical Engineering{' '}
					<a href=''>  Govindjee Dairy Pvt. Ltd, Jaipur</a>
				</div>
				<div className={styles.date}>January 2020 - October 2020</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							My role was to  Monitoring of boiler operation & Performing regular maintenance of boiler. 
                           </li>
						<li>
						Monitoring Ammonia Refrigeration system as well as cold chain unit. 
						</li>
						<li>
						Responding to breakdown ,malfunctions and analysis
							</li>
							<li>
							Etp operation and monitoring 

							</li>
					
					</ul>
				</fieldset>
			</div> */}

			<br/>

			

		</div>
	);
};

export default Experiences;
