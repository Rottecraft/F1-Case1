import { useState, useEffect } from "react";

function VisitsCounter() {
    const [visits, setVisits] = useState(() => {
        const storedVisits = localStorage.getItem("visits");
        return storedVisits ? parseInt(storedVisits, 10) : 0;
    });

    useEffect(() => {
        const newVisits = visits + 1;
        setVisits(newVisits);
        localStorage.setItem("visits", newVisits);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <p>Visits: {visits}</p>
        </div>
    );
}

export default VisitsCounter;

