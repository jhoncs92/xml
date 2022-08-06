onload=()=>
{
    let analizador=new DOMParser();
    let doc=analizador.parseFromString(dado,"text/xml");
    let filhos=doc.documentElement.childNodes;
    let texto="";
    for(let filho of filhos)
    {
        if(filho.nodeType==1)
        {
            texto+="<p><b>"+filho.nodeName +"</b>: "+
            filho.firstChild.nodeValue+"</p>";
        }
    }
    document.getElementById("res").innerHTML=texto; // pegando o ID da pag. HTML
}