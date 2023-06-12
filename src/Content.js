import { useEffect, useState } from 'react'


const tabs = ['comments', 'posts', 'users'];

const lessons = [
    {
        id: 1,
        comment: "Hôm nay em đẹp lắm!!"
    },
    {
        id: 2,
        comment: "Anh chưa từng thấy thiên thần giáng trần..."
    },
    {
        id: 3,
        comment: "Cho đến khi anh gặp em"
    }
]

function Content() {
    const [datas, setDatas] = useState([]);
    const [type, setType] = useState('comments');
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [clock, setClock] = useState(180);
    const [avatar, setAvatar] = useState();
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(datas => {
                setDatas(datas);
            })
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        console.log('addEventListener');

        // clearup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('removeEventListener');
        }
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(prev => {
                if (prev === 0) {
                    prev = 180;
                } else {
                    prev = prev - 1;
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    const handleImageFile = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);

        e.target.value = null;
        console.log("Thêm một ảnh");
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id 
                                ? 'red' : 'black'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >{lesson.comment}</li>
                ))}
            </ul>
            <input
                type="file"
                onChange={handleImageFile}
            />
            {avatar && (
                <img src={avatar.preview} alt='' width="80%" />
            )}
            <h1>{clock}</h1>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        background: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <ul>
                {datas.map(data => (
                    <li key={data.id}>{data.title || data.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    go to top
                </button>
            )}
        </div>
    )
}

export default Content;