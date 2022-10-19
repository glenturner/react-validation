import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Modal, EmployeeForm } from './components';
import employees from './assets/employees';
import './index.scss';

function App() {
	const [modal, setModal] = useState(false);
	const [selected, setSelected] = useState(employees[0]);

	return (
		<>
			<div className="Page__bounds Page__bounds--thin">
				<div className="UpdateEmployee">
					<h2 className="Header">Update Employee Info</h2>
					<p className="UpdateEmployee__instruct">Choose an employee to update their information.</p>
					<select
						onChange={(e) => setSelected(e.target.value)}
						id="js-employee-name-select"
						value={selected}
						className="UpdateEmployee__select">
						<option>&ndash;Select&ndash;</option>
						{employees.map((employee) => (
							<option
								key={employee.id}
								name="employee"
								value={employee.id}>{`${employee.firstName} ${employee.lastName}`}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="Page__footer">
				<div className="Page__bounds Page__bounds--thin">
					<button onClick={() => setModal(true)}>Update Employee</button>
				</div>
			</div>
			<Modal onDismiss={() => setModal(false)} isOpen={modal}>
				<EmployeeForm
					data={employees.find(e => e.id === parseInt(selected))}
					onClick={() => setModal(false)}
				/>
			</Modal>
		</>
	)
}

const root = createRoot(document.getElementById('app-root'))
root.render(<App />);
