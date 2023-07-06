import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState";


export const TransactionForm = () => {


    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useGlobalState();


    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id:window.crypto.randomUUID(),
            description,
            amount
            
        });
        console.log(description, amount)
    }



    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter a description"
                    onChange={(e) => setDescription(e.target.value)}
                     />
                <input type="number" placeholder="0.00" step={0.01}
                    onChange={(e) => setAmount(e.target.value)}
                     />
                <button>
                    Add a transaction
                </button>
            </form>
        </div>
    )
}

