import React from 'react';
import { Card, Input, Select, Radio, Button, Form } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CheckoutForm = () => {
  const [form] = Form.useForm();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details Section */}
        <Card title="Billing Details" className="shadow-sm">
          <Form
            form={form}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email address"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Street Address"
              name="address"
            >
              <Input />
            </Form.Item>

            <div className="mb-4">
              <h3 className="font-medium mb-4">Shipping Address</h3>
              
              <Form.Item
                label="Consignee Name"
                name="consigneeName"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Consignee Phone Number"
                name="consigneePhone"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Consignee Address"
                name="consigneeAddress"
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              label="Note"
              name="note"
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Region"
              name="region"
              rules={[{ required: true, message: 'Please select your region!' }]}
            >
              <Select defaultValue="GREATER ACCRA">
                <Select.Option value="greater-accra">GREATER ACCRA</Select.Option>
                {/* Add more regions as needed */}
              </Select>
            </Form.Item>

            <Form.Item
              label="Town/City"
              name="town"
              rules={[{ required: true, message: 'Please select your town!' }]}
            >
              <Select placeholder="Select a Town">
                <Select.Option value="accra">Accra</Select.Option>
                {/* Add more towns as needed */}
              </Select>
            </Form.Item>
          </Form>
        </Card>

        {/* Cart Details Section */}
        <Card title="Cart Details" className="shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-md"></div>
              <div>
                <h3 className="font-medium">Skyworth Air Condition (1.5hp) 12v</h3>
                <p className="text-gray-600">₵ 3,700.00</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>GH₵ 3,700.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>GH₵ 0.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>GH₵ 3,700.00</span>
              </div>
            </div>

            <Form.Item name="paymentMethod" className="mb-6">
              <Radio.Group>
                <div className="space-y-2">
                  <Radio value="bank" className="block">
                    Bank / Mobile Money
                  </Radio>
                  <Radio value="cash" className="block">
                    Cash on delivery
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>

            <Button 
              type="primary" 
              size="large"
              className="w-full bg-green-700 hover:bg-green-800"
              onClick={() => form.submit()}
            >
              Place Order
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutForm;