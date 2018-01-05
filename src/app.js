class IndecisionApp extends React.Component{

    render(){
        const title='Indecision';
        const subtitle='Put your life in the hands of a computer';
        const options=['first','second','third'];
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render(){
        return(
            <div>
                <button onClick={this.handlePick}>What should I choose?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        alert('Remove all');
    }
    render(){
        return (
            <div>
                <h1>Options</h1>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option, index)=> <Option key={index} optionText={option} /> )}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        if(option){
            alert(option);
            e.target.elements.option.value='';
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById("app"));
