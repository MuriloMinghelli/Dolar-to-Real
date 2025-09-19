
function converter()
{
    let US = document.getElementById("US").value
    let BR = document.getElementById("BR").value

    if(US=="") 
    {
        document.getElementById("US").value=BR * 0.19
    }
    else 
    {
        document.getElementById("BR").value=US * 5.32
    }
}

function excluir() 
{
    document.getElementById("US").value=""
    document.getElementById("BR").value=""

}