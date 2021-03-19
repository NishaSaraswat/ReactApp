import React, { Component } from 'react'
import formStyle from '../Form/form.module.css'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // input:'',
             //selectValue:''
        }
    }

    // hadleChange = (e) =>{
      
    //     const target = e.target;
    //     const value = target.type === 'checkbox'? target.checked : target.value;
    //     const name = target.name;
    //     console.log(target,value,name);
    //     this.setState({
    //         [name]: value
    //     });
        


    // }
    render() {
        return (
            <div className={formStyle.form}>
                <form onSubmit={this.props.handleFormValue}>
                    <input type="text" value={this.props.forminput} 
                    onChange = {this.props.handleFormValue} 
                    name = 'input'/>
                    <select className={formStyle.selectType} id="movietype"
                    name = 'selectValue'
                    value={this.props.selectinput}
                    onChange={this.props.handleFormValue}>
                        <option value="" onChange = {this.props.allContent}>All</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="game">Game</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Form
