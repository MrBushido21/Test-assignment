import { Link } from "react-router-dom";
import { dataComponent } from "../data/data";

export const Links = () => {
const data = dataComponent;
return (
    <div className="Links">
       <h2>Lets create a simple blog:</h2>
        {data.map(link =>
        <Link key={link.id} to={link.path}>{link.title}</Link>
        )}
    </div> 
);
}