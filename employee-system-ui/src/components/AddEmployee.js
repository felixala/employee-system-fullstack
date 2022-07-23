import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    // employee is the state
    //setEmployee is the method to set the value to our state(employee)
    const [employee, setEmployee] = useState({
        // defining defaults values when the program initialize
        id: "",
        firstName: "", // this firstName is equal to name tag in the div below
        lastName: "",
        emailId: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        //this value I am getting
        const value = e.target.value;

        //setting the value to my useState
        setEmployee({ ...employee, [e.target.name]: value });
    }

    const saveEmployee = (e) => {
        e.preventDefault(); //it will disable the refreshing of the page
        // we need to call the api to save data. we need to create a service
        // then get a response back
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList")
        }).catch((error) => {
            console.log(error);
        });
    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "", // this firstName is equal to name tag in the div below
            lastName: "",
            emailId: ""
        });
    }

    return (
        <div className='flex max-w-2xl mx-auto shadow'>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Add New Employee</h1>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                    <input
                        type="text"
                        name="firstName" //normal html tag
                        value={employee.firstName} // comes from REACT
                        onChange={(e) => handleChange(e)}//onCahnge event helps o change the value in the inputs REACT. onCHANGE is calling a method and this method will update the state
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>

                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>

                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Email</label>
                    <input
                        type="email"
                        name="emailId"
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>

                <div className='items-center justify-center h-14 w-full my-4 space-x-4 py-4'>
                    <button
                        onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-800'>Save</button>
                    <button
                        onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-800'>Clear</button>
                </div>

            </div>
        </div>
    )
}

export default AddEmployee