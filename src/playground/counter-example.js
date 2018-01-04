const addOne=()=>{
    console.log('addOne');
    count=count+1;
    manualRerendering();
};
const minusOne=()=>{
    console.log('minusOne');
    count=count-1;
    manualRerendering();
};
const reset=()=>{
    console.log('reset');
    count=0;
    manualRerendering();
};

let count=0;

const appRoot=document.getElementById("app");

const manualRerendering = () => {
    const templateTwo =(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button><br/><br/>
            <button onClick={minusOne}>-1</button><br/><br/>
            <button onClick={reset}>Reset</button><br/><br/>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot);
};
manualRerendering();
