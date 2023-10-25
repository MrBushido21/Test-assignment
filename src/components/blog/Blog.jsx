export const Blog = ({blog}) => {
    console.log(blog);
return (
<div className="Blog">
    <h1>{blog.title ? blog.title : "Title:"}</h1>
    <p>{blog.body ? blog.body : "Body:"}</p>
    <img src={blog.img} alt="Зображення" />
</div>
);
}

export default Blog