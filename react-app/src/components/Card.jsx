import {Rocket, Car, Home} from 'lucide-react'

function Card(props){
    return(
        <div className="w-[40vw] p-2 border-2 border-amber-500">
            <img src="" alt="" />
            <div>
                <h2 className="text-2xl font-bold">{props.title}</h2>
                <h4>{props.role} <Rocket color="#3e9392" /> </h4>
                <p>{props.detail} </p>
            </div>
        </div>
    )
}

export default Card