import React from 'react';
import ModalForm from '../../../Shared/ModalForm/ModalForm';

const CreateTasks = () => {
    return (
        <section className='lg:w-1/2 md:w-2/3 w-full rounded-md border-2 border-gray-400 p-10 mx-2 md:mx-auto  my-14'>
            <h1 className='md:text-4xl text-2xl font-bold text-center'>Create a new Tasks here.</h1>
            <ModalForm></ModalForm>
        </section>
    );
};

export default CreateTasks;