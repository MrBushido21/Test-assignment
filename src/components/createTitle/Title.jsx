import { useNavigate } from 'react-router-dom'
import './title.css'
const Title = ({title, setTitle, blog, setBlog}) => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

         if(title.trim().length <= 0) return

         setBlog({...blog, title: title})
         navigate('/dummyBody')
    }
return (
<form className='from-title' onSubmit={handleSubmit}>
    <h2>Create TItle:</h2>
    <input 
    required 
    type="text" 
    placeholder="Title" 
    value={title} 
    onChange={(e) => setTitle(e.target.value)}/>
    <button>Create</button>
</form>
);
}

export default Title