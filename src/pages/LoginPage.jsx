import {
  useHistory,
} from "react-router-dom";
import { useState } from "react";

import { Form, Input, Button, Checkbox } from 'antd';

const Loginpage = () => {
  const [errorr, setError] = useState(false)

  const history = useHistory()

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username === "admin" && values.password === "secret"){
      history.push("/welcome")
    } else {
      setError(true)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{width: '400px', height:'100vh', margin: 'auto', display: 'flex', justifyItems: 'center', alignItems: 'center'}}>
      <div>
      <h1 style={{textAlign: 'center'}}>Welcome</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={errorr}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};


export default Loginpage