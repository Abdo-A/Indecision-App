class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            options:[]
        };
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            };
        });
    }

    handlePick(){
        const num = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[num]);
    }

    handleAddOption(option){
        if (!option) {
            return 'Please enter a valid option';
        } else if (this.state.options.indexOf(option)>-1){
            return 'Please enter a unique option';
        }
            this.setState((prevState)=>{
                return{
                    options: this.state.options.concat(option)
                };
            });
        }

    render(){
        const title='Indecision';
        const subtitle='Put your life in the hands of a computer';
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
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
    render(){
        return(
            <div>
                <button
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                    What should I choose?
                </button>
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Options</h1>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
    constructor(props){
        super(props);
        this.state={
            error:undefined
        }
        this.handleAddOption=this.handleAddOption.bind(this);
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        this.setState(()=>{
            return{
                error:error
            }
        });
        e.target.elements.option.value='';
    }
    render(){
        return (
            <div>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById("app"));
