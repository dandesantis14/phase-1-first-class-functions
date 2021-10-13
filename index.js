const receivesAFunction = generic => generic();

const returnsANamedFunction = () => namedFunction;

function namedFunction(){
    console.log("hello");
}

const returnsAnAnonymousFunction = () => {
    return function(){
        console.log("This is anonymous!");
    }}