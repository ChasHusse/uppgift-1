/* CV SIDAN START */
const studiesData = document.querySelector("#studiesData")
const workData = document.querySelector("#workData")
const url = "./data.json"

async function getData (){
    let response = await fetch(url)
    if(response.ok){
        let data = await response.json()

        for(i = 0; i < data.studies.length; ++i){
            studiesData.innerHTML +=    `
                                        <ul>
                                            <li>
                                                <h4>${data.studies[i].title}</h4>
                                                <p>${data.studies[i].information}</p>
                                            </li>
                                        </ul>
                                        `
        }
        
        for(i = 0; i < data.work.length; ++i){
            workData.innerHTML +=   `
                                    <ul>
                                        <li>
                                            <h4>${data.work[i].title}</h4>
                                            <p>${data.work[i].information}</p>
                                        </li>
                                    </ul>
                                    `
        }
    }
}

getData()
/* CV SIDAN SLUT */