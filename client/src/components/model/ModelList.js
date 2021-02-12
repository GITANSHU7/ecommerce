import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { getModels } from "../../functions/model";

const ModelList = () => {
    const [models,setModels] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
       setLoading(true);
       getModels().then((m) => {
           setModels(m.data);
           setLoading(false);
       })
    }, []);

const showModels = () =>
    models.map((m) => (
        <div key={m._id} className="col btn btn-outlineed-primary btn-lg btn-block btn-raised m-3">
           <Link to = {`/model/${m.slug}`}> {m.name}</Link>
        </div>
    ));



    return (
        <>
         <h4 className="text-center p-3  display-4 jumbotron">Model</h4>
            
        <div className="container">
              
            <div className="row">
                {loading ? (<h4 className="text-cenetr">Loading</h4>) : showModels()}
            </div>
        </div>
        </>
    )
}
export default ModelList;