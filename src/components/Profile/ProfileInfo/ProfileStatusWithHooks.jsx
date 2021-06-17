import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect( () => {
       setStatus(props.status)
   }, [props.status]);

   const  activateEditMode = () => {
      setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                { !editMode &&
                    //если не эдитмод, тогда покажи спан
                <div>
                    <span onDoubleClick={activateEditMode }>{props.status || "-----"}</span>
                </div>
                }
                { editMode &&
                // если эдитмоде, тогда покажи инпут
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode }
                           value={status}/>
                </div>
                }
            </div>
        )
    }

export default ProfileStatusWithHooks;