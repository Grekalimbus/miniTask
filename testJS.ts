interface ResData {
    userId: number
    id: number
    title: string
    body: string
}

class FifTeenthTitle {
    static #URL = 'http://jsonplaceholder.typicode.com/posts'
    static #ID = 15

    static #get(){
        fetch(FifTeenthTitle.#URL)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(resData => FifTeenthTitle.#getTitleFromJson(resData))
            .then(title => console.log(title))
            .catch(({message}) => console.log(message))
    }

    static #getTitleFromJson(resData: ResData[]){
        const itemWithTitle = resData.find(item => item.id === FifTeenthTitle.#ID)
        const title = itemWithTitle?.title

        return title
    }

    run(){
        FifTeenthTitle.#get()
    }
}

const fifTeenthTitle = new FifTeenthTitle()
fifTeenthTitle.run()