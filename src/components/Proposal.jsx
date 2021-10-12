import { useEffect, useCallback, useState } from 'react';
import { List, Avatar } from 'antd';

const Proposal = ({data}) => {
  const [proposals, setProposals] = useState([])


  // const getProjects = useCallback(async () => {
  //   let url = `https://foodxchange.herokuapp.com/projects/get-users-in-proj/${id}`;
  //   const response = await fetch(url, {
  //       method: "GET",
  //       mode: "cors",
  //       headers: {
  //       "Content-Type": "application/json",
  //       },
  //   });

  //   const proj = await response.json();

  //   console.log('rettt ', proj)
  //   setProposals(proj)
  //   },[setProposals, proposals]);

  // useEffect(() => {
  //   getProjects()
  // },[])

    // const data = [
    //     {
    //       title: 'Project Progress on user 1',
    //     },
    //     {
    //       title: 'Project Progress on user 2',
    //     },
    //     {
    //       title: 'Project Progress on user 3',
    //     },
    //     {
    //       title: 'Project Progress on user 4',
    //     },
    //   ];

    return (

        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    title={<a href="https://ant.design">{item.names}</a>}
                    description={`Partner since ${item.createdAt}`}
                />
            </List.Item>
            )}
        />

    )
}

export default Proposal