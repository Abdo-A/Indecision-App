const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options:[]
};

const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    if (option) {
        console.log(option);
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};

const onRemoveAll = ()=>{
    app.options=[];
    render();
};

const appRoot=document.getElementById("app");

const render=()=> {
const template= (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle&&<p>{app.subtitle}</p>}
        <p>{app.options.length>0? 'Here are your options:':'No options, sorry'}</p>
        <p>{app.options.length}</p>
        <button onClick={onRemoveAll}>Remove all</button>
        <ol>
            {app.options.map((number, index)=><li key={index}>{number}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add an option</button>
        </form>
    </div>
);

ReactDOM.render(template,appRoot);
};
render();