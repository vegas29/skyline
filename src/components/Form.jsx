import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2'

export const Form = () => {
    
    const initialForm = {
        name: '',
        description: ''
    }
    
    const [formValues, handleInputChange] = useForm(initialForm);

    const { name, description } = formValues;
    
    const submit = (e) => {
        e.preventDefault();

        if (name.length === 0){
            Swal.fire({
                title: 'Error',
                text: 'El nombre es requerido',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
            return;
        } else if (description.length === 0) {
            Swal.fire({
                title: 'Error',
                text: 'La descripción es requerido',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
            return;
        } else {
            window.open(`https://wa.me/3209744111?text=Hola!%20Me%20llamo%20${name},%20${description}`);
        }
    }

    return (
        <form 
            className="mt-10 flex flex-col gap-5 md:grid md:grid-cols-12"
            onSubmit={submit}
        >
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleInputChange}
                className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13"
                placeholder={'Name'}
            />

            <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleInputChange}
                className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13 md:h-24 resize-none"
                placeholder={'Description'}
            >
            </textarea>

            <button
                type="submit"
                className="bg-cyan-400 hover:bg-cyan-500 rounded p-2 text-white md:col-start-1 md:col-end-3"
            >
                {'Submit'}
            </button>
        </form>
    )
}
