import thread from '../components/thread/Thread'
import threads from "../components/thread/AllThreads"
import newThread from "../components/thread/NewTopic"
export default [
    {
        path: '/threads',
        name: 'threads',
        component: threads,
        children: [{
            path: 'new',
            name: 'create-thread',
            component: newThread
        }]
    },
    {
        path: '/thread/:id',
        name: 'thread-show',
        component: thread
    },
]