import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useState, useRef} from "react";

const dummyList = [
    {
        id:1,
        author: "이정환",
        content: "하이 1",
        emotion: 5,
        created_date: new Date().getTime()
    },
    {
        id:2,
        author: "홍길동",
        content: "하이 2",
        emotion: 2,
        created_date: new Date().getTime()
    },
    {
        id:3,
        author: "아무개",
        content: "하이 3",
        emotion: 1,
        created_date: new Date().getTime()
    }
]


function App() {
    const [data, setData ] = useState([]);

    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id: dataId.current,
        }
        dataId.current += 1;
        setData([newItem, ...data]);
    }

    const onRemove = (targetId) => {
        let newDiaryList = data.filter((it)=> it.id !== targetId);
        setData(newDiaryList);
    };

    const onEdit = (targetId, newContent) => {
        setData(
            data.map((it)=>it.id === targetId ? { ...it, content:newContent} : it)
        )
    }

    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
}

export default App;
