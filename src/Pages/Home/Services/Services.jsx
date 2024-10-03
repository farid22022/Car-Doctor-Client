
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import useServices from "../../../hooks/useServices";

const Services = () => {





    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doctor-server-farid22022-md-farid-hossen-rehads-projects.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])



    //DRY : Do not Repeat Yourself

    const services = useServices();



    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <form>
                    <input type="text" name="search" id="" />
                    <input type="submit" value="Search" className="btn"/>
                </form>
               
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services?.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;