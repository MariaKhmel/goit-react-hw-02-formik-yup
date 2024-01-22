import { Component } from "react"

export class Sticker extends Component{
    state = {
    isOpen:false,
    }

    toggleCardLabel=()=>{
        this.setState(prevState => ({ isOpen: !prevState.isOpen}))
    }
    render() {
        const { sticker: { label, img }, onSelect }=this.props;
        return (
            <div style={{ border: '1px solid black' }}
                onClick={() => {
                        onSelect(label)
                        this.toggleCardLabel();
                    }}>
                <img src={img} alt={label} />
                {this.state.isOpen &&  <p> {label}</p>}
        
            </div >
        )
    }
}



// ({ sticker: { label, img }, onSelect }) => {
 
//     return (
//         <div style={{ border: '1px solid black' }}
//             onClick={() => onSelect(label)}>
//             <img src={img} alt={label} />
//             {/* <p> {label}</p> */}
// </div>
//     )
// }