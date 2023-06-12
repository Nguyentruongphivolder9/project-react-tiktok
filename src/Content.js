import { useEffect, useState } from 'react'


const tabs = ['comments', 'posts', 'users'];

function Content() {
    const [datas, setDatas] = useState([]);
    const [type, setType] = useState('comments');
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [clock, setClock] = useState(180);
    const [avatar, setAvatar] = useState();

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
                if(prev === 0){
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
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    return (
        <div>
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