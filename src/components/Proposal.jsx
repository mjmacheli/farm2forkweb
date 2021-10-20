import { useEffect, useCallback, useState } from 'react';
import { List, Avatar } from 'antd';
import moment from 'moment'

const Proposal = ({data, index, test}) => {
  const [proposals, setProposals] = useState([])

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

    setProposals(proj)
    },[]);

  useEffect(() => {
    getProjectsUsers(index)
  },[index])

    return (

        <List
            itemLayout="horizontal"
            dataSource={proposals}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    title={item.names}
                    description={`Partner since ${moment(item.createdAt).toString()}`}
                />
            </List.Item>
            )}
        />

    )
}

export default Proposal