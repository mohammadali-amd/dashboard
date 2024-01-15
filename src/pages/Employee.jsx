import { useState, useEffect } from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const Employee = () => {
   const [employees, setEmployees] = useState([]);
   const [newEmployee, setNewEmployee] = useState({ name: '', email: '' });
   const [editingEmployee, setEditingEmployee] = useState(null);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         const response = await fetch(baseURL);
         const data = await response.json();
         setEmployees(data);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   const handleAddEmployee = async () => {
      if (!newEmployee.name.trim() || !newEmployee.email.trim()) {
         alert('لطفا مقادیر نام و ایمیل را وارد کنید.');
         return;
      }

      try {
         const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmployee),
         });

         if (!response.ok) {
            throw new Error('Failed to add employee');
         }

         const addedEmployee = await response.json();
         setEmployees((prevEmployees) => [...prevEmployees, addedEmployee]);
         setNewEmployee({ name: '', email: '' });
      } catch (error) {
         console.error('Error adding employee:', error);
      }
   };

   const handleEditEmployee = async () => {
      if (!editingEmployee) return;

      try {
         const response = await fetch(`${baseURL}/${editingEmployee.id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(editingEmployee),
         });

         if (!response.ok) {
            throw new Error('Failed to edit employee');
         }

         const updatedEmployee = await response.json();
         setEmployees((prevEmployees) =>
            prevEmployees.map((employee) =>
               employee.id === updatedEmployee.id ? updatedEmployee : employee
            )
         );
         setEditingEmployee(null);
      } catch (error) {
         console.error('Error editing employee:', error);
      }
   };

   const handleDeleteEmployee = async (id) => {
      try {
         const response = await fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
         });

         if (!response.ok) {
            throw new Error('Failed to delete employee');
         }

         setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee.id !== id)
         );
      } catch (error) {
         console.error('Error deleting employee:', error);
      }
   };

   return (
      <div className='p-6 md:p-0'>
         <div className="flex mx-auto gap-4 my-10">
            <input
               type="text"
               placeholder="نام و نام خانوادگی"
               value={newEmployee.name}
               onChange={(e) =>
                  setNewEmployee({ ...newEmployee, name: e.target.value })
               }
               className="bg-slate-100 rounded-md p-2"
            />
            <input
               type="email"
               placeholder="ایمیل"
               value={newEmployee.email}
               onChange={(e) =>
                  setNewEmployee({ ...newEmployee, email: e.target.value })
               }
               className="bg-slate-100 rounded-md p-2"
            />
            <button
               onClick={handleAddEmployee}
               className="bg-slate-400 rounded-md px-8 text-slate-50 hover:bg-slate-600"
            >
               اضافه کردن کاربر
            </button>
         </div>

         <ul className='grid grid-cols-2 xl:grid-cols-4 gap-6'>
            {employees.map((employee) => (
               <div key={employee.id} className='bg-slate-200 rounded-lg px-8 py-4 justify-center text-center shadow-md'>
                  {editingEmployee?.id === employee.id ? (
                     <div className='grid gap-2'>
                        <input
                           type="text"
                           value={editingEmployee.name}
                           onChange={(e) =>
                              setEditingEmployee({
                                 ...editingEmployee,
                                 name: e.target.value,
                              })
                           }
                           className="bg-slate-100 rounded-md p-2"
                        />
                        <input
                           type="text"
                           value={editingEmployee.email}
                           onChange={(e) =>
                              setEditingEmployee({
                                 ...editingEmployee,
                                 email: e.target.value,
                              })
                           }
                           className="bg-slate-100 rounded-md p-2"
                        />
                        <button
                           onClick={handleEditEmployee}
                           className='text-slate-600 px-6 py-2 rounded-md'
                        >
                           ذخیره
                        </button>
                     </div>
                  ) : (
                     <>
                        <h3 className='font-bold text-slate-600'>نام و نام خانوادگی:</h3>
                        <h4>{employee.name}</h4>
                        <h3>ایمیل:</h3>
                        <p>{employee.email}</p>
                        <div className="flex justify-between mt-4">
                           <button onClick={() => setEditingEmployee(employee)} className='text-slate-600 rounded-md'>
                              ویرایش
                           </button>
                           <button onClick={() => handleDeleteEmployee(employee.id)} className='text-red-500 rounded-md'>
                              حذف
                           </button>
                        </div>
                     </>
                  )}
               </div>
            ))}
         </ul>
      </div>
   );
};

export default Employee;
