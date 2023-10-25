import { useNavigate } from "react-router-dom"

export const Body = ({body, setBody, blog, setBlog}) => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

         if(body.trim().length <= 0) return

         setBlog({...blog, body: body})

         navigate('/dummyPhoto')
    }

return (
    
<form className='from-title' onSubmit={handleSubmit}>
    <h2>Create Body:</h2>
    <textarea cols="30" rows="10" 
    required
    value={body}
    onChange={(e) => setBody(e.target.value)}
    />
    <button>Create</button>
</form>
);
}