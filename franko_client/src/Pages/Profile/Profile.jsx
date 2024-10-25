import React, { useState } from "react";
import { Card } from "antd";
import { EditOutlined } from "@ant-design/icons";

const Account = () => {
  const initialUserData = {
    fullName: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890"
  };

  const initialAddressData = {
    recepientName: "John Doe",
    streetName: "123 Main St",
    city: "New York",
    region: "NY",
    recepientPhone: "123-456-7890"
  };

  const [userData, setUserData] = useState(initialUserData);
  const [addressData, setAddressData] = useState(initialAddressData);
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const handleEditAccount = () => setIsEditingAccount(!isEditingAccount);
  const handleEditAddress = () => setIsEditingAddress(!isEditingAddress);

  const handleSaveAccount = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setUserData({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber")
    });
    setIsEditingAccount(false);
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setAddressData({
      recepientName: formData.get("recepientName"),
      streetName: formData.get("streetName"),
      city: formData.get("city"),
      region: formData.get("region"),
      recepientPhone: formData.get("recepientPhone")
    });
    setIsEditingAddress(false);
  };

  const CardContent = ({ title, isEditing, onEdit, onSubmit, children }) => (
    <Card 
      size="small"
      title={<span className="text-base font-medium">{title}</span>}
      extra={
        <button
          onClick={onEdit}
          className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
        >
          <EditOutlined className="text-sm" />
          <span className="text-sm">More</span>
        </button>
      }
      className="w-full"
      bodyStyle={{ padding: '16px' }}
    >
      {children}
    </Card>
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl mt-20">
      <h4 className="text-lg font-medium mb-4 ml-20">My Profile</h4>
      
      <div className="space-y-4">
        <CardContent 
          title="Account Details"
          isEditing={isEditingAccount}
          onEdit={handleEditAccount}
          onSubmit={handleSaveAccount}
        >
          {isEditingAccount ? (
            <form onSubmit={handleSaveAccount} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={userData.fullName}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  defaultValue={userData.email}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  defaultValue={userData.phoneNumber}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleEditAccount}
                  className="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-2 text-sm text-gray-600">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </div>
          )}
        </CardContent>

        <CardContent
          title="Address Details"
          isEditing={isEditingAddress}
          onEdit={handleEditAddress}
          onSubmit={handleSaveAddress}
        >
          {isEditingAddress ? (
            <form onSubmit={handleSaveAddress} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="recepientName"
                  defaultValue={addressData.recepientName}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Recipient Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="streetName"
                  defaultValue={addressData.streetName}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Street Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  defaultValue={addressData.city}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="City"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="region"
                  defaultValue={addressData.region}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Region"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="recepientPhone"
                  defaultValue={addressData.recepientPhone}
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Recipient Phone"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleEditAddress}
                  className="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-2 text-sm text-gray-600">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </div>
          )}
        </CardContent>
      </div>
    </div>
  );
};

export default Account;