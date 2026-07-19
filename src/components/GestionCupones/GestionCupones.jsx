import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { addDoc, collection, deleteDoc, getDocs , doc} from "firebase/firestore";

function GestionCupones() {
  const [coupons, setCoupons] = useState([]);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  
  useEffect(() => {

    obtenerCupones();
  }, []);

  const obtenerCupones = async () => {
    try {
      const response = await getDocs(collection(db, "cupones"));

      const lista = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCoupons(lista);
    } catch (error) {
      console.error("Error al oobneter los cupones:", error);
      alert("Ocurrio un error al cargar los cupones");
    }
  };

  const crearCupon = async (e) => {
    e.preventDefault();

    const discount1 = Number(discount);

    if (!code || !discount1) {
      alert("Complete todos los campos");
      return;
    }


    if (discount1 < 1 || discount1 > 100) {
      alert("El descuento debe estar entre 1 y 100");
      return;
    }

    try {
      await addDoc(collection(db, "cupones"), {
        code,
        discount: Number(discount1),
      });
      alert("Cupon creado correctamente")
      setCode("");
      setDiscount("");

      await obtenerCupones();
    } catch (error) {
      console.error(error);
      alert("Error al crear el cupon");
    }
  };

  const eliminarCupon = async (cuponID) => {
    try {
      await deleteDoc(doc(db,'cupones',cuponID))
      alert("Cupon eliminado correctamente")
      await obtenerCupones()

    } catch (error) {
      console.error(error);
      alert("Error al elimnar el cupon");
    }


  }

  console.log("INGRESO CACHO", coupons);

  return (
    <div>
      <h2>Administracion de Cupones</h2>

       <form onSubmit={crearCupon}>
      <label>
        Codigo: <input 
        type="text" 
        placeholder="Codigo"
        required
        value={code}
        onChange={(e)=> setCode(e.target.value)}
        />
      </label>

      <label>
        Descuento: <input 
        type="number"
        placeholder="Descuento"
        min='1'
        max='100'
        required 
        value={discount}
        onChange={(e)=> setDiscount(e.target.value)}
        
      
        />
      </label>

      <button type="submit">Crear</button>
    </form>

      {coupons ? (
        <section>
          <h3>Lista de cupones</h3>

          {coupons.map((item) => (
            <div key={item.id}>
              <p>
                <strong>Codigo:</strong>
                {item.code}
              </p>

              <p>
                <strong>Descuento:</strong>
                {item.discount}
              </p>
              <button onClick={()=> eliminarCupon(item.id)}>Eliminar</button>
            </div>
          ))}
        </section>
      ) : (
        <h3>No hay cupones</h3>
      )}
    </div>
  );
}

export default GestionCupones;
