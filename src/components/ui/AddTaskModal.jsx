import React from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';

const AddTaskModal = ({ isOpen, setOpen }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data.title, data.desc, data.date, data.assign, data.priority)
    }
    return (
        <Modal isOpen={isOpen} setOpen={setOpen} title={"Add Your Task"}>
            <form className='flex flex-col gap-2 py-3' onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' className='w-full rounded-md' {...register("title")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" id='description' className='w-full rounded-md' {...register("desc")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="deadline">Deadline</label>
                    <input type="date" id='deadline' className='w-full rounded-md' {...register("date")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="assignedTo">Assign To</label>
                    <select className='w-full rounded-md' id='assignedTo' {...register("assign")}>
                        <option value="Jahidul Islam Osmani">Jahidul Islam Osmani</option>
                        <option value="Zahra Jannat Aqsa">Zahra Jannat Aqsa</option>
                        <option value="Mojahidul Islam Osmani">Mojahidul Islam Osmani</option>
                        <option value="Jannatul Ferdous Sharmin">Jannatul Ferdous Sharmin</option>
                        <option value="Mohammad Dinar">Mohammad Dinar</option>
                        <option value="Ema">Ema</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="priority">Priority</label>
                    <select className='w-full rounded-md' id='priority' {...register("priority")}>
                        <option defaultValue value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <button className='w-fit rounded-full bg-blue-500 hover:bg-blue-600 duration-300 px-6 py-3 text-white font-semibold mx-auto mt-3' type='submit'>Submit</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;