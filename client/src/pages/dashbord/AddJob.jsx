import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    console.log('created job');
  };

  const handleJobInput = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <div className='form-row'>
            <label htmlFor='jobType'>
              <label htmlFor='jobType'>job type</label>
              <select
                name='jobType'
                value={jobType}
                onChange={handleJobInput}
                className='form-select'
              >
                {jobTypeOptions.map((itemValue, index) => {
                  return (
                    <option key={index} value={itemValue}>
                      {itemValue}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
