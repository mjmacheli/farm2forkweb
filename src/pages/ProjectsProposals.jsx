import { useState, useCallback, useEffect } from 'react';
import { List, Card, Divider, Avatar } from 'antd';
import ProjectProgress from '../components/ProjectProgress';
import Navigation from '../components/Navigation';

const data = [
  {
    title: 'Project 1',
    description: " 1 Ant Design, a design language for background applications, is refined by Ant UED Team",
    companies: ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5", "Company 6"]
  },
  {
    title: 'Project 2',
    description: " 2 Ant Design, a design language for background applications, is refined by Ant UED Team",
    companies: ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5", "Company 6"]
  },
  {
    title: 'Project 3',
    description: " 3 Ant Design, a design language for background applications, is refined by Ant UED Team",
    companies: ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5", "Company 6"]
  },
  {
    title: 'Project 4',
    description: " 4 Ant Design, a design language for background applications, is refined by Ant UED Team",
    companies: ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5", "Company 6"]
  }
];

const progress = [
    {
      title: 'progress 1',
      img: 'img',
      description: '4 Ant Design, a design language for background applications, is refined by'
    },
    {
      title: 'Company 2',
      img: 'img',
      description: '2 Ant Design, a design language for background applications, is refined by'
    },
    {
      title: 'Company 3',
      img: 'img',
      description: '3 Ant Design, a design language for background applications, is refined by'
    },
    {
      title: 'Company 4',
      img: 'img',
      description: '5 Ant Design, a design language for background applications, is refined by'
    },
    {
      title: 'Company 1',
      img: 'img',
      description: '2 Ant Design, a design language for background applications, is refined by'
    },
    {
      title: 'Company 2',
      img: 'img',
      description: '4 Ant Design, a design language for background applications, is refined by'
    },
    {
      title: 'Company 3',
      img: 'img',
      description: '4 Ant Design, a design language for background applications, is refined by'
    },
    {
      title: 'Company 4',
      img: 'img',
      description: '4 Ant Design, a design language for background applications, is refined by'
    },
  ];

const ProjectProposal = () => {

  const [project, setProject] = useState()
  const [company, setCompany] = useState()
  const [projects,setProjects] = useState([])
  const [proposals, setProposals] = useState([])
  const [updates, setUpdates] = useState([])


  const getFarmProjectsUpdates = useCallback(async (id) => {
    let url = `https://foodxchange.herokuapp.com/updates/get-project-updates/${id}`;
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {updates} = await response.json();
    setUpdates(updates)
    },[updates, setUpdates]);

  const getFarmProjects = useCallback(async (id) => {
    let url = `https://foodxchange.herokuapp.com/projects/farm/${id}`;
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
    });

    const fproj = await response.json();
    console.log(' fp ', fproj)
    getFarmProjectsUpdates(1)
    },[proposals, setProposals]);

  const getProjectsUsers = useCallback(async (id) => {
    let url = `https://foodxchange.herokuapp.com/projects/get-users-in-proj/${1}`;
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
    });

    const proj = await response.json();
    setProposals(proj)
    },[proposals, setProposals]);

  useEffect(() => {
    getProjects()
  },[])

  const getProjects = useCallback(async () => {

    let url = `https://foodxchange.herokuapp.com/projects`;
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {proj} = await response.json();
    setProjects(proj)
    },[setProjects, projects]);

    const { Meta } = Card;

    useEffect(() =>{
      getProjects()
    },[])

    return (
        <>
        <Navigation />
        <h1>Project Proposals</h1>
            <Divider />
            <List
                itemLayout="horizontal"
                dataSource={projects}
                renderItem={item => (
                <List.Item onClick={(e) => {
                  e.preventDefault()
                  getProjectsUsers(item.id)
                  setProject(item)}}>
                    <List.Item.Meta
                      title={<a href="?">{item.mainTitle}</a>}
                      description={item.excerpt}
                    />
                </List.Item>
                )}
            />
            <Divider />
            {
              project && (
                <>

                <Card title={project.title}>
                 <p>{project.excerpt}</p>
                <Divider orientation="left">Companies In The Project</Divider>
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                    }}
                    dataSource={proposals}
                    renderItem={item => (
                    <List.Item onClick={() => getFarmProjects(item.id)}>
                        <Card style={{ width: 300, marginTop: 16 }}>
                            <Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={item.names}
                            />
                        </Card>
                    </List.Item>
                    )}
                />
            </Card>
              {
                updates && (<>
                  <Divider orientation='left'>Updates ::</Divider>
                  <ProjectProgress progress={updates} company={company}/>
                </>)
              }
                </>
              )
            }
        </>

    )
}

export default ProjectProposal