import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { editUser } from './userSlice';
import { AppState } from '../store';
import TextTitle from '../components/TextTitle';

type Props = { isLogin: boolean };

const EditUser: React.FC<Props> = (props) => {
  const { isLogin } = props;
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store: AppState) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user: any) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: '', email: '' });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate('/');
  };

  return (
    <div className='max-w-xl mx-auto mt-10'>
      <TextTitle
        label='Title'
        value={values.name}
        onChange={(e: any) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'title', placeholder: 'Enter a title' }}
      />
      <br />
      <TextField
        label='Content'
        value={values.email}
        onChange={(e: any) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'content', placeholder: 'Enter a content' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
