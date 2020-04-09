import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './DataTable.css';
import { DataContext } from '../../App';

const DataTable = (props) => {

   const ContextData = useContext(DataContext)

    return (
        <div className="bg-white rounded shadow-sm p-3">
        <div className="py-3 d-flex align-items-center justify-content-between">
            <h6 className="text-primary"> {props.tableName} </h6>
            <div className="selector">
                <FontAwesomeIcon className="icon"icon={faCalendarAlt}/> 
                <select className="p-1 rounded" name="" id="">
                    <option value=""> Weak</option>
                </select>
            </div>
            
        </div>

        {
            props.children
        }
        
        </div>
    );
};

export default DataTable;