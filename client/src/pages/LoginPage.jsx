import React from 'react'
import {Form, Button, Input} from "antd"
import { Link } from 'react-router-dom'

function LoginPage() {


  const handlFish = (ev) =>{


  console.log(ev) 
  }



  return (
    <div className="authenticate-form">
            <div className="auth-form card p-3">
                <h1 className="card-title">Nice To Meet U</h1>
                <Form layout="vertical" onFinish={handlFish}>
                    <Form.Item label="Email" name="email">
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Button
                        className="primary-button my-2 full-width-button"
                        htmlType="submit"
                    >
                        REGISTER
                    </Button>

                    <Link to="/register" className="anchor mt-2">
                        CLICK HERE TO REGISTER
                    </Link>
                </Form>
            </div>
        </div>
  )
}

export default LoginPage