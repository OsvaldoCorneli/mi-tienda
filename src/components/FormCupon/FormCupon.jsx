const FormCupon = () => {
  return (
    <form>
      <label htmlFor="">
        Codigo: <input type="text" />{" "}
      </label>

      <label htmlFor="">
        Descuento: <input type="text" />
      </label>

      <button>Crear</button>
    </form>
  );
};

export default FormCupon;
