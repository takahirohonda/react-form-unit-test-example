import React from 'react';
import TextInput from './TextInput';
import MultiSelect from './MultiSelect';
import Options from './Options';
import Checkbox from './Checkbox';
import Button from './Button';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            languages:[],
            subscribed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiSelect = this.handleMultiSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[name]:value}, () => {
            console.log(this.state[name])
        });
    }

    handleMultiSelect(event){
        this.setState({[event.target.name]: [...event.target.selectedOptions].map(o => o.value)}); 
    }

    handleSubmit() {
        var subscribed = this.state.subscribed ? 'Yes' : 'No';
        alert(`Firstname: ${this.state.firstname}, Lastname: ${this.state.lastname}, Email: ${this.state.email}, Language: ${this.state.languages}, Subscribed: ${subscribed}`);
    }

    render(){

        var languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput labelFor="firstname" label="Firstname" className="form-control" type="text" name="firstname" id="firstname" value={this.state.firstname} handleChange={this.handleChange}/>
                <TextInput labelFor="lastname" label="Lastname" className="form-control" type="text" name="lastname" id="lastname" value={this.state.lastname} handleChange={this.handleChange}/>
                <TextInput labelFor="email" label="E-mail" className="form-control" type="email" name="email" id="email" value={this.state.email} handleChange={this.handleChange}/>
                <MultiSelect labelFor="languages" label="Languages" className="form-control mb-3" value={this.state.languages} handleChange={this.handleMultiSelect}>
                    <Options options={languages}/>
                </MultiSelect>
                <Checkbox labelFor="subscribed" label="Subscribe" checked={this.state.subscribed} className="form-check mb-3 text-right" handleChange={this.handleChange}/>
                <Button type="submit" className="btn btn-primary form-control">Submit</Button>
            
            </form>
        )
    }
}

export default Form;

