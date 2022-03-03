import { useState } from "react";

const Register = () => {
  const blankForm = {
    name: "",
    username: "",
  };

  const [formData, setFormData] = useState(blankForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(formData);
    navigate("/");
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <div className="form-container">
        <form noValidate autoComplete="off" onSubmit={submitForm}>
          <label htmlFor="text">Nombre: </label>
          <input
            type="text"
            id="text"
            value={formData.name}
            onChange={changeData}
          ></input>
          <label htmlFor="text">Username:</label>
          <input
            type="text"
            id="text"
            value={formData.username}
            onChange={changeData}
          />
          <div>
            <button type="submit" href="#">
              Registro
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
