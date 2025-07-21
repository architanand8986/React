function customRender(reactElement, container) {

    // const domELement = document.createElement(reactElement.type);
    // domELement.innerHTML= reactElement.children;
    // domELement.setAttribute('href', reactElement.props.href);
    // domELement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domELement);

    const domELement = document.createElement(reactElement.type);
    domELement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        if(prop == 'children')continue;
        domELement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domELement);
}


const reactElement = {
    type: 'a',
    props:{
        href:"google.com",
        targer: "_blank",
    },
    children: 'Click me to visit google'
}


const mainConstainer = document.querySelector('#root')

customRender(reactElement, mainConstainer)