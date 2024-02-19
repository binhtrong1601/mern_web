import React, { useEffect, useState } from "react";
import "./ProfilePage.scss";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Upload } from "antd";
import * as UserService from "../../services/UserServices";
import { useMutationHook } from "../../hooks/useMutationHook";
import * as message from "../../components/message/message";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setAddress(user?.address);
    setPhone(user?.phone);
    setAvatar(user?.avatar);
  }, [user]);

  const mutation = useMutationHook((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, data, access_token);
  });

  const { data } = mutation;

  useEffect(() => {
    if (mutation.isSuccess) {
      message.success();
    } else if (mutation.isError) {
      message.error();
    }
  }, [mutation.isSuccess, mutation.isError]);

  const dispatch = useDispatch();
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailUser(id, token);
    dispatch(UserService.updateUser({ ...res?.data, access_token: token }));
  };

  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnchangePhoneNumber = (e) => {
    setPhone(e.target.value);
  };
  const handleOnchangeAddress = (e) => {
    setAddress(e.target.value);
  };

  //handle-avatar-change 
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const handleAvatarChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setAvatar(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      name,
      email,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
    window.location.reload();
  };

  return (
    <div class="profile-page">
      <h3>User Info</h3>
      {mutation.isPending ? (
        <div className="profile-page-loading">
          <LoadingComponent styles={{ opacity: 0.5 }}></LoadingComponent>
        </div>
      ) : (
        <Form className="form-profile">
          <FormGroup>
            <Label for="form-profile-phone">Avatar</Label>
            <div className="form-profile-handle">
              <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                maxCount={1}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                beforeUpload={beforeUpload}
                onChange={handleAvatarChange}
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: "100%",
                      borderRadius:'50px'
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="form-profile-name">Name</Label>
            <div className="form-profile-handle">
              <Input
                id="form-profile-name"
                name="name"
                placeholder="Enter name"
                type="text"
                value={name}
                onChange={handleOnchangeName}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="form-profile-email">Email</Label>
            <div className="form-profile-handle">
              <Input
                id="form-profile-email"
                name="email"
                placeholder="Enter email"
                type="email"
                onChange={handleOnchangeEmail}
                value={email}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="form-profile-phone">Phone</Label>
            <div className="form-profile-handle">
              <Input
                id="form-profile-phone"
                name="phone"
                placeholder="Enter phone number"
                type="number"
                value={phone}
                onChange={handleOnchangePhoneNumber}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="form-profile-address">Address</Label>
            <div className="form-profile-handle">
              <Input
                id="form-profile-address"
                name="address"
                placeholder="Enter address"
                type="text"
                value={address}
                onChange={handleOnchangeAddress}
              />
            </div>
          </FormGroup>
          <FormGroup style={{ justifyContent: "center" }}>
            <Button
              style={{ padding: "10px 40px" }}
              onClick={handleUpdate}
              color="danger"
              outline
            >
              Update
            </Button>
          </FormGroup>
        </Form>
      )}
    </div>
  );
};

export default ProfilePage;
