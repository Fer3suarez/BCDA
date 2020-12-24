import MisDatos from "./MisDatos";
import MisNotas from "./MisNotas";
import Matricular from "./Matricular";

const MisCosas = (props) => {
    const {drizzle, drizzleState} = props;

    return <section className="AppMisCosas">
        <h2>Mis Cosas</h2>

        <Matricular drizzle={props.drizzle}
                   drizzleState={props.drizzleState} />

        <MisDatos drizzle={drizzle}
                  drizzleState={drizzleState}/>

        <MisNotas drizzle={drizzle}
                  drizzleState={drizzleState}/>

    </section>;
}

export default MisCosas;

