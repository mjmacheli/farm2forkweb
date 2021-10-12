import { useState, useEffect, useCallback } from 'react';
import { Collapse, Divider } from 'antd';

import CreateProposal from '../components/CreateProposal';
import Proposal from '../components/Proposal';

const Welcome = () => {

  const [value, setValue] = useState("**Hello world!!!**");
  const [projects,setProjects] = useState([])
  const [proposals, setProposals] = useState([])


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


    const getProjectsUsers = useCallback(async (id) => {
      let url = `https://foodxchange.herokuapp.com/projects/get-users-in-proj/${id}`;
      const response = await fetch(url, {
          method: "GET",
          mode: "cors",
          headers: {
          "Content-Type": "application/json",
          },
      });
  
      const proj = await response.json();
  
      console.log('rettt ', proj)
      setProposals(proj)
      },[proposals]);
  
    useEffect(() => {
      getProjects()
    },[])

const { Panel } = Collapse;

const callback = (key) => {
  getProjectsUsers(1)
  console.log(key);
}

    useEffect(() =>{
      getProjects()
    },[])

    return (
        <>
        <h1>Open a project proposal</h1>
        <Divider />
        <CreateProposal />
        <h1>Current Projects</h1>

        <Collapse defaultActiveKey={['1']} onChange={callback}>
          {
            projects && projects.map( p => <Panel header={p.mainTitle} key={p.id}>
              <p>{p.excerpt}</p>
              <Divider orientation="left">Proposals</Divider>
              <Proposal data={proposals}/>
            </Panel>)
          }
    </Collapse>
  </>
    )
}

export default Welcome