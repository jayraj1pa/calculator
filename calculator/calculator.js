function display(content){
    result.value += content
}

function clearResult() {
    result.value = "";
}

function exprEval(){
    try {
        result.value = eval(result.value)
    }catch (error) {
    result.value="invalid expression"
    
}
}

function del(){
    result.value = result.value.slice(0,-1)
}