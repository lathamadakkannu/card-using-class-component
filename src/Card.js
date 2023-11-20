 import {Component} from "react"
class Card extends Component{
    render(){
            const {cardData}=this.props
            const cardStore=cardData.map((e,i)=>{
                return(
                
                    <div className="card-col" key={i}>
                        <div className="card">

                        <h2> {e.name}</h2>
                        <p>Rating: {e.rating}</p>
                        <p>Veg: {e.pureveg}</p>   
                        <p>Amount: {e.amount} Rs</p>
                        <h5>{e.slogan}</h5>          
                    </div>          
                    </div>
                )
            })
                 
return(

    <div>
        <div className="card-container">
            <div className="card-row">
                {cardStore}
            </div>
        </div>
    </div>
)
    }
}
export default Card;