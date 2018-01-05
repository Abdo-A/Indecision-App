
let content='';

const onHideShow=()=>{
    if (content){
        content ='';
    }else {
        content='This is the content';
    }
    render();
}

const appRoot=document.getElementById("app");

const render= ()=>{
const visitbleTemplate=(
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onHideShow}>{content?'Hide details':'Show details'}</button>
        {content&&<p>{content}</p>}
    </div>
);

ReactDOM.render(visitbleTemplate,appRoot);
}
render();