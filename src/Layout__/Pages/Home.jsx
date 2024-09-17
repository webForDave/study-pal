import { useState } from "react";
import DashboardEmptyState from "../Components/DashboardEmptyState";


function Home() {

    const [plans, setPlans] = useState([
        
    ]);

    return(
        <div>
            {
                plans.length === 0 ? 
                (
                    <DashboardEmptyState />
                ) : (
                    plans.map(plan => (
                        <div key={plan.id}>
                            {plan.title}
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Home; 