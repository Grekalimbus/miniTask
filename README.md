# Solution 1
   
```js
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
```

# Solution 1

```html
<header class="header">
    <div class="header_menu">
        <ul class="header_list">
            <li class="header_logo">
                <a href="/">
                    <picture>
                        <source srcset="/assets/img/logo.webp" type="image/webp"/>
                        <img src="/assets/img/logo.png" alt="logo">
                    </picture>
                </a>
            </li>
            <li class="header_item">
                <a href="/footbal">Футбол</a>
            </li>
            <li class="header_item">
                <a href="/basketball">Баскетбол</a>
            </li>
            <li class="header_item">
                <a href="/voleyball">Волейбол</a>
            </li>
            <li class="header_item">
                <a href="/hockey">Хоккей</a>
            </li>
        </ul>
    </div>
</header>
```