import { useState, useEffect, useCallback } from 'react';
import {
  Form,
  Input,
  Button,
  Tag,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Divider,
} from 'antd';

import ImageUploading, { ImageListType } from "react-images-uploading";

const CreateProposal = () => {

  const [museums, setMuseums] = useState()
  const [hubs,setHubs] = useState([])
  const [images, setImages] = useState([]);
  const [project, setProject] = useState()
  const [title,setTitle] = useState()
  const [excerpt,setExcerpt] = useState()
  const [body,setBody] = useState()
  const [ sending, setSending ] = useState(false)

  const addProject = useCallback(async () => {
    setSending(true)
    const data = {
      hubId: 3,
      title: title,
      subtitle: title,
      mainTitle: title,
      excerpt: excerpt,
      img: images[0] ? images[0].dataURL: 'https://picsum.photos/700',
      body: body
    }
    let url = `https://foodxchange.herokuapp.com/projects`;

    fetch(url, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        setSending(false)
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });

},[setHubs, title, excerpt, images, body]);

  const getHubs = useCallback(async () => {

    let url = `https://foodxchange.herokuapp.com/hubs`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });

  const {hubs} = await response.json();
  setHubs(hubs)
},[setHubs, hubs]);

  useEffect(() => {
    getHubs();
  },[museums])

  const onImageChange = (
    imageList,
  ) => {
    setImages(imageList);
  };


  return (
    <>
    <h1 style={{textAlign: 'center'}}>Add New Project Proposal</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: 'large' }}
        size={'large'}
      >
        <Form.Item label="Project title">
          <Input onChange={(e) => setTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Project Cover">
          <ImageUploading
              multiple
              value={images}
              onChange={onImageChange}
              maxNumber={2}
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                isDragging,
                dragProps
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <Button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                   Click To Upload
                  </Button>
                  {" "} <span>{imageList[0] ? imageList[0].file.name : ''}</span>
                </div>
              )}
            </ImageUploading>


        </Form.Item>
        <Form.Item  label="Project Excerpt">
          <Input.TextArea  onChange={(e) => setExcerpt(e.target.value)} />
        </Form.Item>
        <Form.Item  label="Project Description">
          <Input.TextArea  onChange={(e) => setBody( e.target.value)}/>
        </Form.Item>
        <Form.Item label="Select Hub">
          <Select onChange={( e) => setProject({...project, hubId: 3})}>
            {hubs && hubs.map(h => <Select.Option value={h.title}>{h.title}</Select.Option>)}
          </Select>
        </Form.Item>
        
        <Form.Item label="Quantity">
          <InputNumber />
        </Form.Item>
        <Form.Item>
        {sending && <p style={{textAlign: 'center', color: 'limegreen', fontWeight: '900'}}>Sending ...</p>}
        </Form.Item>
        <Form.Item label="Publish">
          <Button onClick={addProject}>Publish</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProposal