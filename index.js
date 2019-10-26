

function makeIcon(name,location, className = "noclass" ){

    //      var svg=document.createElement("svg");
           var x='./sprites.svg#';
           var y=name;//icon-origin
    
           var z=x+y;//     ---->./sprites.svg#icon-search
    
    // var use=document.createElement("use");
    // use.setAttribute("xlink:href","./sr/symbol-defs.svg#icon-search");
    
    //  svg.appendChild(use);
    
    var svg=document.createElementNS('http://www.w3.org/2000/svg',"svg");
    
    var use=document.createElementNS('http://www.w3.org/2000/svg',"use");
    
    
      use.setAttributeNS('http://www.w3.org/1999/xlink',"href",`${location}#${name}`);// ./sprites.svg#icon-search
    
      svg.appendChild(use);
    
    
      svg.classList.add(className)
    
     return svg;
    
    }
    
    
    
    