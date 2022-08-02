import { useState } from "react"

function TodoApp() {
    const [job, setJob] = useState('')
    const [list, setList] = useState(JSON.parse(localStorage.getItem('listJob')) ?? [])

    const saveLocalStorage = (data) => {
        const jsonLists = JSON.stringify(data)
        localStorage.setItem('listJob', jsonLists)
    }

    const handleSubmit = () => {
        setList(prew => {
            const newList = [...prew, job]
            saveLocalStorage(newList)
            return newList
        })

        setJob('')
    }

    const deleteJob = (job) => {
        setList(prew => {
            const newList = list.filter(item => item !== job)
            saveLocalStorage(newList)
            return newList

        })

    }
    return (
        <div>
            <div>
                <input value={job} onChange={e => setJob(e.target.value)} />
                <button onClick={handleSubmit}>add</button>
            </div>
            <ul>
                {list.map((job, index) => (
                    <div key={index} className="row">
                        <input type="checkBox" />
                        <li>{job}</li>
                        <button onClick={() => deleteJob(job)}>x</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp