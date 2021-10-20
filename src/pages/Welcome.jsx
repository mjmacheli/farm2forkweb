import { useState, useEffect, useCallback } from 'react';
import { Collapse, Divider } from 'antd';

import CreateProposal from '../components/CreateProposal';
import Proposal from '../components/Proposal';
import Navigation from '../components/Navigation';

const Welcome = () => {

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


    // const getProjectsUsers = useCallback(async (id) => {
    //   let url = `https://foodxchange.herokuapp.com/projects/get-users-in-proj/${id}`;
    //   const response = await fetch(url, {
    //       method: "GET",
    //       mode: "cors",
    //       headers: {
    //       "Content-Type": "application/json",
    //       },
    //   });
  
    //   const proj = await response.json();
  
    //   setProposals(proj)
    //   },[proposals]);
  
    useEffect(() => {
      getProjects()
    },[])

const { Panel } = Collapse;

const callback = (key) => {
  // getProjectsUsers(1)
}

    useEffect(() =>{
      getProjects()
    },[])

    return (
        <>
        <Navigation />

        <h1>Open a project proposal</h1>
        <Divider />
        <CreateProposal />
        <h1>Current Projects</h1>

        <Collapse defaultActiveKey={['1']} onChange={callback}>
          {
            projects && projects.map( p  => <Panel header={p.mainTitle} key={p.id}>
              <p>{p.excerpt}</p>
              <Divider orientation="left">Proposals</Divider>
              <Proposal data={proposals} index={p.id} test={p}/>
            </Panel>)
          }
    </Collapse>
  </>
    )
}

export default Welcome