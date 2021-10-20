import { useState } from 'react';
import { Timeline, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const ProjectProgress = ({progress}) => {
    const [post, setPost] = useState()

    const { Meta } = Card;

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="">
        <Timeline>

            {progress.map(p => (
                <>
                    <Timeline.Item color="green" onClick={() => setPost(p)}>
                        <><h1>{p.title}</h1><p>{p.update}</p></>
                    </Timeline.Item>
                </>
            ))}
        </Timeline>
        </div>

        <div className="">
        {
            post && <Card
                hoverable
                cover={<img alt="example" src={`data:image/png;base64,${post.img}`} />}
            >
                {console.log('dd ', post.img)}
                <Meta title={post.title} description={post.update} />
            </Card>
        }
        </div>
        
        </div>
    )
}

export default ProjectProgress