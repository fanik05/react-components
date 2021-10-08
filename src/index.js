import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

if (module.hot) {
    module.hot.accept()
}

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                avatar={faker.image.avatar()}
                content="Nice post!"
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                avatar={faker.image.avatar()}
                content="Great info!"
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                avatar={faker.image.avatar()}
                content="Nice insights!"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))