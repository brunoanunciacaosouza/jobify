import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { FormRow, Alert } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={({ target }) => setName(target.value)}
          />
          <FormRow
            type='text'
            name='lastName'
            value={lastName}
            handleChange={({ target }) => setLastName(target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={({ target }) => setEmail(target.value)}
          />
          <FormRow
            type='text'
            name='location'
            value={location}
            handleChange={({ target }) => setLocation(target.value)}
          />

          <button className='btn bnt-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
