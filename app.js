const loaddata = async () => {
    const res = await fetch("./json/info.json");
    const data = await res.json();
    displaydata(data);
  };

const displaydata = (information) => {
    information.forEach(info => {
        // console.log(info)
        const div = document.getElementById('write');
        const ele = document.createElement('p');
        ele.innerHTML = `
        <article class="text-center">
            <img class="p-5 h-72 w-72" src='${info.image}'>
            <span class="font-bold writing">Name : ${info.name} <br> Id : ${info.id}</span>
        </article>
`;
        div.appendChild(ele);
    })
}


loaddata()