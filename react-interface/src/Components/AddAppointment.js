import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";


const Form = ({formData, onFormDataChange, publishFormData}) => {
    return (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Owner Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input onChange={(event) => onFormDataChange({...formData, ownerName: event.target.value})}
                type="text" name="ownerName" id="ownerName"
                  className="p-2 border-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
    
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Pet Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input type="text" name="petName" id="petName"
                onChange={(event) => onFormDataChange({...formData, petName: event.target.value})}
                  className="p-2 border-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
    
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Apt Date
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input type="date" name="aptDate" id="aptDate"
                onChange={(event) => onFormDataChange({...formData, aptDate: event.target.value})}
                  className="max-w-lg block w-full shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-2 border-gray-300 rounded-md" />
              </div>
            </div>
    
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Apt Time
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input type="time" name="aptTime" id="aptTime"
                onChange={(event) => onFormDataChange({...formData, aptTime: event.target.value})}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 sm:max-w-xs sm:text-sm border-2 border-gray-300 rounded-md" />
              </div>
            </div>
    
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Appointment Notes
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea id="aptNotes" name="aptNotes" rows="3"
                onChange={(event) => onFormDataChange({...formData, aptNotes: event.target.value})}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-2 block w-full sm:text-sm border-2 border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
              </div>
            </div>
    
    
            <div className="pt-5">
              <div className="flex justify-end">
                <button type="submit" 
                onClick={publishFormData}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  Submit
                </button>
              </div>
            </div>
          </div>
    );
}

const AddAppointment = ({onSendAppointment, lastId}) => {
    const clearData = {ownerName: '', petName: '', aptDate: '', aptTime: '', aptNotes: ''};
    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState();
    function formDataPublish() {
      let appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName, 
      petName: formData.petName, 
      aptDate: formData.aptDate + ' ' +formData.aptTime, 
      aptNotes: formData.aptNotes};
      onSendAppointment(appointmentInfo);
      setFormData(clearData);
      setToggleForm(!toggleForm);
    }
    return (
        <div className="p-2">
        <button onClick={() => {setToggleForm(!toggleForm)}}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${toggleForm ? 'rounded-t-md': 'rounded-md'}`}>
          <div><BiCalendarPlus className="inline-block align-text-top" />  Add Appointment</div>
        </button>
        {toggleForm && <Form 
        formData={formData}
        onFormDataChange={myFormData => setFormData(myFormData)}
        publishFormData={formDataPublish}/>}
      </div>
    );
}

export default AddAppointment;