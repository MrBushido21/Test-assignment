import { useNavigate } from "react-router-dom"

const Photo = ({img, setImg, blog, setBlog}) => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        if(img.trim().length <= 0) return

         setBlog({...blog, img: img})

         navigate('/blog')
    }
return (
<form className='from-title' onSubmit={handleSubmit}>
    <h2>Load Photo:</h2>
    <input 
    required 
    type="text" 
    placeholder="Url photo" 
    value={img} 
    onChange={(e) => setImg(e.target.value)}/>
    <button>Create</button>
</form>
);
}

export default Photo