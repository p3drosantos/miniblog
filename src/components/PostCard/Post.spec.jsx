import { PostCard } from ".";

import { render } from "@testing-library/react";

const mock = {
    title : 'title 1',
    body : 'body 1',
    id : 1,
    cover: 'img/img.png'
}

describe('<Postcard/>', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...mock}/>)
    })
})