import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

    const service = useLoaderData();
    const { title , _id } = service;

    // console.log(service, title)

    return (
        <div>
            <h2 className="text-xl">{title}</h2>
            <h2 className="text-8xl"></h2>
        </div>
    );
};

export default CheckOut;