import { useContext, React, useState } from 'react';
import noteContext from '../context/noteContext';

function Input() {
    let data = useContext(noteContext);
    const { addNote } = data;

    const [value, setValue] = useState({ title: '', description: '', tag: '' });

    const runHandler = (e) => {
        e.preventDefault();
        addNote(value.title, value.description, value.tag);
        setValue({ title: '', description: '', tag: '' })
    }

    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <section className="text-pink-500 body-font relative">
                <div className="container px-5 pt-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-2">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-500">Add a Note</h1>
                    </div>
                    <form>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="title" className="leading-7 text-sm text-gray-500">Title</label>
                                        <input onChange={onChange} minLength={5} value={value.title} type="text" id="title" name="title" className="w-full  bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:bg-pink-100 focus:ring-2 focus:ring-pink-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="tag" className="leading-7 text-sm text-gray-500">Tag</label>
                                        <input onChange={onChange} minLength={5} value={value.tag} type="text" id="tag" name="tag" className="w-full  bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:bg-pink-100 focus:ring-2 focus:ring-pink-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="description" className="leading-7 text-sm text-gray-500">Description</label>
                                        <textarea onChange={onChange} value={value.description} id="description" name="description" className="w-full  bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:bg-pink-100 focus:ring-2 focus:ring-pink-100 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required minLength={5} ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button disabled={value.title.length < 5} onClick={runHandler} className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Input;