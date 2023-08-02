import { useState } from 'react';

const ToDoForm = ({addToDo}) => {
    const [ value, setValue ] = useState("");
    const [ category, setCategory ] = useState("");

    const handleSumit = (e) => {
        e.preventDefault();
        console.log(value, category)
        if (!value || !category) return;
        addToDo(value, category);
        setValue("");
        setCategory("");
    };

    return (
        <div className='todo-form'>
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSumit}>
                <input 
                type="text" 
                placeholder='digite o titulo' 
                value={value}
                onChange={(e) => setValue(e.target.value)} 
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm
