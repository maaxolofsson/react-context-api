import { createContext, useContext } from 'react'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { Context } from '../App'

const CreateTweetContext = createContext()
const TweetContext = createContext()

export default function Tweets() {
    const context = useContext(Context)
    const { tweets, setTweets, user, theme } = context
    return (
        <main>
            <div className={context.theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweetContext.Provider value={{ tweets, setTweets, user, theme }}>
                <CreateTweet />
            </CreateTweetContext.Provider>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {context.tweets.map((tweet, index) =>
                <TweetContext.Provider value={{ theme, tweet }} key={index}>
                    <Tweet key={index} />
                </TweetContext.Provider>
            )}
        </main>
    )
}

export { Tweets, CreateTweetContext, TweetContext }
